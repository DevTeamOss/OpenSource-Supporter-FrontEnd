import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faPlay } from '@fortawesome/free-solid-svg-icons'

export default function SearchPageSearchBarSection() {
    return (
        <div className="search-bar-section-container">
            <form className="search-bar-container">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input
                    className="search-bar-input"
                    placeholder="Repositories, Users"
                />
                <button className="search-submit-btn" type="submit">
                    <FontAwesomeIcon icon={faPlay} />
                </button>
            </form>
        </div>
    )
}
