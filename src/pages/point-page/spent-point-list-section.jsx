import moment from 'moment'

import SpentPointBox from '@/pages/point-page/spent-point-box.jsx'
import { usePointListPagination } from '@/hooks/use-point-list-pagination.js'

import Spinner from '@/assets/img/spinner.svg'

export default function SpentPointListSection() {
    const pointListPagination = usePointListPagination('SPENT')

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
                {pointListPagination.data.map((info, i) => (
                    <SpentPointBox
                        date={moment(info.date)
                            .add(9, 'hours')
                            .format('YYYY.MM.DD hh:mm:ss A')}
                        points={info.point}
                        description={info.description}
                        status={info.status}
                        background={
                            i % 2 === 0 ? 'header-black' : 'aside-black'
                        }
                        key={i}
                    />
                ))}
            </div>
            <div className="spent-point-list-section-footer">
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
