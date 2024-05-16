import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'

import '@/assets/scss/components/selection-repository.scss'
import { useUserController } from '@/controllers'

/*
[
    {
        "repoId": null,
        "repoName": "elevator-react-ts",
        "forkCount": 0,
        "starCount": 0,
        "lastCommitAt": "2023-11-27T11:27:56",
        "posted": false
    },
    {
        "repoId": null,
        "repoName": "elevator-react-typescript-prev",
        "forkCount": 0,
        "starCount": 0,
        "lastCommitAt": "2023-11-25T04:10:33",
        "posted": false
    }
]
*/

export default function SelectionRepository({ select, data }) {
    const userController = useUserController()

    return (
        <div className="selection-repository-container">
            <div className="selection-repository-section">
                <div className="repository-img" />
                <div className="repository-description">
                    <div className="repository-title">{userController.data.username} / {data.repoName}</div>
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
                <div className="creation-day">{moment(data.lastCommitAt, 'YYYY-MM-DD').fromNow()}</div>
                <div className={`isposted-btn ${data.posted ? 'posted' : 'unposted'}`}>{data.posted ? 'Posted' : 'Unposted'}</div>
                <div className="next-stage-arrow" onClick={() => select(data.repoName)}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
            </div>
        </div>
    );
}