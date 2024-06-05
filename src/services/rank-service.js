import client from '@/services/client.js'

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
}
