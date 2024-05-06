import '@/assets/scss/components/repository-box.scss';
import TagChip from "./tag-chip";

export default function RepositoryBox() {
    return (
        <div className="repository-box-container">
            <div className="repository-box-header">
                <div className="box-header-section">

                <div className="profile-img" />
                <div className="repository-name-text">
                    <div className="user-name">user</div>
                    <div className="text-slash">/</div>
                    <div className="repo-name">repository</div>
                </div>
                </div>
            </div>
            <div className="repository-box-body">
                <div className="repository-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mauris risus, interdum et dui in, vestibulum fringilla leo.
                </div>
            </div>
            <div className="repository-box-footer">
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
                    <div className="text-slash">/</div>
                    <div className="repository-info-section">
                         GPL-3.0 license
                    </div>
                    <div className="text-slash">/</div>
                    <div className="repository-info-section">
                        Updated last week
                    </div>
                </div>
            </div>
        </div>
    );
}