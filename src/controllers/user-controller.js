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

            dispatch(userSlice.actions.set({ ...data }))
        } catch (err) {
            console.error(err)
        }
    }

    return {
        data: user,
        login,
    }
}
