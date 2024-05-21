import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export default function Option01() {
    const [copyState, setCopyState] = useState(false)

    function clickCopyBtn() {
        setCopyState(true)
    }

    return (
        <div className="option01-container">
            <div className="option01-header">
                <div className="description-text">
                    Let’s copy your github redirection link
                </div>
            </div>
            <div className="option01-body">
                <div className="link-box">
                    <div className="link-text">
                        https://www.opensource-supporter.com/github/Share?userName
                    </div>
                    <div className="btn-box">
                        {!copyState ? (
                            <div className="copy-btn">
                                <FontAwesomeIcon
                                    icon={faCopy}
                                    onClick={clickCopyBtn}
                                    style={{ color: '#58a6ff' }}
                                />
                            </div>
                        ) : (
                            <div className="check-icon">
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    style={{ color: '#58a6ff' }}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
