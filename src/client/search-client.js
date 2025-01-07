import client from '@/client/client.js'

export const searchClient = {
    callSearch: async ({ keyword }) => {
        const { status, data } = await client.get('/api/search', {
            params: { keyword },
        })

        const { users, repositories } = data

        const usersToUse = users.map((info) => {
            const { userName, customName, avatarUrl } = info
            return { username: userName, name: customName, avatarUrl }
        })

        const repositoriesToUse = repositories.map((info) => {
            const {
                id,
                userName,
                avatarUrl,
                repoName,
                description,
                tags,
                mostLanguage,
                license,
                lastCommitAt,
            } = info
            return {
                id,
                username: userName,
                avatarUrl,
                repoName,
                description,
                tags,
                mostLanguage,
                license,
                lastCommitAt,
            }
        })

        return {
            status,
            data: { users: usersToUse, repositories: repositoriesToUse },
        }
    },
}
