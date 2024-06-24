import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { useUserController } from '@/controllers/index.js'

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
                    className={`isposted-btn ${data.posted ? 'update' : 'post'}`}
                    onClick={() => select(data.repoId, data.repoName)}
                >
                    {data.posted ? 'Update' : 'Post'}
                </div>
                <div
                    className="next-stage-arrow"
                    onClick={() => select(data.repoId, data.repoName)}
                >
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
            </div>
        </div>
    )
}
