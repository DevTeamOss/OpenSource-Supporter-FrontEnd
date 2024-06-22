import { useDispatch, useSelector } from 'react-redux'

import { pointService } from '@/services/index.js'
import { pointSlice } from '@/store/index.js'

export function usePointController() {
    const point = useSelector((state) => state.point)
    const dispatch = useDispatch()

    async function getSummary() {
        const { status, data } = await pointService.callGetSummary()
        if (status !== 200) {
            return false
        }

        dispatch(
            pointSlice.actions.set({
                ...data,
            }),
        )
        return true
    }

    async function chargePoint({ amount }) {
        const { status, data } = await pointService.callCharge({
            price: amount,
        })

        return status === 200
    }

    return { data: point, getSummary, chargePoint }
}
