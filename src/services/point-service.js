import client from '@/services/client.js'

export const pointService = {
    callGetSummary: async () => {
        const { status, data } = await client.get('/api/point/summary')

        return { status, data }
    },

    callCharge: async ({ price }) => {
        const { status, data } = await client.post('/api/point/charge', {
            price,
        })

        return { status, data }
    },

    callGetSpentList: async ({ page }) => {
        const { status, data } = await client.get('/api/point/spent', {
            params: { page, size: 5 },
        })

        return { status, data }
    },

    callGetEarnedList: async ({ page }) => {
        const { status, data } = await client.get('/api/point/earned', {
            params: {
                page,
                size: 5,
            },
        })

        return { status, data }
    },

    callSupport: async ({ repoId, price }) => {
        const { status, data } = await client.post('/api/repo/point', {
            repoId,
            price,
        })

        return { status, data }
    },
}
