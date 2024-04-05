import { useNavigate } from 'react-router-dom'

import '@/assets/scss/components/profile-box.scss'

export default function ProfileBox() {
    const navigate = useNavigate()

    return (
        <div className="profile-box-container">
            <div className="profile-img" onClick={() => navigate('/profile')} />
            <div className="profile-info-box">
                <div className="profile-info-section">
                    <div className="name-text">테스트유저</div>
                    <div className="username-text">github-test-user</div>
                </div>
                <div className="profile-info-section">
                    <div className="point-text">159 / 308 P</div>
                </div>
            </div>
        </div>
    )
}
