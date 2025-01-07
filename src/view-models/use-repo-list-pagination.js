import { useEffect, useState } from 'react'

import { repoClient } from '@/client/index.js'

export function useRepoListPagination(type) {
    const [list, setList] = useState([])
    const [hasNextPage, setHasNextPage] = useState(false)
    const [currentPage, setCurrentPage] = useState(0)
    const [isLoading, setIsLoading] = useState(false)

    let getList
    if (type === 'RECENTLY_COMMIT') {
        getList = async (page) =>
            repoClient.callGetRecentlyCommitList({ page })
    } else if (type === 'MOST_VIEWED') {
        getList = async (page) => repoClient.callGetMostViewedList({ page })
    } else if (type === 'MY_PARTNERS') {
        getList = async (page) => repoClient.callGetMyPartnersList({ page })
    }

    async function nextPage() {
        await loadData(currentPage + 1)
        setCurrentPage((prev) => prev + 1)
        return true
    }

    async function prevPage() {
        await loadData(currentPage - 1)
        setCurrentPage((prev) => prev - 1)
        return true
    }

    async function loadData(page) {
        setIsLoading(true)
        const { data } = await getList(page)
        setIsLoading(false)

        setList([...data.data])
        setHasNextPage(data.hasNextPage)
    }

    useEffect(() => {
        loadData(0).then()
    }, [])

    return {
        data: list,
        hasPrevPage: currentPage !== 0,
        hasNextPage,
        isLoading,

        nextPage,
        prevPage,
    }
}
