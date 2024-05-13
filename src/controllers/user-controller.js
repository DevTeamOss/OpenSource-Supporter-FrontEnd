import { useDispatch, useSelector } from 'react-redux'

import client from '@/client'
import { userSlice } from '@/store'

export function useUserController() {
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()

    async function login({ code }) {
        try {
            const { data } = await client.get('/api/auth/login', {
                params: { code },
            })

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
        } catch (err) {
            console.error(err)
        }
    }

    return {
        data: user,
        isLoggedIn: user.username !== 'guest',

        login,
    }
}
