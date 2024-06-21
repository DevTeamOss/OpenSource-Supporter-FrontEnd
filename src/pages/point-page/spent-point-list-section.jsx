import SpentPointBox from '@/pages/point-page/spent-point-box.jsx'

export default function SpentPointListSection() {
    return (
        <div className="spent-point-list-section-container">
            <div className="spent-point-list-section-header">
                <div className="date-title">
                    <div className="date-text">DATE</div>
                </div>
                <div className="point-title">POINTS</div>
                <div className="info-title">USERNAME / REPOSITORY</div>
                <div className="status-title">STATUS</div>
            </div>
            <div className="spent-point-history-list-box">
                <SpentPointBox
                    date="2024.06.03 22:48:18"
                    points="213"
                    username="ambition-kwon"
                    repository="PreFlightCheck"
                    status="IN PROGRESS"
                    background="header-black"
                />
                <SpentPointBox
                    date="2024.06.03 22:48:18"
                    points="500"
                    username="ambition-kwon"
                    repository="AI-TUTOR"
                    status="Completed"
                    background="aside-black"
                />
                <SpentPointBox
                    date="2024.06.03 22:48:18"
                    points="213"
                    username="ambition-kwon"
                    repository="Design-Branch"
                    status="Completed"
                    background="header-black"
                />
                <SpentPointBox
                    date="2024.06.03 22:48:18"
                    points="500"
                    username="ambition-kwon"
                    repository="PreHotelCheck"
                    status="Completed"
                    background="aside-black"
                />
                <SpentPointBox
                    date="2024.06.03 22:48:18"
                    points="213"
                    username="ambition-kwon"
                    repository="Design-Branch"
                    status="Completed"
                    background="header-black"
                />
                <SpentPointBox
                    date="2024.06.03 22:48:18"
                    points="500"
                    username="ambition-kwon"
                    repository="PreHotelCheck"
                    status="Completed"
                    background="aside-black"
                />
            </div>
            <div className="spent-point-list-section-footer">
                <div className="show-more-btn">Show more results</div>
            </div>
        </div>
    )
}
