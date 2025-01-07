import { useDispatch, useSelector } from 'react-redux'

import { githubRepoListSlice } from '@/store'
import { repoClient, reposClient } from '@/client/index.js'

export function useGithubRepoList() {
    const githubRepoList = useSelector((state) => state.githubRepoList)
    const dispatch = useDispatch()

    async function getList() {
        try {
            const { status, data } = await reposClient.callGetList()
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
                await repoClient.callAddRepository(payload)
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
                await repoClient.callDeleteRepository(payload)
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
                await repoClient.callModifyRepository(payload)
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
