import { useEffect, useState } from 'react'
import BaseModal from '../base-modal'
import Option01 from '@/components/add-link-modal/option-01'
import Option02 from '@/components/add-link-modal/option-02'

import '@/assets/scss/components/add-link-modal.scss'

export default function AddLinkModal({ close }) {
    const [option, setOption] = useState(0)

    function setOption01() {
        setOption(1)
    }

    function setOption02() {
        setOption(2)
    }

    useEffect(() => {
        setOption(1)
    }, [])

    return (
        <BaseModal close={close}>
            <div className="add-link-modal-container">
                <div className="add-link-modal-header">
                    <div className="btn-box">
                        <div
                            className={`option-btn ${option === 1 ? 'btn-active' : ''}`}
                            onClick={setOption01}
                        >
                            Github Redirection Link
                        </div>
                        <div
                            className={`option-btn ${option === 2 ? 'btn-active' : ''}`}
                            onClick={setOption02}
                        >
                            User Profile Card
                        </div>
                        <div
                            className="option-clip"
                            style={{
                                left: `${option === 1 ? '2px' : '167px'}`,
                            }}
                        />
                    </div>
                </div>
                <div className="add-link-modal-body">
                    {option === 1 && <Option01 />}
                    {option === 2 && <Option02 />}
                </div>
            </div>
        </BaseModal>
    )
}
