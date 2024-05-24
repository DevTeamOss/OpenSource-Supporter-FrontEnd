import { useDispatch, useSelector } from 'react-redux'

import client from '@/client.js'
import { repoInfoSlice } from '@/store/index.js'

export function useRepoInfoController() {
    const repoInfo = useSelector((state) => state.repoInfo)
    const dispatch = useDispatch()

    async function getRepoInfo({ id }) {
        try {
            const { data } = await client.get('/api/repo', {
                params: { id },
            })

            dispatch(repoInfoSlice.actions.set({ ...data }))
        } catch (err) {
            console.error(err)
        }
    }

    async function getInfoWithViewCount({ id }) {
        try {
            const { data } = await client.put('/api/repo/view-count', { id })

            dispatch(repoInfoSlice.actions.set({ ...data }))
        } catch (err) {
            console.error(err)
        }
    }

    function clearData() {
        dispatch(repoInfoSlice.actions.clear())
    }

    return {
        data: repoInfo,

        clearData,
        getRepoInfo,
        getInfoWithViewCount,
    }
}
