import { useState } from 'react'

import { advertisementClient } from '@/client/index.js'

export function useAdvertisement() {
    const [info, setInfo] = useState(null)

    async function getData() {
        const { data } = await advertisementClient.callGetAdvertisement()
        setInfo({ ...data })
    }

    async function complete(username) {
        await advertisementClient.callComplete({ username, adId: info.id })
    }

    return { data: info, getData, complete }
}
