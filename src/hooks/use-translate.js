import { useEffect, useState } from 'react'

import { translateService } from '@/services/translate-service.js'

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
        const { data } = await translateService.callTranslate({
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
