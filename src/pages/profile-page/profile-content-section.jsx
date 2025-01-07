import { useProfileRepoList } from '@/view-models/use-profile-repo-list.js'
import RepositoryCard from '@/components/repostitory-card.jsx'

export default function ProfileContentSection() {
    const supportedList = useProfileRepoList('SUPPORTED')
    const supportingList = useProfileRepoList('SUPPORTING')

    return (
        <div className="profile-content-section-container">
            <div className="profile-content-box">
                <div className="content-title-text">
                    <div className="title-text">Supported</div>
                    <div className="title-text">Repositories</div>
                </div>
                <div className="card-group-container">
                    {supportedList.data.map((repoInfo, i) => (
                        <RepositoryCard
                            forProfile
                            repoInfo={repoInfo}
                            key={i}
                        />
                    ))}
                    {supportedList.data.length === 0 && (
                        <div className="not-found">Repository Not Found</div>
                    )}
                </div>
            </div>
            <div className="profile-content-box">
                <div className="content-title-text">
                    <div className="title-text">Supporting</div>
                    <div className="title-text">Repositories</div>
                </div>
                <div className="card-group-container">
                    {supportingList.data.map((repoInfo, i) => (
                        <RepositoryCard
                            forProfile
                            repoInfo={repoInfo}
                            key={i}
                        />
                    ))}
                    {supportingList.data.length === 0 && (
                        <div className="not-found">Repository Not Found</div>
                    )}
                </div>
            </div>
        </div>
    )
}
