import client from '@/client/client.js'

export const translateClient = {
    callTranslate: async ({ language, text }) => {
        const { status, data } = await client.post('/api/translate', {
            language,
            text,
        })

        return { status, data }
    },
}
