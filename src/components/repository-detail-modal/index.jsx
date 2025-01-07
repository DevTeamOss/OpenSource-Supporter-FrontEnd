import { useEffect, useState } from 'react'

import { useRepoDetail } from '@/view-models/index.js'
import BaseModal from '@/components/base-modal.jsx'
import Detail01 from '@/components/repository-detail-modal/detail-01.jsx'
import Detail02 from '@/components/repository-detail-modal/detail-02.jsx'
import SmallLoadingScreen from '@/components/small-loading-screen.jsx'

import '@/assets/scss/components/repository-detail-modal.scss'

export default function RepositoryDetailModal({ close }) {
    const repoDetailController = useRepoDetail()
    const [detail, setDetail] = useState(0)
    const [isLoading, setIsLoading] = useState(false)

    function nextDetail() {
        setDetail((prev) => prev + 1)
    }

    async function init() {
        setIsLoading(true)
        await repoDetailController.getData()
        setIsLoading(false)
    }

    useEffect(() => {
        init().then()
        setDetail(1)
    }, [])

    return (
        <BaseModal close={close}>
            <div className="repository-detail-modal-container">
                <div className="repository-detail-modal-header">
                    <div className="progress-group">
                        <div className="progress-bar">
                            <div
                                className="progress-value"
                                style={{
                                    width: `${detail >= 1 ? '100%' : 0}`,
                                }}
                            ></div>
                        </div>
                        <div className="progress-text">
                            1. Explore repository
                        </div>
                    </div>
                    <div className="progress-group">
                        <div className="progress-bar">
                            <div
                                className="progress-value"
                                style={{
                                    width: `${detail >= 2 ? '100%' : 0}`,
                                }}
                            ></div>
                        </div>
                        <div className="progress-text">
                            2. Point Sponsorship
                        </div>
                    </div>
                </div>
                <div className="repository-detail-modal-body">
                    {detail === 1 && (
                        <Detail01
                            info={repoDetailController.data}
                            close={close}
                            next={nextDetail}
                        />
                    )}
                    {detail === 2 && <Detail02 close={close} />}
                </div>
                {isLoading && <SmallLoadingScreen />}
            </div>
        </BaseModal>
    )
}
