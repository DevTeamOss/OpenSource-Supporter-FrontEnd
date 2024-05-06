import { useNavigate } from 'react-router-dom'

import { useUserController } from '@/controllers/index.js'

import '@/assets/scss/components/profile-box.scss'

export default function ProfileBox() {
    const userController = useUserController()
    const navigate = useNavigate()

    return (
        <div className="profile-box-container">
            <img
                className="profile-img"
                src={userController.data.avatar_url}
                alt={userController.data.login}
                onClick={() => navigate('/profile')}
            />
            <div className="profile-info-box">
                <div className="profile-info-section">
                    <div className="name-text">{userController.data.name}</div>
                    <div className="username-text">
                        {userController.data.login}
                    </div>
                </div>
                <div className="profile-info-section">
                    <div className="point-text">0 / 0 P</div>
                </div>
            </div>
        </div>
    )
}
