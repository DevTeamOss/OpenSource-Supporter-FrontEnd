import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useUser } from '@/view-models/index.js'


export default function GithubAuthPage() {
    const userController = useUser()
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
