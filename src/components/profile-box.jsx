import { useNavigate } from 'react-router-dom'

import { useUser } from '@/view-models/index.js'

import '@/assets/scss/components/profile-box.scss'

export default function ProfileBox({ data }) {
    const navigate = useNavigate()
    const userController = useUser()

    function loginRequiredNavigate(url) {
        if (!userController.isLoggedIn) {
            alert("You haven't logged in")
            return
        }

        navigate(url)
    }

    return (
        <div className="profile-box-container">
            <img
                className="profile-img"
                src={data.avatarUrl}
                alt={data.username}
                onClick={() =>
                    loginRequiredNavigate(
                        `/profile/${userController.data.username}`,
                    )
                }
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
