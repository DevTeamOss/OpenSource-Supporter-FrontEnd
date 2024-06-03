import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedal } from '@fortawesome/free-solid-svg-icons'

import '@/assets/scss/components/ranking-box.scss'

export default function RankingBox({
    ranking,
    name,
    username,
    points,
    tier,
    background,
}) {
    return (
        <div
            className="ranking-box-container"
            style={{
                background:
                    background === 'aside-black' ? '#020408' : '#161B22',
            }}
        >
            <div className="position-box">
                <div className="ranking-text">{ranking}</div>
                <div className="medal-icon">
                    {ranking === '1' ? (
                        <FontAwesomeIcon
                            icon={faMedal}
                            style={{ color: '#ffd233' }}
                        />
                    ) : ranking === '2' ? (
                        <FontAwesomeIcon
                            icon={faMedal}
                            style={{ color: '#c0c0c0' }}
                        />
                    ) : ranking === '3' ? (
                        <FontAwesomeIcon
                            icon={faMedal}
                            style={{ color: '#cd7f32' }}
                        />
                    ) : (
                        ''
                    )}
                </div>
            </div>
            <div className="user-box">
                <div className="profile-img"></div>
                <div className="user-info-box">
                    <div className="name-text">{name}</div>
                    <div className="username-text">{username}</div>
                </div>
            </div>
            <div className="points-box">{points} P</div>
            <div className={`tier-box ${tier}`}>{tier}</div>
        </div>
    )
}