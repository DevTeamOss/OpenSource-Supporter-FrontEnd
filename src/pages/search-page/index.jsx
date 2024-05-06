import SearchContentSection from './search-content-section'
import SearchPageSearchBarSection from './search-page-search-bar-section'

import '@/assets/scss/pages/search-page.scss'

export default function SearchPage() {
    return (
        <div className="search-page-container">
            <SearchPageSearchBarSection />
            <SearchContentSection />
        </div>
    )
} 