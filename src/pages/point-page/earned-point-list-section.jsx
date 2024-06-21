import EarnedPointBox from '@/pages/point-page/earned-point-box.jsx'

export default function EarnedPointListSection() {
    return (
        <div className="earned-point-list-section-container">
            <div className="earned-point-list-section-header">
                <div className="date-title">
                    <div className="date-text">DATE</div>
                </div>
                <div className="point-title">POINTS</div>
                <div className="method-title">METHOD</div>
                <div className="status-title">STATUS</div>
            </div>
            <div className="earned-point-history-list-box">
                <EarnedPointBox
                    date="2024.06.03 22:48:18"
                    points="213"
                    method="Advertisement"
                    detail="ads1"
                    status="IN PROGRESS"
                    background="header-black"
                />
                <EarnedPointBox
                    date="2024.06.03 22:48:18"
                    points="500"
                    method="Paypal"
                    detail=""
                    status="Completed"
                    background="aside-black"
                />
                <EarnedPointBox
                    date="2024.06.03 22:48:18"
                    points="213"
                    method="Advertisement"
                    detail="ads2"
                    status="Completed"
                    background="header-black"
                />
                <EarnedPointBox
                    date="2024.06.03 22:48:18"
                    points="500"
                    method="Sponsored"
                    detail="ambition-kwon"
                    status="Completed"
                    background="aside-black"
                />
                <EarnedPointBox
                    date="2024.06.03 22:48:18"
                    points="500"
                    method="Sponsored"
                    detail="ambition-kwon"
                    status="Completed"
                    background="header-black"
                />
                <EarnedPointBox
                    date="2024.06.03 22:48:18"
                    points="213"
                    method="Advertisement"
                    detail="ads2"
                    status="Completed"
                    background="aside-black"
                />
            </div>
            <div className="earned-point-list-section-footer">
                <div className="show-more-btn">Show more results</div>
            </div>
        </div>
    )
}
