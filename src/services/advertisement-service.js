import client from '@/services/client.js'

export const advertisementService = {
    callGetAdvertisement: async () => {
        const { status, data } = await client.get('/api/advertisement/random')

        const { id, adContent, adLength } = data
        const dataToUse = { id, url: adContent, videoLength: adLength }

        return { status, data: dataToUse }
    },

    callComplete: async ({ username, adId }) => {
        const { status, data } = await client.post(
            '/api/advertisement/viewed',
            {
                userName: username,
                advertisementId: adId,
            },
        )

        return { status, data }
    },
}
