import { useModal } from '@/hooks/use-modal.js'
import PointsSummaryBox from '@/pages/point-page/points-summary-box.jsx'
import ChargeModal from '@/pages/point-page/charge-modal.jsx'
import WithdrawCashModal from '@/pages/point-page/withdraw-cash-modal.jsx'

export default function PointSummarySection() {
    const chargeModal = useModal()
    const withdrawCashModal = useModal()

    return (
        <div className="point-summary-section-container">
            <div className="point-summary-section-header">
                <div className="header-title">Summary</div>
                <div className="charge-btn" onClick={chargeModal.open}>
                    PayPal Charge
                </div>
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
                    <div
                        className="sponsor-summary-box"
                        onClick={withdrawCashModal.open}
                    >
                        <PointsSummaryBox
                            method="Sponsor"
                            points="1000"
                            profitRate="10.5"
                            indicator="up"
                        />
                    </div>
                </div>
            </div>
            {chargeModal.visible && <ChargeModal close={chargeModal.close} />}
            {withdrawCashModal.visible && (
                <WithdrawCashModal close={withdrawCashModal.close} />
            )}
        </div>
    )
}
