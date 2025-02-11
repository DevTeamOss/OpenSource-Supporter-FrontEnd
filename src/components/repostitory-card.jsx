import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

import { useRepoDetail } from '@/view-models/index.js'
import { COLOR } from '@/constants/color.js'
import TagChip from '@/components/tag-chip'

import '@/assets/scss/components/repository-card.scss'

export default function RepositoryCard({ repoInfo, forProfile }) {
    const repoDetailViewModel = useRepoDetail()

    return (
        <div
            className={`repository-card-container ${forProfile && 'my-card'}`}
            onClick={() => repoDetailViewModel.selectRepo(repoInfo.id)}
        >
            <div className="repository-card-header">
                <div className="card-header-section">
                    <img
                        className="profile-img"
                        src={repoInfo.avatarUrl}
                        alt={repoInfo.userName}
                    />
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
                        <div
                            className="language-circle"
                            style={{ background: COLOR[repoInfo.mostLanguage] }}
                        />
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
