import { useDispatch, useSelector } from 'react-redux'

import { userClient } from '@/client/user-client.js'
import { profileSlice } from '@/store/index.js'

export function useProfile() {
    const profile = useSelector((state) => state.profile)
    const dispatch = useDispatch()

    async function getData(payload) {
        clearData()

        try {
            const { status, data } = await userClient.callGetInfo(payload)

            dispatch(profileSlice.actions.set(data))
            return true
        } catch (err) {
            console.error(err)
            return false
        }
    }

    function clearData() {
        dispatch(profileSlice.actions.clear())
    }

    return { data: profile, getData }
}
