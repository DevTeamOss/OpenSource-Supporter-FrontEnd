import { useEffect } from 'react'

import { useUserController, usePointController } from '@/controllers/index.js'
import { useModal } from '@/hooks/use-modal.js'
import PointsSummaryBox from '@/pages/point-page/points-summary-box.jsx'
import ChargeModal from '@/pages/point-page/charge-modal.jsx'
import WithdrawCashModal from '@/pages/point-page/withdraw-cash-modal.jsx'

export default function PointSummarySection({ resetList }) {
    const userController = useUserController()
    const pointController = usePointController()
    const chargeModal = useModal()
    const withdrawCashModal = useModal()

    async function refresh() {
        await pointController.getSummary()
        await userController.refresh()
        resetList()
    }

    function indicator(percentage) {
        if (percentage > 0) {
            return 'up'
        } else if (percentage < 0) {
            return 'down'
        } else {
            return 'unchanged'
        }
    }

    useEffect(() => {
        refresh().then()
    }, [])

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
                        points={pointController.data.spentPoints}
                        profitRate={
                            pointController.data.monthlySpentPointsPercentage
                        }
                        indicator={indicator(
                            pointController.data.monthlySpentPointsPercentage,
                        )}
                    />
                    <PointsSummaryBox
                        method="Paypal"
                        points={pointController.data.paypalPoints}
                        profitRate={
                            pointController.data.monthlyPaypalPointsPercentage
                        }
                        indicator={indicator(
                            pointController.data.monthlyPaypalPointsPercentage,
                        )}
                    />
                    <PointsSummaryBox
                        method="Ads"
                        points={pointController.data.advertisementPoints}
                        profitRate={
                            pointController.data
                                .monthlyAdvertisementPointsPercentage
                        }
                        indicator={indicator(
                            pointController.data
                                .monthlyAdvertisementPointsPercentage,
                        )}
                    />
                    <div
                        className="sponsor-summary-box"
                        onClick={withdrawCashModal.open}
                    >
                        <PointsSummaryBox
                            method="Sponsor"
                            points={pointController.data.sponsoredPoints}
                            profitRate={
                                pointController.data
                                    .monthlySponsoredPointsPercentage
                            }
                            indicator={indicator(
                                pointController.data
                                    .monthlySponsoredPointsPercentage,
                            )}
                        />
                    </div>
                </div>
            </div>
            {chargeModal.visible && (
                <ChargeModal close={chargeModal.close} refresh={refresh} />
            )}
            {withdrawCashModal.visible && (
                <WithdrawCashModal close={withdrawCashModal.close} />
            )}
        </div>
    )
}
