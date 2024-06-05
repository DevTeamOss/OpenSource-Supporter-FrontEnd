import { useEffect, useState } from 'react'

import { reposService } from '@/services/index.js'
import { useProfileController } from '@/controllers/index.js'

export function useProfileRepoList(type) {
    const profileController = useProfileController()

    const [list, setList] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    let getList
    if (type === 'SUPPORTED') {
        getList = async () =>
            reposService.callGetSupportedList({
                username: profileController.data.username,
            })
    } else if (type === 'SUPPORTING') {
        getList = async () =>
            reposService.callGetSupportingList({
                username: profileController.data.username,
            })
    }

    async function getRepoList() {
        setIsLoading(true)
        const { data } = await getList()
        setIsLoading(false)

        setList([...data])
    }

    useEffect(() => {
        if (!profileController.data.username) {
            return
        }

        getRepoList().then()
    }, [profileController.data])

    return { data: list, isLoading }
}
