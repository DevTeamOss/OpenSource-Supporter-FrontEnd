import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'

import BaseModal from '@/components/base-modal'

import Spinner from '@/assets/img/spinner.svg'
import '@/assets/scss/components/confirm-modal.scss'

export default function ConfirmModal({ children, close, next }) {
    const [isLoading, setIsLoading] = useState(false)

    async function confirm() {
        setIsLoading(true)
        await next()
        setIsLoading(false)
        close()
    }

    return (
        <BaseModal close={close}>
            <div className="confirm-modal-container">
                <div className="confirm-modal-body">
                    <div className="confirm-modal-icon">
                        <FontAwesomeIcon icon={faCircleCheck} />
                    </div>
                    <div className="confirm-modal-text">{children}</div>
                </div>
                <div className="confirm-modal-footer">
                    <div className="confirm-btn" onClick={confirm}>
                        {isLoading ? (
                            <img
                                className="btn-spinner"
                                src={Spinner}
                                alt="loading"
                            />
                        ) : (
                            'Confirm'
                        )}
                    </div>
                    <div className="cancel-btn" onClick={close}>
                        Cancel
                    </div>
                </div>
            </div>
        </BaseModal>
    )
}
