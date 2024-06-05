import { useNavigate } from 'react-router-dom'

import { useUserController } from '@/controllers/index.js'

import '@/assets/scss/components/profile-box.scss'

export default function ProfileBox({ data }) {
    const navigate = useNavigate()

    return (
        <div className="profile-box-container">
            <img
                className="profile-img"
                src={data.avatarUrl}
                alt={data.username}
                onClick={() => navigate('/profile')}
            />
            <div className="profile-info-box">
                <div className="profile-info-section">
                    <div className="name-text">{data.name}</div>
                    <div className="username-text">{data.username}</div>
                </div>
                <div className="profile-info-section">
                    <div className="point-text">
                        {data.remainingPoint} / {data.totalPoint} P
                    </div>
                </div>
            </div>
        </div>
    )
}
