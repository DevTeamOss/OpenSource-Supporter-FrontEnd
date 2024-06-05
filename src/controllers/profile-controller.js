import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { userService } from '@/services/user-service.js'
import { profileSlice } from '@/store/index.js'

export function useProfileController() {
    const profile = useSelector((state) => state.profile)
    const dispatch = useDispatch()

    async function getData(payload) {
        try {
            const { status, data } = await userService.callGetInfo(payload)
            if (status !== 200) {
                return false
            }

            dispatch(profileSlice.actions.set(data))
            return true
        } catch (err) {
            console.error(err)
            return false
        }
    }

    return { data: profile, getData }
}
