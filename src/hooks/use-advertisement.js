import { useState } from 'react'

import { advertisementService } from '@/services/index.js'

export function useAdvertisement() {
    const [info, setInfo] = useState(null)

    async function getData() {
        const { data } = await advertisementService.callGetAdvertisement()
        setInfo({ ...data })
    }

    async function complete(username) {
        await advertisementService.callComplete({ username, adId: info.id })
    }

    return { data: info, getData, complete }
}
