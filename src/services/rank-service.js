import client from '@/services/client.js'
import { MAX_POINT } from '@/constants/level.js'

export const rankService = {
    callGetMyRank: async () => {
        const { status, data } = await client.get('/api/rank/myRank')

        const { rank, userName, customName, avatarUrl, usedPoint, topPercent } =
            data

        const dataToUse = {
            username: userName,
            name: customName,
            rank,
            avatarUrl,
            usedPoint,
            topPercent: topPercent.toFixed(2),
        }

        return { status, data: dataToUse }
    },

    callGetRankList: async ({ page }) => {
        const { status, data } = await client.get('/api/rank/userRank', {
            params: { page, size: 5 },
        })

        const { hasNextPage, data: list } = data

        const listToUse = list.map((info) => {
            const { rank, userName, customName, avatarUrl, usedPoint } = info
            let tier
            if (usedPoint <= MAX_POINT.NORMAL) {
                tier = 'NORMAL'
            } else if (usedPoint <= MAX_POINT.BRONZE) {
                tier = 'BRONZE'
            } else if (usedPoint <= MAX_POINT.SILVER) {
                tier = 'SILVER'
            } else {
                tier = 'GOLD'
            }

            return {
                username: userName,
                name: customName,
                avatarUrl,
                rank,
                usedPoint,
                tier,
            }
        })

        return { status, data: { hasNextPage, list: listToUse } }
    },
}
