import { useEffect, useState } from 'react'

import { useUserController } from '@/controllers/index.js'

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
    const userController = useUserController()

    const [level] = useState('NORMAL')
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
                        <div className="text-opensource">OpenSource</div>
                        <div className="text-supporter">Supporter.</div>
                    </div>
                    <div className="card-content-box">
                        <div className="level-text">{levelText}</div>
                        <div className="username-text">
                            {userController.data.login}
                        </div>
                        <div className="info-line">
                            <div className="info-title">Total Donated</div>
                            <div className="info-content">0 P</div>
                        </div>
                        <div className="info-line">
                            <div className="info-title">Donated For</div>
                            <div className="info-content">none</div>
                        </div>
                        <div className="progress-line">
                            <div className="progress-bar-background">
                                <div
                                    className="progress-bar-value"
                                    style={{ width: 0 }}
                                />
                            </div>
                            <div className="progress-text">0 / 16 P</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
