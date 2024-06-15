import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

import { useRepoListPagination } from '@/hooks/use-repo-list-pagination.js'
import RepositoryCard from '@/components/repostitory-card.jsx'
import Spinner from '@/assets/img/spinner.svg'
import { useModal } from '@/hooks/use-modal.js'
import AddRepositoryDetailModal from '@/components/add-repository-detail-modal/index.jsx'

export default function RepositoryCardList({ type }) {
    const repoList = useRepoListPagination(type)
    const addRepositoryDetailModal = useModal()

    return (
        <div className="repository-card-list-container">
            {repoList.hasPrevPage ? (
                <div className="pagination-btn" onClick={repoList.prevPage}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </div>
            ) : (
                <div className="pagination-btn disabled">
                    <FontAwesomeIcon icon={faChevronLeft} />
                </div>
            )}
            {repoList.data.length ? (
                <div className="card-group-container">
                    {repoList.data.map((info, i) => (
                        <RepositoryCard
                            repoInfo={info}
                            key={i}
                            onClick={addRepositoryDetailModal.open}
                        />
                    ))}
                    {repoList.isLoading && (
                        <div className="loading-spinner-box">
                            <img
                                className="loading-spinner"
                                src={Spinner}
                                alt="spinner"
                            />
                        </div>
                    )}
                </div>
            ) : (
                <div className="card-group-container empty">
                    Repository Not Found
                </div>
            )}
            {repoList.hasNextPage ? (
                <div className="pagination-btn" onClick={repoList.nextPage}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
            ) : (
                <div className="pagination-btn disabled">
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
            )}
            {addRepositoryDetailModal.visible && (
                <AddRepositoryDetailModal
                    close={addRepositoryDetailModal.close}
                />
            )}
        </div>
    )
}
