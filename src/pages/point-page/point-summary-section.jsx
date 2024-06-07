import PointsSummaryBox from '@/components/points-summary-box'

export default function PointSummarySection() {
    return (
        <div className="point-summary-section-container">
            <div className="point-summary-section-header">
                <div className="hearder-title">Summary</div>
                <div className="charge-btn">PayPal Charge</div>
            </div>
            <div className="point-summary-section-body">
                <div className="summary-box">
                    <PointsSummaryBox
                        method="Github"
                        points="11301"
                        profitRate="2.5"
                        indicator="up"
                    />
                    <PointsSummaryBox
                        method="Paypal"
                        points="24032"
                        profitRate="1.7"
                        indicator="down"
                    />
                    <PointsSummaryBox
                        method="Ads"
                        points="203"
                        profitRate="0.0"
                        indicator="unchanged"
                    />
                    <PointsSummaryBox
                        method="Sponsor"
                        points="1000"
                        profitRate="10.5"
                        indicator="up"
                    />
                </div>
            </div>
        </div>
    )
}
