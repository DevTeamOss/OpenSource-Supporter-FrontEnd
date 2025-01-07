import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { reposClient } from '@/client/index.js'

export function useProfileRepoList(type) {
    const { username } = useParams()

    const [list, setList] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    let getList
    if (type === 'SUPPORTED') {
        getList = async () =>
            reposClient.callGetSupportedList({
                username,
            })
    } else if (type === 'SUPPORTING') {
        getList = async () =>
            reposClient.callGetSupportingList({
                username,
            })
    }

    async function getRepoList() {
        setList([])

        setIsLoading(true)
        const { data } = await getList()
        setIsLoading(false)

        setList([...data])
    }

    useEffect(() => {
        getRepoList().then()
    }, [username])

    return { data: list, isLoading }
}
