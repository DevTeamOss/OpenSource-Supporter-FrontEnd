import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { repoService } from '@/services/index.js'
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
        const { data } = await repoService.callGetDetails({
            repoId: selectedRepoId,
        })
        setInfo({ ...data })
    }

    return {
        data: info,
        id: selectedRepoId,

        selectRepo,
        getData,
        reset,
    }
}
