import { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import { useUserController } from '@/controllers/index.js'
import BaseModal from '@/components/base-modal.jsx'

export default function WithdrawCashModal({ close }) {
    const userController = useUserController()

    const [points, setPoints] = useState(0)
    const [selection, setSelection] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const [account, setAccount] = useState('')

    function submit(e) {
        e.preventDefault()

        if (userController.data.remainingPoint < points) {
            alert('“You have exceeded your available points.”')
            return
        }

        setPoints(0)
    }

    function onChangePoints(value) {
        setPoints(value)
        setSelection(value)
    }

    function onClickAccountOption() {
        setIsOpen((prev) => !prev)
    }

    return (
        <BaseModal close={close}>
            <div className="withdraw-cash-modal-container">
                <div className="withdraw-cash-modal-header">
                    <div className="title-text">
                        Select the desired points and withdraw to your account
                    </div>
                    <div className="description-text">
                        Available Points:{' '}
                        <span className="points">
                            {userController.data.remainingPoint}
                        </span>
                        P
                    </div>
                </div>
                <form
                    className="withdraw-cash-modal-body"
                    onSubmit={(e) => submit(e)}
                >
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
                            className="amount-input"
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
                        <div
                            className="select-account-btn"
                            onClick={onClickAccountOption}
                        >
                            {account ? account : 'Select Your Account'}
                            <span className="arrow-btn">
                                <FontAwesomeIcon icon={faAngleDown} />
                            </span>
                            {isOpen && (
                                <div className="option-box">
                                    <div
                                        className="option"
                                        onClick={(e) =>
                                            setAccount(e.target.innerText)
                                        }
                                    >
                                        No account available
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="content-box">
                        <button className="charge-btn" type="submit">
                            Withdraw
                        </button>
                    </div>
                </form>
            </div>
        </BaseModal>
    )
}
