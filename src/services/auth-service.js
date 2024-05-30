import client from '@/services/client.js'

export const authService = {
    callLogin: async ({ code }) => {
        const { status, data } = await client.get('/api/auth/login', {
            params: { code },
        })

        return { status, data }
    },
}
