import { useState } from 'react'

import PointSummarySection from '@/pages/point-page/point-summary-section'
import PointHistorySection from '@/pages/point-page/point-history-section'

import '@/assets/scss/pages/point-page.scss'

export default function PointPage() {
    const [resetRequired, setResetRequired] = useState(false)

    function resetList() {
        setResetRequired(true)
    }

    function resetComplete() {
        setResetRequired(false)
    }

    return (
        <div className="point-page-container">
            <PointSummarySection resetList={resetList} />
            <PointHistorySection
                resetRequired={resetRequired}
                resetComplete={resetComplete}
            />
        </div>
    )
}
