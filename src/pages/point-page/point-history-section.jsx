import { useState } from 'react'
import SpentPointListSection from '@/pages/point-page/spent-point-list-section'
import EarnedPointListSection from '@/pages/point-page/earned-point-list-section'

export default function PointHistortSection() {
    const [option, setOption] = useState('spent')

    function onBtnClick(value) {
        console.log(value)
        setOption(value)
    }

    return (
        <div className="point-history-section-container">
            <div className="point-history-section-header">
                <div className="header-title">History</div>
                <div className="option-btn-box">
                    <div
                        className={`spent-btn ${option === 'spent' ? 'active' : ''}`}
                        onClick={() => onBtnClick('spent')}
                    >
                        Spent
                    </div>
                    <div
                        className={`earned-btn ${option === 'earned' ? 'active' : ''}`}
                        onClick={() => onBtnClick('earned')}
                    >
                        Earned
                    </div>
                </div>
            </div>
            <div className="point-history-section-body">
                {option === 'spent' ? (
                    <SpentPointListSection />
                ) : (
                    <EarnedPointListSection />
                )}
            </div>
        </div>
    )
}
