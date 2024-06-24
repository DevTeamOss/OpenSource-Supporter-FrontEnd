import BaseModal from '@/components/base-modal.jsx'

import '@/assets/scss/components/opensource-licenses-modal.scss'
import { OPENSOURCE_LICENSES } from '@/constants/opensource-licenses.js'

export default function OpenSourceLicensesModal({ close }) {
    function licensesMarkup() {
        return {
            __html: OPENSOURCE_LICENSES,
        }
    }

    return (
        <BaseModal close={close}>
            <div className="opensource-licenses-modal-container">
                <div className="opensource-licenses-modal-header">
                    <div className="title-text">Opensource License Notice</div>
                </div>
                <div className="opensource-licenses-modal-body">
                    <div className="opensource-licenses-box">
                        <div dangerouslySetInnerHTML={licensesMarkup()}></div>
                    </div>
                </div>
            </div>
        </BaseModal>
    )
}
