import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import '@/assets/scss/components/selection-repository.scss';

export default function SelectionRepository({ nextStage }) {
    return (
        <div className="selection-repository-container">
            <div className="selection-repository-section">
                <div className="repository-img" />
                <div className="repository-description">
                    <div className="repository-title">username / title</div>
                    <div className="repository-info">
                        <div className="fork-info">
                            Forks : 15
                        </div>
                        <div className="star-info">
                            Stars : 5
                        </div>
                    </div>
                </div>
            </div>
            <div className="selection-repository-section">
                <div className="creation-day">3 days ago</div>
                <div className="isposted-btn posted">Posted</div>
                <div className="next-stage-arrow" onClick={nextStage}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
            </div>
        </div>
    );
}