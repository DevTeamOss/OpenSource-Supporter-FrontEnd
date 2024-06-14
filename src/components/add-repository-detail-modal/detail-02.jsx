import { useState } from 'react'

export default function Detail02({ close }) {
    const [points, setPoints] = useState(0)
    const [selection, setSelection] = useState(0)

    function submit(e) {
        e.preventDefault()

        if (42203 < points) {
            alert('“You have exceeded your available points.”')
            return
        }

        setPoints(0)
        close()
    }

    function onChangePoints(value) {
        setPoints(value)
        setSelection(value)
    }

    return (
        <div className="detail02-container">
            <div className="detail02-header">
                <div className="title-text">
                    Select the desired points and sponsor to Repository
                </div>
                <div className="description-text">
                    Available Points: <span className="points">42203</span>P
                </div>
            </div>
            <form className="detail02-body" onSubmit={(e) => submit(e)}>
                <div className="content-box">
                    <div className="points-option-box">
                        <div
                            className={`points-btn ${selection === 5 ? 'active' : ''}`}
                            onClick={() => onChangePoints(5)}
                        >
                            5P
                        </div>
                        <div
                            className={`points-btn ${selection === 10 ? 'active' : ''}`}
                            onClick={() => onChangePoints(10)}
                        >
                            10P
                        </div>
                        <div
                            className={`points-btn ${selection === 20 ? 'active' : ''}`}
                            onClick={() => onChangePoints(20)}
                        >
                            20P
                        </div>
                        <div
                            className={`points-btn ${selection === 50 ? 'active' : ''}`}
                            onClick={() => onChangePoints(50)}
                        >
                            50P
                        </div>
                        <div
                            className={`points-btn ${selection === 100 ? 'active' : ''}`}
                            onClick={() => onChangePoints(100)}
                        >
                            100P
                        </div>
                        <div
                            className={`points-btn ${selection === 200 ? 'active' : ''}`}
                            onClick={() => onChangePoints(200)}
                        >
                            200P
                        </div>
                    </div>
                </div>
                <div className="content-box">
                    <input
                        className="points-input"
                        type="number"
                        placeholder="Enter the desired amount"
                        min={1}
                        value={points === 0 ? '' : points}
                        onChange={(e) => {
                            const value = parseInt(e.target.value, 10)
                            setPoints(isNaN(value) ? 0 : value)
                            setSelection(0)
                        }}
                    />
                </div>
                <div className="content-box">
                    <button className="sponsor-btn" type="submit">
                        Sponsor
                    </button>
                </div>
            </form>
        </div>
    )
}
