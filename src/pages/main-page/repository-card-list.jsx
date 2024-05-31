import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

import { useRepoList } from '@/hooks/use-repo-list.js'
import RepositoryCard from '@/components/repostitory-card.jsx'

export default function RepositoryCardList({ type }) {
    const repoList = useRepoList(type)

    return (
        <div className="repository-card-list-container">
            <div className="pagination-btn" onClick={repoList.prevPage}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div className="card-group-container">
                {repoList.data.map((info, i) => (
                    <RepositoryCard repoInfo={info} key={i} />
                ))}
            </div>
            <div className="pagination-btn" onClick={repoList.nextPage}>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
        </div>
    )
}
