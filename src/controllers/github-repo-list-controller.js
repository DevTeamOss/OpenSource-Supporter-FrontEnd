import { useDispatch, useSelector } from 'react-redux'

import client from '@/client'
import { githubRepoListSlice } from '@/store'

export function useGithubRepoListController() {
    const githubRepoList = useSelector((state) => state.githubRepoList)
    const dispatch = useDispatch()

    async function getList() {
        try {
            const { status, data } = await client.get('/api/repos/modal')
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

    async function addRepository({ username, repoName, description, tags }) {
        try {
            const { status, data } = await client.post('/api/repo', {
                userName: username,
                repoName,
                description,
                tags,
            })
            if (status !== 200) {
                return false
            }

            return true
        } catch (err) {
            console.error(err)
            return false
        }
    }

    async function deleteRepository({ repoId }) {
        try {
            const { status, data } = await client.delete('/api/repo', {
                data: { repoId },
            })
            if (status !== 200) {
                return false
            }

            return true
        } catch (err) {
            console.error(err)
            return false
        }
    }

    async function modifyRepository({ repoId, description, tags }) {
        try {
            const { status, data } = await client.put('/api/repo', {
                repoId,
                description,
                tags,
            })
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
