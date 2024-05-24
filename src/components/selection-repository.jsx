import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import moment from 'moment'

import '@/assets/scss/components/selection-repository.scss'
import { useUserController } from '@/controllers'

export default function SelectionRepository({ select, data }) {
    const userController = useUserController()

    return (
        <div className="selection-repository-container">
            <div className="selection-repository-section">
                <FontAwesomeIcon icon={faGithub} className="repository-img" />
                <div className="repository-description">
                    <div className="repository-title">
                        {userController.data.username} / {data.repoName}
                    </div>
                    <div className="repository-info">
                        <div className="fork-info">
                            Forks : {data.forkCount}
                        </div>
                        <div className="star-info">
                            Stars : {data.starCount}
                        </div>
                    </div>
                </div>
            </div>
            <div className="selection-repository-section">
                <div className="creation-day">
                    {moment(data.lastCommitAt, 'YYYY-MM-DD').fromNow()}
                </div>
                <div
                    className={`isposted-btn ${data.posted ? 'posted' : 'unposted'}`}
                >
                    {data.posted ? 'Posted' : 'Unposted'}
                </div>
                <div
                    className="next-stage-arrow"
                    onClick={() => select(data.repoName)}
                >
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
            </div>
        </div>
    )
}
