import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

import TagChip from '@/components/tag-chip'

import '@/assets/scss/components/repository-card.scss'

export default function RepositoryCard() {
    return (
        <div className="repository-card-container my-card">
            <div className="repository-card-header">
                <div className="card-header-section">
                    <div className="profile-img" />
                    <div className="profile-username-text">
                        github-test-user
                    </div>
                </div>
                <div className="card-header-section">
                    <div className="view-count-info">
                        <FontAwesomeIcon icon={faEye} />
                        <div className="view-count-text">556</div>
                    </div>
                </div>
            </div>
            <div className="repository-card-body">
                <div className="repository-title">test-repository</div>
                <div className="repository-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam mauris risus, interdum et dui in, vestibulum
                    fringilla leo.
                </div>
            </div>
            <div className="repository-card-footer">
                <div className="tag-chip-group">
                    <TagChip>#test</TagChip>
                    <TagChip>#opensource</TagChip>
                    <TagChip>#project</TagChip>
                </div>
                <div className="repository-info-line">
                    <div className="repository-info-section">
                        <div className="language-circle" />
                        Python
                    </div>
                    <div className="repository-info-section">
                        GPL-3.0 license
                    </div>
                    <div className="repository-info-section">
                        Updated last week
                    </div>
                </div>
            </div>
        </div>
    )
}
