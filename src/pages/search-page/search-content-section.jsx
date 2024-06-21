import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import { useSearch } from '@/hooks/use-search.js'
import RepositoryBox from '@/pages/search-page/repository-box.jsx'
import UserCard from '@/pages/search-page/user-card.jsx'
import LoadingScreen from '@/components/loading-screen'

export default function SearchContentSection() {
    const [searchParams, setSearchParams] = useSearchParams()
    const search = useSearch()

    useEffect(() => {
        const keyword = searchParams.get('where')
        search.getResult(keyword).then()
    }, [searchParams])

    return (
        <div className="search-content-section-container">
            <div className="main-content-box">
                <div className="content-title-text">
                    <div className="title-text">Users</div>
                    <div className="count-result-text">
                        {search.userData.length} results
                    </div>
                </div>
                <div className="card-group-container">
                    {search.userData.map((user) => (
                        <UserCard data={user} />
                    ))}
                </div>
            </div>
            <div className="main-content-box">
                <div className="content-title-text">
                    <div className="title-text">Repositories</div>
                    <div className="count-result-text">
                        {search.repoData.length} results
                    </div>
                </div>
                <div className="card-group-container">
                    {search.repoData.map((repo) => (
                        <RepositoryBox data={repo} />
                    ))}
                </div>
            </div>
            {search.isLoading && <LoadingScreen />}
        </div>
    )
}
