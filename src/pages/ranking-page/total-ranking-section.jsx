import { useEffect } from 'react'

import { useRankList } from '@/hooks/use-rank-list.js'
import RankingBox from '@/components/ranking-box'

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
                {/*<RankingBox*/}
                {/*    ranking="2"*/}
                {/*    name="고강민"*/}
                {/*    username="kmwyatt"*/}
                {/*    points="134000"*/}
                {/*    tier="GOLD"*/}
                {/*    background="aside-black"*/}
                {/*/>*/}
                {/*<RankingBox*/}
                {/*    ranking="3"*/}
                {/*    name="김한나"*/}
                {/*    username="khanna01"*/}
                {/*    points="15000"*/}
                {/*    tier="SLIVER"*/}
                {/*    background="header-black"*/}
                {/*/>*/}
                {/*<RankingBox*/}
                {/*    ranking="4"*/}
                {/*    name="김재형"*/}
                {/*    username="21divcert"*/}
                {/*    points="10025"*/}
                {/*    tier="SLIVER"*/}
                {/*    background="aside-black"*/}
                {/*/>*/}
                {/*<RankingBox*/}
                {/*    ranking="5"*/}
                {/*    name="강다연"*/}
                {/*    username="daniyeoni"*/}
                {/*    points="2400"*/}
                {/*    tier="BRONZE"*/}
                {/*    background="header-black"*/}
                {/*/>*/}
            </div>
            <div className="total-ranking-footer">
                {rankList.hasNextPage && (
                    <div
                        className="show-more-btn"
                        onClick={rankList.getAdditionalData}
                    >
                        Show more results
                    </div>
                )}
            </div>
        </div>
    )
}
