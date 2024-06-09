import client from '@/services/client.js'

export const searchService = {
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
