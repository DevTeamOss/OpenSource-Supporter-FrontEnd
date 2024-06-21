import moment from 'moment'

import TagChip from '@/components/tag-chip.jsx'
import { COLOR } from '@/constants/color.js'

export default function RepositoryBox({ data }) {
    return (
        <div className="repository-box-container">
            <div className="repository-box-header">
                <div className="box-header-section">
                    <img
                        className="profile-img"
                        src={data.avatarUrl}
                        alt={data.username}
                    />
                    <div className="repository-name-text">
                        <div className="user-name">{data.username}</div>
                        <div className="text-slash">/</div>
                        <div className="repo-name">{data.repoName}</div>
                    </div>
                </div>
            </div>
            <div className="repository-box-body">
                <div className="repository-description">{data.description}</div>
            </div>
            <div className="repository-box-footer">
                <div className="tag-chip-group">
                    {data.tags.map((tag) => (
                        <TagChip>{tag}</TagChip>
                    ))}
                </div>
                <div className="repository-info-line">
                    <div className="repository-info-section">
                        <div
                            className="language-circle"
                            style={{ background: COLOR[data.mostLanguage] }}
                        />
                        {data.mostLanguage}
                    </div>
                    <div className="text-slash">/</div>
                    <div className="repository-info-section">
                        {data.license}
                    </div>
                    <div className="text-slash">/</div>
                    <div className="repository-info-section">
                        {moment(data.lastCommitAt).fromNow()}
                    </div>
                </div>
            </div>
        </div>
    )
}
