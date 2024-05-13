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

            const { login, name, avatar_url } = data

            dispatch(
                userSlice.actions.set({
                    username: login,
                    name,
                    avatarUrl: avatar_url,
                }),
            )
        } catch (err) {
            console.error(err)
        }
    }

    return {
        data: user,
        login,
    }
}
