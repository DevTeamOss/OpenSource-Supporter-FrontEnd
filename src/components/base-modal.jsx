import '@/assets/scss/components/base-modal.scss'

export default function BaseModal({ close, children }) {
    function closeModal(e) {
        if (e.target.id === 'modal-background') {
            close()
        }
    }

    return (
        <div
            className="base-modal-container"
            id="modal-background"
            onClick={(e) => closeModal(e)}
        >
            <div className="base-modal-plate">
                <div className="base-modal-body">{children}</div>
            </div>
        </div>
    )
}
