import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { pointClient, repoClient } from '@/client/index.js'
import { selectedRepoIdSlice } from '@/store/index.js'

export function useRepoDetail() {
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
        const { status, data } = await repoClient.callGetDetails({
            repoId: selectedRepoId,
        })
        if (status !== 200) {
            return false
        }

        setInfo({ ...data })
        return true
    }

    async function support(amount) {
        const { status } = await pointClient.callSupport({
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
