import '@/assets/scss/pages/ranking-page.scss'
import UserRankingSection from './user-ranking-section'
import TotalRankingSection from './total-ranking-section'

export default function RankingPage() {
    return (
        <div className="ranking-page-container">
            <UserRankingSection />
            <TotalRankingSection />
        </div>
    )
}
