import RepositoryCard from '@/components/repostitory-card'

export default function ContentSection() {
    return (
        <div className="content-section-container">
            <div className="main-content-box">
                <div className="content-title-text">
                    <div className="title-text">My</div>
                    <div className="title-text">Partners</div>
                </div>
                <div className="card-group-container">
                    <RepositoryCard />
                    <RepositoryCard />
                    <RepositoryCard />
                </div>
            </div>
            <div className="main-content-box">
                <div className="content-title-text">
                    <div className="title-text">Most</div>
                    <div className="title-text">Viewed</div>
                </div>
                <div className="card-group-container">
                    <RepositoryCard />
                    <RepositoryCard />
                    <RepositoryCard />
                </div>
            </div>
            <div className="main-content-box">
                <div className="content-title-text">
                    <div className="title-text">Recently Commit</div>
                    <div className="title-text">Repositories</div>
                </div>
                <div className="card-group-container">
                    <RepositoryCard />
                    <RepositoryCard />
                    <RepositoryCard />
                </div>
            </div>
        </div>
    )
}
