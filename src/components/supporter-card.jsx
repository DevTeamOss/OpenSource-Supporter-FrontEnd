import { useEffect, useState } from 'react'

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

export default function SupporterCard() {
    const [level] = useState('SILVER')
    const [mainColor, setMainColor] = useState('')
    const [subColor, setSubColor] = useState('')
    const [levelText, setLevelText] = useState('')

    useEffect(() => {
        setMainColor(VARIANTS[level].main)
        setSubColor(VARIANTS[level].sub)
        setLevelText(VARIANTS[level].text)
    }, [level])

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
                        <div className="text-opensource">OpenSource </div>
                        <div className="text-supporter">Supporter.</div>
                    </div>
                    <div className="card-content-box">
                        <div className="level-text">{levelText}</div>
                        <div className="username-text">github-test-user</div>
                        <div className="info-line">
                            <div className="info-title">Total Donated</div>
                            <div className="info-content">$ 350</div>
                        </div>
                        <div className="info-line">
                            <div className="info-title">Donated For</div>
                            <div className="info-content">
                                5 of opensource projects
                            </div>
                        </div>
                        <div className="progress-line">
                            <div className="progress-bar-background">
                                <div className="progress-bar-value" />
                            </div>
                            <div className="progress-text">$ 350 / 500</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
