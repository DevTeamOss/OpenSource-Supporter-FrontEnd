import { useState } from 'react'

import { searchClient } from '@/client/search-client.js'

export function useSearch() {
    const [userData, setUserData] = useState([])
    const [repoData, setRepoData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    async function getResult(keyword) {
        setIsLoading(true)
        const { data } = await searchClient.callSearch({ keyword })
        setIsLoading(false)

        const { users, repositories } = data
        setUserData(users)
        setRepoData(repositories)
    }

    return { userData, repoData, isLoading, getResult }
}
