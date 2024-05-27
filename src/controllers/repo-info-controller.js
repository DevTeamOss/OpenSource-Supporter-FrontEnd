import { useDispatch, useSelector } from 'react-redux'

import client from '@/client.js'
import { repoInfoSlice } from '@/store/index.js'

export function useRepoInfoController() {
    const repoInfo = useSelector((state) => state.repoInfo)
    const dispatch = useDispatch()

    async function getRepoInfo({ id }) {
        try {
            const { status, data } = await client.get('/api/repo', {
                params: { id },
            })
            if (status !== 200) {
                return false
            }

            dispatch(repoInfoSlice.actions.set({ ...data }))
            return true
        } catch (err) {
            console.error(err)
            return false
        }
    }

    async function getInfoWithViewCount({ id }) {
        try {
            const { status, data } = await client.put('/api/repo/view-count', {
                id,
            })
            if (status !== 200) {
                return false
            }

            dispatch(repoInfoSlice.actions.set({ ...data }))
            return true
        } catch (err) {
            console.error(err)
            return false
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
