import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faPlay } from '@fortawesome/free-solid-svg-icons'

export default function SearchBarSection() {
    const navigate = useNavigate()
    const [keyword, setKeyword] = useState('')

    function submit(e) {
        e.preventDefault()

        if (!keyword) {
            return
        }
        navigate(`/search?where=${keyword}`)
    }

    return (
        <div className="search-bar-section-container">
            <form className="search-bar-container" onSubmit={(e) => submit(e)}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input
                    className="search-bar-input"
                    placeholder="Repositories, Users"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                />
                <button className="search-submit-btn" type="submit">
                    <FontAwesomeIcon icon={faPlay} />
                </button>
            </form>
        </div>
    )
}
