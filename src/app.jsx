import { useEffect } from 'react'

import {
    useRepoDetail,
    useUser,
} from '@/view-models/index.js'
import { useModal } from '@/hooks/use-modal.js'
import PageRoutes from '@/page-routes'
import RepositoryDetailModal from '@/components/repository-detail-modal'

import '@/assets/scss/basic.scss'

export default function App() {
    const userViewModel = useUser()
    const repoDetailViewModel = useRepoDetail()
    const repositoryDetailModal = useModal()

    async function refresh() {
        if (!userViewModel.data.accessToken) {
            return
        }
        await userViewModel.refresh()
    }

    function closeRepoDetailModal() {
        repoDetailViewModel.reset()
        repositoryDetailModal.close()
    }

    useEffect(() => {
        refresh().then()
    }, [])

    useEffect(() => {
        if (!repoDetailViewModel.id) {
            return
        }
        repositoryDetailModal.open()
    }, [repoDetailViewModel.id])

    return (
        <>
            <PageRoutes />
            {repositoryDetailModal.visible && (
                <RepositoryDetailModal close={closeRepoDetailModal} />
            )}
        </>
    )
}
