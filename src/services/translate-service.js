import client from '@/services/client.js'

export const translateService = {
    callTranslate: async ({ language, text }) => {
        const { status, data } = await client.post('/api/translate', {
            language,
            text,
        })

        return { status, data }
    },
}
