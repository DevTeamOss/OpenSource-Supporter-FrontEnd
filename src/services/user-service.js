import client from '@/services/client.js'

export const userService = {
    callGetInfo: async ({ username }) => {
        const { status, data } = await client.get('/api/user', {
            params: { userName: username },
        })

        const { userName, customName, avatarUrl, totalPoint, remainingPoint } =
            data

        const dataToUse = {
            username: userName,
            name: customName,
            avatarUrl,
            totalPoint,
            remainingPoint,
        }

        return { status, data: dataToUse }
    },

    callGetCardInfo: async ({ username }) => {
        const { status, data } = await client.get('/api/user/card', {
            params: { userName: username },
        })

        const { userName, totalDonated, donatedRepoList } = data

        const dataToUse = {
            username: userName,
            totalDonated,
            donatedRepoNames: donatedRepoList.join(', '),
        }

        return { status, data: dataToUse }
    },
}
