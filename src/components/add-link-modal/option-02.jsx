import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export default function Option02() {
    const [copyState, setCopyState] = useState(false)

    function clickCopyBtn() {
        setCopyState(true)
    }

    return (
        <div className="option02-container">
            <div className="option02-header">
                <div className="description-text">
                    Let’s copy your profile card link
                </div>
            </div>
            <div className="option02-body">
                <div className="link-box">
                    <div className="link-text">
                        https://www.opensource-supporter.com/card/Share?userName
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
