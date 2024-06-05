import client from '@/services/client.js'

export const reposService = {
    callGetList: async () => {
        const { status, data } = await client.get('/api/repos/modal')

        return { status, data }
    },

    callGetSupportedList: async ({ username }) => {
        const { status, data } = await client.get('/api/repos/supported', {
            params: {
                userName: username,
            },
        })

        return { status, data }
    },

    callGetSupportingList: async ({ username }) => {
        const { status, data } = await client.get('/api/repos/supporting', {
            params: {
                userName: username,
            },
        })

        return { status, data }
    },
}
