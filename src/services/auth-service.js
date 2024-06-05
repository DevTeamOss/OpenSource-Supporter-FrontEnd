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
}
