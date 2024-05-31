import { useEffect, useState } from 'react'

import { repoService } from '@/services/index.js'

export function useRepoList(type) {
    const [list, setList] = useState([])
    const [currentPage, setCurrentPage] = useState(0)

    let getList
    if (type === 'RECENTLY_COMMIT') {
        getList = async (page) =>
            repoService.callGetRecentlyCommitList({ page })
    } else if (type === 'MOST_VIEWED') {
        getList = async (page) => repoService.callGetMostViewedList({ page })
    } else if (type === 'MY_PARTNERS') {
        getList = async (page) => repoService.callGetMyPartnersList({ page })
    }

    async function nextPage() {
        const { data } = await getList(currentPage + 1)
        if (data.length === 0) {
            alert('마지막 페이지입니다')
            return false
        }

        setList(data)
        setCurrentPage((prev) => prev + 1)
        return true
    }

    async function prevPage() {
        if (currentPage === 0) {
            alert('첫번째 페이지입니다')
            return false
        }

        const { data } = await getList(currentPage - 1)
        setList(data)
        setCurrentPage((prev) => prev - 1)
        return true
    }

    async function initList() {
        const { data } = await getList(0)
        setList(data)
    }

    useEffect(() => {
        initList().then()
    }, [])

    return { data: list, nextPage, prevPage }
}
