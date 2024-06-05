import { useEffect, useState } from 'react'

import { rankService } from '@/services/rank-service.js'
import { MAX_POINT } from '@/constants/level.js'

const RANK_TEXT = {
    NORMAL: 'Normal',
    BRONZE: 'Bronze',
    SILVER: 'Silver',
    GOLD: 'Gold',
}

export function useRankInfo() {
    const [info, setInfo] = useState({ usedPoint: 0 })
    const [level, setLevel] = useState('NORMAL')
    const [progress, setProgress] = useState(0)
    const [toNextTier, setToNextTier] = useState(0)

    async function getData() {
        const { data } = await rankService.callGetMyRank()
        setInfo(data)
    }

    useEffect(() => {
        getData().then()
    }, [])

    useEffect(() => {
        if (info.usedPoint <= MAX_POINT.NORMAL) {
            setLevel('NORMAL')
        } else if (
            info.usedPoint > MAX_POINT.NORMAL &&
            info.usedPoint <= MAX_POINT.BRONZE
        ) {
            setLevel('BRONZE')
        } else if (
            info.usedPoint > MAX_POINT.BRONZE &&
            info.usedPoint <= MAX_POINT.SILVER
        ) {
            setLevel('SILVER')
        } else if (info.usedPoint > MAX_POINT.SILVER) {
            setLevel('GOLD')
        }
    }, [info.usedPoint])

    useEffect(() => {
        if (level === 'NORMAL') {
            setProgress((info.usedPoint / MAX_POINT.NORMAL) * 100)
            setToNextTier(MAX_POINT.NORMAL - info.usedPoint)
        } else if (level === 'BRONZE') {
            setProgress(
                ((info.usedPoint - MAX_POINT.NORMAL) / MAX_POINT.BRONZE) * 100,
            )
            setToNextTier(MAX_POINT.BRONZE - info.usedPoint)
        } else if (level === 'SILVER') {
            setProgress(
                ((info.usedPoint - MAX_POINT.BRONZE) / MAX_POINT.SILVER) * 100,
            )
            setToNextTier(MAX_POINT.SILVER - info.usedPoint)
        } else if (level === 'GOLD') {
            setProgress(
                ((info.usedPoint - MAX_POINT.SILVER) / MAX_POINT.GOLD) * 100,
            )
            setToNextTier(MAX_POINT.GOLD - info.usedPoint)
        }
    }, [level])

    return {
        data: {
            ...info,
            level,
            progress,
            toNextTier,
            tierText: RANK_TEXT[level],
        },
    }
}
