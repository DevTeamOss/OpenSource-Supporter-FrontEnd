import client from '@/client/client.js'

export const advertisementClient = {
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

        const dataToUse = { ...data, username: data.userName }
        delete dataToUse.userName

        return { status, data: dataToUse }
    },
}
