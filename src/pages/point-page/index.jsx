import PointSummarySection from '@/pages/point-page/point-summary-section'
import PointHistorySection from '@/pages/point-page/point-history-section'

import '@/assets/scss/pages/point-page.scss'

export default function PointPage() {
    return (
        <div className="point-page-container">
            <PointSummarySection />
            <PointHistorySection />
        </div>
    )
}
