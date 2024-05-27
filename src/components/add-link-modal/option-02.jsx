import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { useState, useRef } from 'react'

export default function Option02() {
    const [copyState, setCopyState] = useState(false)
    const textAreaRef = useRef(null)

    const copyToClipboard = () => {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard
                .writeText(
                    'https://www.opensource-supporter.com/card/Share?userName',
                )
                .then(() => {
                    setCopyState((prev) => !prev)
                    setTimeout(() => {
                        setCopyState((prev) => !prev)
                    }, 5000)
                })
        } else {
            const textArea = textAreaRef.current
            textArea.value =
                'https://www.opensource-supporter.com/card/Share?userName'
            textArea.select()
            document.execCommand('copy')
            setCopyState((prev) => !prev)
            setTimeout(() => {
                setCopyState((prev) => !prev)
            }, 5000)
        }
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
                    <textarea
                        ref={textAreaRef}
                        value="https://www.opensource-supporter.com/card/Share?userName"
                        readOnly
                        style={{ position: 'absolute', left: '-9999px' }}
                    />
                    <div className="link-text">
                        https://www.opensource-supporter.com/card/Share?userName
                    </div>
                    <div className="btn-box">
                        <div className="tooltip-text">
                            {copyState ? 'Copied' : 'Copy'}
                        </div>
                        {!copyState ? (
                            <div className="copy-icon">
                                <FontAwesomeIcon
                                    icon={faCopy}
                                    onClick={copyToClipboard}
                                />
                            </div>
                        ) : (
                            <div className="copy-icon">
                                <FontAwesomeIcon icon={faCheck} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
