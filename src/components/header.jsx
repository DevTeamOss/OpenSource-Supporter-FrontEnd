import { useNavigate } from 'react-router-dom'

import { useUser } from '@/view-models/index.js'

import LogoImg from '@/assets/img/logo.svg'
import '@/assets/scss/components/header.scss'

export default function Header() {
    const userViewModel = useUser()
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
                {userViewModel.data.avatarUrl && (
                    <img
                        src={userViewModel.data.avatarUrl}
                        alt={userViewModel.data.username}
                        className="profile-btn"
                        onClick={() =>
                            navigate(`/profile/${userViewModel.data.username}`)
                        }
                    />
                )}
            </div>
        </div>
    )
}
