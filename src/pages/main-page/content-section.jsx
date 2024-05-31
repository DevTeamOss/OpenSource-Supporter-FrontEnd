import RepositoryCardList from '@/pages/main-page/repository-card-list'

export default function ContentSection() {
    return (
        <div className="content-section-container">
            <div className="main-content-box">
                <div className="content-title-text">
                    <div className="title-text">My</div>
                    <div className="title-text">Partners</div>
                </div>
                <RepositoryCardList type="MY_PARTNERS" />
            </div>
            <div className="main-content-box">
                <div className="content-title-text">
                    <div className="title-text">Most</div>
                    <div className="title-text">Viewed</div>
                </div>
                <RepositoryCardList type="MOST_VIEWED" />
            </div>
            <div className="main-content-box">
                <div className="content-title-text">
                    <div className="title-text">Recently Commit</div>
                    <div className="title-text">Repositories</div>
                </div>
                <RepositoryCardList type="RECENTLY_COMMIT" />
            </div>
        </div>
    )
}
