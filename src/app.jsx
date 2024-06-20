import { useEffect } from 'react'

import { useUserController } from '@/controllers/index.js'
import PageRoutes from '@/page-routes'

import '@/assets/scss/basic.scss'

export default function App() {
    const userController = useUserController()

    async function refresh() {
        if (!userController.data.accessToken) {
            return
        }
        await userController.refresh()
    }

    useEffect(() => {
        refresh().then()
    }, [])

    return <PageRoutes />
}
