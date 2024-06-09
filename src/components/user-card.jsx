import { useNavigate } from 'react-router-dom'

import '@/assets/scss/components/user-card.scss'

export default function UserCard({ data }) {
    const navigate = useNavigate()

    return (
        <div className="user-card-container">
            <img
                className="profile-img"
                src={data.avatarUrl}
                alt={data.username}
            />
            <div className="profile-text">
                <div className="profile-name-text">{data.name}</div>
                <div className="text-slash">/</div>
                <div className="profile-username-text">{data.username}</div>
            </div>
            <div
                className="github-user-link"
                onClick={() => navigate(`/profile/${data.username}`)}
            >
                Visit
            </div>
        </div>
    )
}
