import { useState } from 'react'

import { searchService } from '@/services/search-service.js'

export function useSearch() {
    const [userData, setUserData] = useState([])
    const [repoData, setRepoData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    async function getResult(keyword) {
        setIsLoading(true)
        const { data } = await searchService.callSearch({ keyword })
        setIsLoading(false)

        const { users, repositories } = data
        setUserData(users)
        setRepoData(repositories)
    }

    return { userData, repoData, isLoading, getResult }
}
