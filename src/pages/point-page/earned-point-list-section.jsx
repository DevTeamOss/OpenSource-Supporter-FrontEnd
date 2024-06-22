import { useEffect } from 'react'
import moment from 'moment'

import { usePointListPagination } from '@/hooks/use-point-list-pagination.js'
import EarnedPointBox from '@/pages/point-page/earned-point-box.jsx'

import Spinner from '@/assets/img/spinner.svg'

export default function EarnedPointListSection({
    resetRequired,
    resetComplete,
}) {
    const pointListPagination = usePointListPagination('EARNED')

    async function resetList() {
        await pointListPagination.initList()
        resetComplete()
    }

    useEffect(() => {
        if (!resetRequired) {
            return
        }

        resetList().then()
    }, [resetRequired])

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
                {pointListPagination.data.map((info, i) => (
                    <EarnedPointBox
                        date={moment(info.date)
                            .add(9, 'hours')
                            .format('YYYY.MM.DD hh:mm:ss A')}
                        points={info.point}
                        description={info.description}
                        status={info.status}
                        background={
                            i % 2 === 0 ? 'header-black' : 'aside-black'
                        }
                    />
                ))}
            </div>
            <div className="earned-point-list-section-footer">
                {pointListPagination.hasNextPage &&
                    !pointListPagination.isLoading && (
                        <div
                            className="show-more-btn"
                            onClick={pointListPagination.getAdditionalData}
                        >
                            Show more results
                        </div>
                    )}
                {pointListPagination.isLoading && (
                    <img className="spinner-img" src={Spinner} alt="loading" />
                )}
            </div>
        </div>
    )
}
