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
}
