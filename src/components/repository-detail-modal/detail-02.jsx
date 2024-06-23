import { useState } from 'react'

import {
    useRepoDetailController,
    useUserController,
} from '@/controllers/index.js'

import Spinner from '@/assets/img/spinner.svg'

const amounts = [5, 10, 20, 50, 100, 200]

export default function Detail02({ close }) {
    const userController = useUserController()
    const repoDetailController = useRepoDetailController()

    const [points, setPoints] = useState(0)
    const [selection, setSelection] = useState(0)
    const [isLoading, setIsLoading] = useState(false)

    async function submit(e) {
        e.preventDefault()

        if (isLoading) {
            return
        }
        if (points <= 0) {
            return
        }
        if (userController.data.remainingPoint < points) {
            alert('“You have exceeded your available points.”')
            return
        }

        setIsLoading(true)
        await repoDetailController.support(points)
        await userController.refresh()
        setIsLoading(false)

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
                    Available Points:{' '}
                    <span className="points">
                        {userController.data.remainingPoint}
                    </span>
                    P
                </div>
            </div>
            <form className="detail02-body" onSubmit={(e) => submit(e)}>
                <div className="content-box">
                    <div className="points-option-box">
                        {amounts.map((v) => (
                            <div
                                className={`points-btn ${selection === v ? 'active' : ''}`}
                                onClick={() => onChangePoints(v)}
                                key={v}
                            >
                                {v}P
                            </div>
                        ))}
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
                        {isLoading ? (
                            <img
                                className="btn-spinner"
                                src={Spinner}
                                alt="loading"
                            />
                        ) : (
                            'Sponsor'
                        )}
                    </button>
                </div>
            </form>
        </div>
    )
}
