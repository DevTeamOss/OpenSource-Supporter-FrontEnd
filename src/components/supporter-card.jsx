import { useEffect, useState } from 'react'

import { MAX_POINT } from '@/constants/level'

import '@/assets/scss/components/supporter-card.scss'

const VARIANTS = {
    NORMAL: {
        main: '#111',
        sub: '#666',
        text: 'Partner',
    },
    BRONZE: {
        main: '#733',
        sub: '#c88',
        text: 'Bronze Partner',
    },
    SILVER: {
        main: '#445',
        sub: '#99a',
        text: 'Silver Partner',
    },
    GOLD: {
        main: '#a70',
        sub: '#fa6',
        text: 'Gold Partner',
    },
}

export default function SupporterCard({ data }) {
    const [mainColor, setMainColor] = useState('')
    const [subColor, setSubColor] = useState('')
    const [levelText, setLevelText] = useState('')

    useEffect(() => {
        setMainColor(VARIANTS[data.level].main)
        setSubColor(VARIANTS[data.level].sub)
        setLevelText(VARIANTS[data.level].text)
    }, [data.level])

    return (
        <div className="supporter-card-container">
            <div className="card-base">
                <div
                    className="card-plate"
                    style={{
                        background: `linear-gradient(45deg, ${subColor}, ${mainColor})`,
                    }}
                >
                    <div
                        className="logo-text"
                        style={{
                            color: mainColor,
                            textShadow: `1px 1px 1px ${subColor}`,
                        }}
                    >
                        <div className="text-opensource">OpenSource</div>
                        <div className="text-supporter">Supporter.</div>
                    </div>
                    <div className="card-content-box">
                        <div className="level-text">{levelText}</div>
                        <div className="username-text">{data.username}</div>
                        <div className="info-line">
                            <div className="info-title">Total Donated</div>
                            <div className="info-content">
                                {data.totalDonated} P
                            </div>
                        </div>
                        <div className="info-line">
                            <div className="info-title">Donated For</div>
                            <div className="info-content">
                                {data.donatedRepoNames
                                    ? data.donatedRepoNames
                                    : 'none'}
                            </div>
                        </div>
                        <div className="progress-line">
                            <div className="progress-bar-background">
                                <div
                                    className="progress-bar-value"
                                    style={{ width: data.progress }}
                                />
                            </div>
                            <div className="progress-text">{`${data.totalDonated} / ${MAX_POINT[data.level]} P`}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
