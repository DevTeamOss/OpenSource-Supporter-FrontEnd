import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

import TagChip from '@/components/tag-chip'

import '@/assets/scss/components/repository-card.scss'

export default function RepositoryCard({ repoInfo }) {
    return (
        <div className="repository-card-container">
            <div className="repository-card-header">
                <div className="card-header-section">
                    <div className="profile-img" />
                    <div className="profile-username-text">
                        {repoInfo.userName}
                    </div>
                </div>
                <div className="card-header-section">
                    <div className="view-count-info">
                        <FontAwesomeIcon icon={faEye} />
                        <div className="view-count-text">
                            {repoInfo.viewCount}
                        </div>
                    </div>
                </div>
            </div>
            <div className="repository-card-body">
                <div className="repository-title">{repoInfo.repoName}</div>
                <div className="repository-description">
                    {repoInfo.description}
                </div>
            </div>
            <div className="repository-card-footer">
                <div className="tag-chip-group">
                    {repoInfo.tags.map((tag, i) => (
                        <TagChip key={i}>{tag}</TagChip>
                    ))}
                </div>
                <div className="repository-info-line">
                    <div className="repository-info-section">
                        <div className="language-circle" />
                        {repoInfo.mostLanguage}
                    </div>
                    <div className="repository-info-section">
                        {repoInfo.license}
                    </div>
                    <div className="repository-info-section">
                        {moment(repoInfo.lastCommitAt).fromNow()}
                    </div>
                </div>
            </div>
        </div>
    )
}
