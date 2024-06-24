import { useDispatch, useSelector } from 'react-redux'

import { githubRepoListSlice } from '@/store'
import { repoService, reposService } from '@/services/index.js'

export function useGithubRepoListController() {
    const githubRepoList = useSelector((state) => state.githubRepoList)
    const dispatch = useDispatch()

    async function getList() {
        try {
            const { status, data } = await reposService.callGetList()
            if (status !== 200) {
                return false
            }

            dispatch(githubRepoListSlice.actions.set([...data]))
            return true
        } catch (err) {
            console.error(err)
            return false
        }
    }

    async function addRepository(payload) {
        try {
            const { status, data } =
                await repoService.callAddRepository(payload)
            if (status !== 200) {
                return false
            }

            return true
        } catch (err) {
            console.error(err)
            return false
        }
    }

    async function deleteRepository(payload) {
        try {
            const { status, data } =
                await repoService.callDeleteRepository(payload)
            if (status !== 200) {
                // if (status === 403) {
                //     alert('This repository already has sponsor')
                // }
                return false
            }

            return true
        } catch (err) {
            if (err.response.status === 403) {
                alert('This repository already has sponsor')
            }
            console.error(err)
            return false
        }
    }

    async function modifyRepository(payload) {
        try {
            const { status, data } =
                await repoService.callModifyRepository(payload)
            if (status !== 200) {
                return false
            }

            return true
        } catch (err) {
            console.error(err)
            return false
        }
    }

    return {
        data: githubRepoList,

        getList,
        addRepository,
        deleteRepository,
        modifyRepository,
    }
}
