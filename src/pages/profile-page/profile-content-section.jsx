import RepositoryCard from '@/components/dummy-repository-card.jsx'

export default function ProfileContentSection() {
    return (
        <div className="profile-content-section-container">
            <div className="profile-content-box">
                <div className="content-title-text">
                    <div className="title-text">Supported</div>
                    <div className="title-text">Repositories</div>
                </div>
                <div className="card-group-container">
                    <RepositoryCard />
                    <RepositoryCard />
                    <RepositoryCard />
                    <RepositoryCard />
                    <RepositoryCard />
                </div>
            </div>
            <div className="profile-content-box">
                <div className="content-title-text">
                    <div className="title-text">Supporting</div>
                    <div className="title-text">Repositories</div>
                </div>
                <div className="card-group-container">
                    <RepositoryCard />
                    <RepositoryCard />
                    <RepositoryCard />
                    <RepositoryCard />
                    <RepositoryCard />
                </div>
            </div>
        </div>
    )
}
