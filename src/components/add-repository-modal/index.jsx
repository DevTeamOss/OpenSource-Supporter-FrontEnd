import { useEffect, useState } from 'react'

import { useGithubRepoListController } from '@/controllers/index.js'
import BaseModal from '@/components/base-modal.jsx'
import Stage01 from '@/components/add-repository-modal/stage-01'
import Stage02 from '@/components/add-repository-modal/stage-02'

import '@/assets/scss/components/add-repository-modal.scss'

export default function AddRepositoryModal({ close }) {
    const githubRepoListController = useGithubRepoListController()

    const [stage, setStage] = useState(0)

    function nextStage() {
        setStage((prev) => prev + 1)
    }

    function prevStage() {
        setStage((prev) => prev - 1)
    }

    useEffect(() => {
        setStage(1)
        githubRepoListController.getList().then()
    }, [])

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
                    {stage === 1 && <Stage01 nextStage={nextStage} />}
                    {stage === 2 && (
                        <Stage02 prevStage={prevStage} close={close} />
                    )}
                </div>
            </div>
        </BaseModal>
    )
}
