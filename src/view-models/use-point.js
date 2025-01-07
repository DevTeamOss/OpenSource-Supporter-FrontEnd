import { useDispatch, useSelector } from 'react-redux'

import { pointClient } from '@/client/index.js'
import { pointSlice } from '@/store/index.js'

export function usePoint() {
    const point = useSelector((state) => state.point)
    const dispatch = useDispatch()

    async function getSummary() {
        const { status, data } = await pointClient.callGetSummary()
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
        const { status, data } = await pointClient.callCharge({
            price: amount,
        })

        return status === 200
    }

    return { data: point, getSummary, chargePoint }
}
