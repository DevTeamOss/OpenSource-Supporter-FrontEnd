import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

import { useUserController } from '@/controllers'

export default function GithubAuthPage() {
    const userController = useUserController()
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()

    useEffect(() => {
        ;(async () => {
            const code = searchParams.get('code')
            await userController.login({ code })
        })()
    }, [])

    useEffect(() => {
        if (userController.data.username !== 'guest') {
            navigate('/main')
        }
    }, [userController.data])

    return <div></div>
}
