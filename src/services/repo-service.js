import client from '@/services/client.js'

export const repoService = {
    callGetInfo: async ({ id }) => {
        const { status, data } = await client.get('/api/repo', {
            params: { id },
        })

        return { status, data }
    },

    callGetInfoWithViewCount: async ({ id }) => {
        const { status, data } = await client.put('/api/repo/view-count', {
            id,
        })

        return { status, data }
    },

    callAddRepository: async ({ username, repoName, description, tags }) => {
        const { status, data } = await client.post('/api/repo', {
            userName: username,
            repoName,
            description,
            tags,
        })

        return { status, data }
    },

    callDeleteRepository: async ({ repoId }) => {
        const { status, data } = await client.delete('/api/repo', {
            data: { repoId },
        })

        return { status, data }
    },

    callModifyRepository: async ({ repoId, description, tags }) => {
        const { status, data } = await client.put('/api/repo', {
            repoId,
            description,
            tags,
        })

        return { status, data }
    },
}
