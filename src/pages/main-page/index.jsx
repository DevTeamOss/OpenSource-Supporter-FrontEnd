import SearchBarSection from '@/pages/main-page/search-bar-section'
import CarouselSection from '@/pages/main-page/carousel-section'
import ContentSection from '@/pages/main-page/content-section'

import '@/assets/scss/pages/main-page.scss'

export default function MainPage() {
    return (
        <div className="main-page-container">
            <SearchBarSection />
            <CarouselSection />
            <ContentSection />
        </div>
    )
}
