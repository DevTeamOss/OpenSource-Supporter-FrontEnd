import { useEffect, useState } from 'react'

import { translateClient } from '@/client/translate-client.js'

export function useTranslate() {
    const [origin, setOrigin] = useState('')
    const [text, setText] = useState('')
    const [currentLanguage, setCurrentLanguage] = useState('default')
    const [isLoading, setIsLoading] = useState(false)

    async function changeLanguage(language) {
        if (isLoading) {
            return
        }
        if (language === currentLanguage) {
            return
        }

        setIsLoading(true)
        const { data } = await translateClient.callTranslate({
            language,
            text: origin,
        })
        setIsLoading(false)
        setText(data)
        setCurrentLanguage(language)
    }

    useEffect(() => {
        setText(origin)
    }, [origin])

    return { data: text, isLoading, setOrigin, changeLanguage }
}
