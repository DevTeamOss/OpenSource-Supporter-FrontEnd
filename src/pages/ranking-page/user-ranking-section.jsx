import { CircularProgressbarWithChildren } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

export default function UserRankingSection() {
    const percentage = 90
    const tierText = 'gold'

    return (
        <div className="user-ranking-section-container">
            <div className="user-ranking-header">
                <div className="ranking-title">Ranks</div>
                <div className="ranking-progress-gauge-container">
                    <svg style={{ height: 0, width: 0 }}>
                        <defs>
                            <linearGradient
                                id={'progress'}
                                gradientTransform={`rotate(90)`}
                            >
                                <stop offset="0%" stopColor={'#d2e5fb'} />
                                <stop offset="100%" stopColor={'#58a6ff'} />
                            </linearGradient>
                        </defs>
                    </svg>
                    <CircularProgressbarWithChildren
                        value={percentage}
                        strokeWidth={16}
                        circleRatio={0.75}
                        styles={{
                            path: {
                                stroke: `url(#${'progress'})`,
                                height: '100%',
                                strokeLinecap: 'butt',
                                transition: 'stroke-dashoffset 1s linear 0s',
                                transform: 'rotate(0.625turn)',
                                transformOrigin: 'center center',
                            },
                            trail: {
                                stroke: 'gray',
                                strokeLinecap: 'butt',
                                transform: 'rotate(0.625turn)',
                                transformOrigin: 'center center',
                            },
                            text: {
                                fill: 'white',
                                fontSize: '12px',
                            },
                        }}
                    >
                        <div className="profile-img"></div>
                    </CircularProgressbarWithChildren>
                    <div className="user-info-box">
                        <div className="name-text">권혁원</div>
                        <div className="username-text">ambition-kwon</div>
                    </div>
                </div>
            </div>
            <div className="user-ranking-info-container">
                <div className="info-box">
                    <div className="info-title">
                        Points needed for the next Tier
                    </div>
                    <div className="point-text">
                        <span className="points">3840</span> P
                    </div>
                </div>
                <div className="info-divide-line"></div>
                <div className="info-box">
                    <div className="info-title">Current Tier</div>
                    <div className="tier-text">
                        <span className={`tier ${tierText}`}>Gold</span>Partner
                    </div>
                </div>
                <div className="info-divide-line"></div>
                <div className="info-box">
                    <div className="info-title">Real-time Ranking</div>
                    <div className="ranking-text">
                        <span className="number">No.</span> 38463
                        <div className="ranking-top">(Top 10.8%)</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
