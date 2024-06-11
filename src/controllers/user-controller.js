import { useDispatch, useSelector } from 'react-redux'

import { userSlice } from '@/store'
import { authService } from '@/services/index.js'

export function useUserController() {
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()

    async function login(payload) {
        try {
            const { status, data } = await authService.callLogin(payload)
            if (status !== 200) {
                return false
            }

            dispatch(userSlice.actions.set(data))
            return true
        } catch (err) {
            console.error(err)
            return false
        }
    }

    function logout() {
        dispatch(userSlice.actions.clear())
    }

    async function withdraw() {
        try {
            const { status, data } = await authService.callWithdraw()
            if (status !== 200) {
                return false
            }

            dispatch(userSlice.actions.clear())
            return true
        } catch (err) {
            console.error(err)
            return false
        }
    }

    return {
        data: user,
        isLoggedIn: user.username !== 'guest',

        login,
        logout,
        withdraw,
    }
}
