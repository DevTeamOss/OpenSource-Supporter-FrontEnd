import { useEffect } from 'react'

import { useUser, usePoint } from '@/view-models/index.js'
import { useModal } from '@/hooks/use-modal.js'
import PointsSummaryBox from '@/pages/point-page/points-summary-box.jsx'
import ChargeModal from '@/pages/point-page/charge-modal.jsx'
import WithdrawCashModal from '@/pages/point-page/withdraw-cash-modal.jsx'

export default function PointSummarySection({ resetList }) {
    const userViewModel = useUser()
    const pointViewModel = usePoint()
    const chargeModal = useModal()
    const withdrawCashModal = useModal()

    async function refresh() {
        await pointViewModel.getSummary()
        await userViewModel.refresh()
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
                        points={pointViewModel.data.spentPoints}
                        profitRate={
                            pointViewModel.data.monthlySpentPointsPercentage
                        }
                        indicator={indicator(
                            pointViewModel.data.monthlySpentPointsPercentage,
                        )}
                    />
                    <PointsSummaryBox
                        method="Paypal"
                        points={pointViewModel.data.paypalPoints}
                        profitRate={
                            pointViewModel.data.monthlyPaypalPointsPercentage
                        }
                        indicator={indicator(
                            pointViewModel.data.monthlyPaypalPointsPercentage,
                        )}
                    />
                    <PointsSummaryBox
                        method="Ads"
                        points={pointViewModel.data.advertisementPoints}
                        profitRate={
                            pointViewModel.data
                                .monthlyAdvertisementPointsPercentage
                        }
                        indicator={indicator(
                            pointViewModel.data
                                .monthlyAdvertisementPointsPercentage,
                        )}
                    />
                    <div
                        className="sponsor-summary-box"
                        onClick={withdrawCashModal.open}
                    >
                        <PointsSummaryBox
                            method="Sponsor"
                            points={pointViewModel.data.sponsoredPoints}
                            profitRate={
                                pointViewModel.data
                                    .monthlySponsoredPointsPercentage
                            }
                            indicator={indicator(
                                pointViewModel.data
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
