import { useNavigate } from 'react-router-dom'

import { useUserController } from '@/controllers/index.js'

import LogoImg from '@/assets/img/logo.svg'
import '@/assets/scss/components/header.scss'

export default function Header() {
    const userController = useUserController()
    const navigate = useNavigate()

    return (
        <div className="header-container">
            <div className="left-section">
                <div className="logo-btn" onClick={() => navigate('/main')}>
                    <img
                        className="logo-img"
                        src={LogoImg}
                        alt="OpenSource Supporter"
                    />
                    <div className="logo-text">OpenSource Supporter</div>
                </div>
            </div>
            <div className="right-section">
                {userController.data.avatar_url ? (
                    <img
                        src={userController.data.avatar_url}
                        alt={userController.data.login}
                        className="profile-btn"
                        onClick={() => navigate('/profile')}
                    />
                ) : (
                    <div
                        className="profile-btn"
                        onClick={() => navigate('/profile')}
                    />
                )}
            </div>
        </div>
    )
}
