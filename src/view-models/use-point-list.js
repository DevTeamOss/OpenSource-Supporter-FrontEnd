import { useEffect, useState } from 'react'

import { pointClient } from '@/client/index.js'

export function usePointList(type) {
    const [list, setList] = useState([])
    const [hasNextPage, setHasNextPage] = useState(false)
    const [page, setPage] = useState(0)
    const [isLoading, setIsLoading] = useState(false)

    let getList
    if (type === 'SPENT') {
        getList = async (page) => pointClient.callGetSpentList({ page })
    } else if (type === 'EARNED') {
        getList = async (page) => pointClient.callGetEarnedList({ page })
    }

    async function getAdditionalData() {
        setIsLoading(true)
        const { data } = await getList(page)
        setIsLoading(false)

        setList((prev) => [...prev, ...data.data])
        setHasNextPage(data.hasNextPage)
        setPage((prev) => prev + 1)
    }

    async function initList() {
        setIsLoading(true)
        const { data } = await getList(0)
        setIsLoading(false)

        setList([...data.data])
        setHasNextPage(data.hasNextPage)
        setPage(1)
    }

    useEffect(() => {
        initList().then()
    }, [])

    return { data: list, hasNextPage, isLoading, getAdditionalData, initList }
}
