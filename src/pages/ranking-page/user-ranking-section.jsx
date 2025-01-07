import { CircularProgressbarWithChildren } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { useRankInfo } from '@/view-models/use-rank-info.js'
import { useState, useEffect } from 'react'

export default function UserRankingSection() {
    const rankInfo = useRankInfo()

    const [percentage, setPercentage] = useState(0)

    useEffect(() => {
        setPercentage(rankInfo.data.progress)
    }, [rankInfo.data])

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
                        <img
                            className="profile-img"
                            src={rankInfo.data.avatarUrl}
                            alt={rankInfo.data.username}
                        />
                    </CircularProgressbarWithChildren>
                    <div className="user-info-box">
                        <div className="name-text">{rankInfo.data.name}</div>
                        <div className="username-text">
                            {rankInfo.data.username}
                        </div>
                    </div>
                </div>
            </div>
            <div className="user-ranking-info-container">
                <div className="info-box">
                    <div className="info-title">
                        Points needed for the next Tier
                    </div>
                    <div className="point-text">
                        <span className="points">
                            {rankInfo.data.toNextTier}
                        </span>{' '}
                        P
                    </div>
                </div>
                <div className="info-divide-line"></div>
                <div className="info-box">
                    <div className="info-title">Current Tier</div>
                    <div className="tier-text">
                        <span
                            className={`tier ${rankInfo.data.level.toLowerCase()}`}
                        >
                            {rankInfo.data.tierText}
                        </span>
                        {'\u00A0'}Partner
                    </div>
                </div>
                <div className="info-divide-line"></div>
                <div className="info-box">
                    <div className="info-title">Real-time Ranking</div>
                    <div className="ranking-text">
                        <span className="number">No.</span>
                        {rankInfo.data.rank}
                        <div className="ranking-top">
                            (Top {rankInfo.data.topPercent}%)
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
