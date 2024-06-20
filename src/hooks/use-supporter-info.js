import { useEffect, useState } from 'react'

import { userService } from '@/services/user-service.js'
import { MAX_POINT } from '@/constants/level'

const initialState = {
    username: 'guest',
    totalDonated: 0,
    donatedRepoNames: '',
}

export function useSupporterInfo() {
    const [info, setInfo] = useState(initialState)
    const [level, setLevel] = useState('NORMAL')
    const [progress, setProgress] = useState(0)

    async function getData(username) {
        const { data } = await userService.callGetCardInfo({ username })
        if (data) {
            setInfo(data)
        }
    }

    useEffect(() => {
        if (info.totalDonated <= MAX_POINT.NORMAL) {
            setLevel('NORMAL')
        } else if (
            info.totalDonated > MAX_POINT.NORMAL &&
            info.totalDonated <= MAX_POINT.BRONZE
        ) {
            setLevel('BRONZE')
        } else if (
            info.totalDonated > MAX_POINT.BRONZE &&
            info.totalDonated <= MAX_POINT.SILVER
        ) {
            setLevel('SILVER')
        } else if (info.totalDonated > MAX_POINT.SILVER) {
            setLevel('GOLD')
        }
    }, [info.totalDonated])

    useEffect(() => {
        if (level === 'NORMAL') {
            setProgress((info.totalDonated / MAX_POINT.NORMAL) * 240)
        } else if (level === 'BRONZE') {
            setProgress(
                ((info.totalDonated - MAX_POINT.NORMAL) / MAX_POINT.BRONZE) *
                    240,
            )
        } else if (level === 'SILVER') {
            setProgress(
                ((info.totalDonated - MAX_POINT.BRONZE) / MAX_POINT.SILVER) *
                    240,
            )
        } else if (level === 'GOLD') {
            setProgress(
                ((info.totalDonated - MAX_POINT.SILVER) / MAX_POINT.GOLD) * 240,
            )
        }
    }, [level])

    return { data: { ...info, level, progress }, getData }
}
