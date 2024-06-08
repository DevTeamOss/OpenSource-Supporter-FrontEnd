import { useState, useEffect } from 'react'

import { rankService } from '@/services/index.js'

export function useRankList() {
    const [list, setList] = useState([])
    const [page, setPage] = useState(0)
    const [hasNextPage, setHasNextPage] = useState(true)
    const [isLoading, setIsLoading] = useState(false)

    async function getAdditionalData() {
        setIsLoading(true)
        const { data } = await rankService.callGetRankList({ page })
        setIsLoading(false)

        setList((prev) => [...prev, ...data.list])
        setHasNextPage(data.hasNextPage)
        setPage((prev) => prev + 1)
    }

    async function initList() {
        setIsLoading(true)
        const { data } = await rankService.callGetRankList({ page })
        setIsLoading(false)

        setList([...data.list])
        setHasNextPage(data.hasNextPage)
        setPage(1)
    }

    useEffect(() => {
        initList().then()
    }, [])

    return { data: list, hasNextPage, isLoading, getAdditionalData }
}
