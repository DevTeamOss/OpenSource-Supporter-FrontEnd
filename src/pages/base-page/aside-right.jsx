import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBook,
    faCoins,
    faGlobe,
    faTrophy,
    faUser,
} from '@fortawesome/free-solid-svg-icons'

import { useUser } from '@/view-models/index.js'
import { useModal } from '@/hooks/use-modal.js'
import AddRepositoryModal from '@/components/add-repository-modal/index.jsx'
import LinkModal from '@/components/link-modal'
import OpenSourceLicensesModal from '@/components/opensource-licenses-modal.jsx'

export default function AsideRight() {
    const navigate = useNavigate()
    const userController = useUser()
    const addRepositoryModal = useModal()
    const linkModal = useModal()
    const opensourceLicenseModal = useModal()

    async function logout() {
        if (userController.isLoggedIn) {
            await userController.logout()
        }
        navigate('/')
    }

    function loginRequiredNavigate(url) {
        if (!userController.isLoggedIn) {
            alert("You haven't logged in")
            return
        }

        navigate(url)
    }

    function loginRequiredModalOpen(open) {
        if (!userController.isLoggedIn) {
            alert("You haven't logged in")
            return
        }

        open()
    }

    return (
        <>
            <div className="aside-right-container">
                <div className="menu-box">
                    <div
                        className="menu-item"
                        onClick={() =>
                            loginRequiredNavigate(
                                `/profile/${userController.data.username}`,
                            )
                        }
                    >
                        <FontAwesomeIcon icon={faUser} />
                        <div className="menu-item-text">Your Profile</div>
                    </div>
                    <div
                        className="menu-item"
                        onClick={() =>
                            loginRequiredModalOpen(addRepositoryModal.open)
                        }
                    >
                        <FontAwesomeIcon icon={faBook} />
                        <div className="menu-item-text">Your Repositories</div>
                    </div>
                    <div
                        className="menu-item"
                        onClick={() => loginRequiredModalOpen(linkModal.open)}
                    >
                        <FontAwesomeIcon icon={faGlobe} />
                        <div className="menu-item-text">Your Links</div>
                    </div>
                    <div
                        className="menu-item"
                        onClick={() => loginRequiredNavigate('/point')}
                    >
                        <FontAwesomeIcon icon={faCoins} />
                        <div className="menu-item-text">Your Points</div>
                    </div>
                    <div
                        className="menu-item"
                        onClick={() => loginRequiredNavigate('/ranking')}
                    >
                        <FontAwesomeIcon icon={faTrophy} />
                        <div className="menu-item-text">Your Rank</div>
                    </div>
                    <div className="divide-line" />
                    <div
                        className="menu-item"
                        onClick={opensourceLicenseModal.open}
                    >
                        Opensource Licenses
                    </div>
                    <div className="divide-line" />
                    <div className="menu-item red" onClick={logout}>
                        Logout
                    </div>
                </div>
                {addRepositoryModal.visible && (
                    <AddRepositoryModal close={addRepositoryModal.close} />
                )}
                {linkModal.visible && <LinkModal close={linkModal.close} />}
                {opensourceLicenseModal.visible && (
                    <OpenSourceLicensesModal
                        close={opensourceLicenseModal.close}
                    />
                )}
            </div>
        </>
    )
}
