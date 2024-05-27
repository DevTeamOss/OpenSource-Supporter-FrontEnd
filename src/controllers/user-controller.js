import { useDispatch, useSelector } from 'react-redux'

import client from '@/client'
import { userSlice } from '@/store'

export function useUserController() {
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()

    async function login({ code }) {
        try {
            const { status, data } = await client.get('/api/auth/login', {
                params: { code },
            })
            if (status !== 200) {
                return false
            }

            const {
                userName,
                customName,
                email,
                avatarUrl,
                accessToken,
                remainingPoint,
                totalPoint,
            } = data

            dispatch(
                userSlice.actions.set({
                    username: userName,
                    name: customName,
                    email,
                    avatarUrl,
                    accessToken,
                    remainingPoint,
                    totalPoint,
                }),
            )
            return true
        } catch (err) {
            console.error(err)
            return false
        }
    }

    function logout() {
        dispatch(userSlice.actions.clear())
    }

    return {
        data: user,
        isLoggedIn: user.username !== 'guest',

        login,
        logout,
    }
}
