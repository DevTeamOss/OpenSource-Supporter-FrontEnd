import client from '@/services/client.js'

export const authService = {
    callLogin: async ({ code }) => {
        const { status, data } = await client.get('/api/auth/login', {
            params: { code },
        })

        const {
            userName,
            customName,
            email,
            avatarUrl,
            accessToken,
            remainingPoint,
            totalPoint,
            adLink,
            cardLink,
        } = data

        const dataToUse = {
            username: userName,
            name: customName,
            email,
            avatarUrl,
            accessToken,
            remainingPoint,
            totalPoint,
            adLink,
            cardLink,
        }

        return { status, data: dataToUse }
    },

    callLogout: async () => {
        const { status, data } = await client.delete('/api/auth/logout')

        return { status, data }
    },

    callWithdraw: async () => {
        const { status, data } = await client.delete('/api/auth/withdrawal')

        return { status, data }
    },
}
