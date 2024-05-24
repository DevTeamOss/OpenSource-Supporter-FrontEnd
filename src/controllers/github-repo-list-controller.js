import { useDispatch, useSelector } from 'react-redux'

import client from '@/client'
import { githubRepoListSlice } from '@/store'

export function useGithubRepoListController() {
    const githubRepoList = useSelector((state) => state.githubRepoList)
    const dispatch = useDispatch()

    async function getList() {
        try {
            const { data } = await client.get('/api/repos/modal')

            dispatch(githubRepoListSlice.actions.set([...data]))
        } catch (err) {
            console.error(err)
        }
    }

    async function addRepository({ username, repoName, description, tags }) {
        try {
            const { data } = await client.post('/api/repo', {
                userName: username,
                repoName,
                description,
                tags,
            })
        } catch (err) {
            console.error(err)
        }
    }

    async function deleteRepository({ repoId }) {
        try {
            const { data } = await client.delete('/api/repo', {
                data: { repoId },
            })
        } catch (err) {
            console.error(err)
        }
    }

    async function modifyRepository({ repoId, description, tags }) {
        try {
            const { data } = await client.put('/api/repo', {
                repoId,
                description,
                tags,
            })
        } catch (err) {
            console.error(err)
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
