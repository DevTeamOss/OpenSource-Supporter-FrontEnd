import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { reposService } from '@/services/index.js'
import { useProfileController } from '@/controllers/index.js'

export function useProfileRepoList(type) {
    const { username } = useParams()

    const [list, setList] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    let getList
    if (type === 'SUPPORTED') {
        getList = async () =>
            reposService.callGetSupportedList({
                username,
            })
    } else if (type === 'SUPPORTING') {
        getList = async () =>
            reposService.callGetSupportingList({
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
    }, [])

    return { data: list, isLoading }
}
