import { useEffect } from 'react'

import {
    useRepoDetailController,
    useUserController,
} from '@/controllers/index.js'
import { useModal } from '@/hooks/use-modal.js'
import PageRoutes from '@/page-routes'
import RepositoryDetailModal from '@/components/repository-detail-modal'

import '@/assets/scss/basic.scss'

export default function App() {
    const userController = useUserController()
    const repoDetailController = useRepoDetailController()
    const repositoryDetailModal = useModal()

    async function refresh() {
        if (!userController.data.accessToken) {
            return
        }
        await userController.refresh()
    }

    function closeRepoDetailModal() {
        repoDetailController.reset()
        repositoryDetailModal.close()
    }

    useEffect(() => {
        refresh().then()
    }, [])

    useEffect(() => {
        if (!repoDetailController.id) {
            return
        }
        repositoryDetailModal.open()
    }, [repoDetailController.id])

    return (
        <>
            <PageRoutes />
            {repositoryDetailModal.visible && (
                <RepositoryDetailModal close={closeRepoDetailModal} />
            )}
        </>
    )
}
