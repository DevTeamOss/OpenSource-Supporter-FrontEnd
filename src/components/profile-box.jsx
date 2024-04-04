import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins } from '@fortawesome/free-solid-svg-icons'

import '@/assets/scss/components/profile-box.scss'

export default function ProfileBox() {
    return (
        <div className="profile-box-container">
            <div className="profile-img" />
            <div className="profile-info-box">
                <div className="profile-info-section">
                    <div className="name-text">테스트유저</div>
                    <div className="username-text">github-test-user</div>
                </div>
                <div className="profile-info-section">
                    <div className="point-text">
                        <FontAwesomeIcon icon={faCoins} /> 159 / 308
                    </div>
                </div>
            </div>
        </div>
    )
}
