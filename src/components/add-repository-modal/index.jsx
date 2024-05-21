import { useEffect, useState } from 'react'

import { useGithubRepoListController } from '@/controllers/index.js'
import BaseModal from '@/components/base-modal.jsx'
import Stage01 from '@/components/add-repository-modal/stage-01'
import Stage02 from '@/components/add-repository-modal/stage-02'
import LoadingScreen from '@/components/loading-screen'

import '@/assets/scss/components/add-repository-modal.scss'

export default function AddRepositoryModal({ close }) {
    const githubRepoListController = useGithubRepoListController()

    const [stage, setStage] = useState(0)
    const [repoName, setRepoName] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    function nextStage() {
        setStage((prev) => prev + 1)
    }

    function prevStage() {
        setStage((prev) => prev - 1)
    }

    function cancelSelection() {
        setRepoName('')

        prevStage()
    }

    async function loadData() {
        setIsLoading(true)
        await githubRepoListController.getList()
        setIsLoading(false)
    }

    useEffect(() => {
        setStage(1)
        loadData().then()
    }, [])

    useEffect(() => {
        if (repoName !== '') {
            nextStage()
        }
    }, [repoName])

    return (
        <BaseModal close={close}>
            <div className="add-repository-modal-container">
                <div className="add-repository-modal-header">
                    <div className="progress-group">
                        <div className="progress-bar">
                            <div
                                className="progress-value"
                                style={{
                                    width: `${stage >= 1 ? '100%' : 0}`,
                                }}
                            />
                        </div>
                        <div className="progress-text">
                            1. Select Repository
                        </div>
                    </div>
                    <div className="progress-group">
                        <div className="progress-bar">
                            <div
                                className="progress-value"
                                style={{
                                    width: `${stage >= 2 ? '100%' : 0}`,
                                }}
                            />
                        </div>
                        <div className="progress-text">
                            2. Configure and Submit
                        </div>
                    </div>
                </div>
                <div className="add-repository-modal-body">
                    {stage === 1 && <Stage01 select={setRepoName} />}
                    {stage === 2 && (
                        <Stage02
                            close={close}
                            repoName={repoName}
                            cancel={cancelSelection}
                        />
                    )}
                </div>
            </div>
            {isLoading && <LoadingScreen />}
        </BaseModal>
    )
}
