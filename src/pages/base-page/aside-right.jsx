import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBook,
    faCoins,
    faGlobe,
    faTrophy,
    faUser,
} from '@fortawesome/free-solid-svg-icons'

import { useUserController } from '@/controllers/index.js'
import { useModal } from '@/hooks/use-modal.js'
import AddRepositoryModal from '@/components/add-repository-modal/index.jsx'
import AddLinkModal from '@/components/add-link-modal'

export default function AsideRight() {
    const navigate = useNavigate()
    const userController = useUserController()
    const addRepositoryModal = useModal()
    const addLinkModal = useModal()

    function logout() {
        userController.logout()
        navigate('/')
    }

    return (
        <>
            <div className="aside-right-container">
                <div className="menu-box">
                    <div
                        className="menu-item"
                        onClick={() => navigate('/profile')}
                    >
                        <FontAwesomeIcon icon={faUser} />
                        <div className="menu-item-text">Your Profile</div>
                    </div>
                    <div
                        className="menu-item"
                        onClick={addRepositoryModal.open}
                    >
                        <FontAwesomeIcon icon={faBook} />
                        <div className="menu-item-text">Your Repositories</div>
                    </div>
                    <div className="menu-item" onClick={addLinkModal.open}>
                        <FontAwesomeIcon icon={faGlobe} />
                        <div className="menu-item-text">Your Links</div>
                    </div>
                    <div className="menu-item">
                        <FontAwesomeIcon icon={faCoins} />
                        <div className="menu-item-text">Your Points</div>
                    </div>
                    <div className="menu-item">
                        <FontAwesomeIcon icon={faTrophy} />
                        <div className="menu-item-text">Your Rank</div>
                    </div>
                    <div className="divide-line" />
                    <div className="menu-item">Opensource Licenses</div>
                    <div className="divide-line" />
                    <div className="menu-item red" onClick={logout}>
                        Logout
                    </div>
                </div>
                {addRepositoryModal.visible && (
                    <AddRepositoryModal close={addRepositoryModal.close} />
                )}
                {addLinkModal.visible && (
                    <AddLinkModal close={addLinkModal.close} />
                )}
            </div>
        </>
    )
}
