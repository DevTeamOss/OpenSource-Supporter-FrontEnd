import { useRankList } from '@/hooks/use-rank-list.js'
import RankingBox from '@/pages/ranking-page/ranking-box.jsx'

import Spinner from '@/assets/img/spinner.svg'

export default function TotalRankingSection() {
    const rankList = useRankList()

    return (
        <div className="total-ranking-section-container">
            <div className="total-ranking-section-header">
                <div className="position-title">POSITION</div>
                <div className="user-title">
                    <div className="user-title-text">USER</div>
                </div>
                <div className="points-title">POINTS</div>
                <div className="tier-title">TIER</div>
            </div>
            <div className="total-ranking-list-box">
                {rankList.data.map((info, i) => (
                    <RankingBox
                        ranking={info.rank}
                        name={info.name}
                        username={info.username}
                        points={info.usedPoint}
                        tier={info.tier}
                        background={
                            i % 2 === 0 ? 'header-black' : 'aside-black'
                        }
                        avatar={info.avatarUrl}
                    />
                ))}
            </div>
            <div className="total-ranking-footer">
                {rankList.hasNextPage && !rankList.isLoading && (
                    <div
                        className="show-more-btn"
                        onClick={rankList.getAdditionalData}
                    >
                        Show more results
                    </div>
                )}
                {rankList.isLoading && (
                    <img className="spinner-img" src={Spinner} alt="loading" />
                )}
            </div>
        </div>
    )
}
