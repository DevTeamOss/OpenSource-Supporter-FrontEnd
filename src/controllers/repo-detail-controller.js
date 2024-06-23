import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { pointService, repoService } from '@/services/index.js'
import { selectedRepoIdSlice } from '@/store/index.js'

export function useRepoDetailController() {
    const selectedRepoId = useSelector((state) => state.selectedRepoId)
    const dispatch = useDispatch()

    const [info, setInfo] = useState({})

    function selectRepo(id) {
        dispatch(selectedRepoIdSlice.actions.set(id))
    }

    function reset() {
        dispatch(selectedRepoIdSlice.actions.set(null))
    }

    async function getData() {
        const { status, data } = await repoService.callGetDetails({
            repoId: selectedRepoId,
        })
        if (status !== 200) {
            return false
        }

        setInfo({ ...data })
        return true
    }

    async function support(amount) {
        const { status } = await pointService.callSupport({
            repoId: selectedRepoId,
            price: amount,
        })

        return status === 200
    }

    return {
        data: info,
        id: selectedRepoId,

        selectRepo,
        getData,
        support,
        reset,
    }
}
