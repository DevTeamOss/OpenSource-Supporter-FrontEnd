import client from '@/services/client.js'

export const reposService = {
    callGetList: async () => {
        const { status, data } = await client.get('/api/repos/modal')

        return { status, data }
    },
}
