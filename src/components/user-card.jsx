import '@/assets/scss/components/user-card.scss';

export default function UserCard() {
    return (
        <div className="user-card-container">
            <div className="profile-img" />
            <div className="profile-text">
                <div className="profile-name-text">github-test-user</div>
                <div className="text-slash">/</div>
                <div className="profile-username-text">github-test-username</div>
            </div>
            <div className="github-user-link">Visit</div>
        </div>
    )
}