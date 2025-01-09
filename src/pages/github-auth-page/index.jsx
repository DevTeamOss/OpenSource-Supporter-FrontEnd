import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useUser } from '@/view-models/index.js'


export default function GithubAuthPage() {
    const userViewModel = useUser()
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()

    useEffect(() => {
        ;(async () => {
            const code = searchParams.get('code')
            await userViewModel.login({ code })
        })()
    }, [])

    useEffect(() => {
        if (userViewModel.data.username !== 'guest') {
            navigate('/main')
        }
    }, [userViewModel.data])

    return <div></div>
}
