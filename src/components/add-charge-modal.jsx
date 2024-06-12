import BaseModal from '@/components/base-modal.jsx'

import '@/assets/scss/components/add-charge-modal.scss'
import { useState } from 'react'

export default function AddChargeModal({ close }) {
    const [amount, setAmount] = useState(0)
    const [selection, setSelection] = useState(0)

    function submit(e) {
        e.preventDefault()
        setAmount(0)
    }

    function onChangePoints(value) {
        setAmount(value)
        setSelection(value)
    }

    return (
        <BaseModal close={close}>
            <div className="add-charge-modal-container">
                <div className="add-charge-modal-header">
                    <div className="title-text">
                        Select the desired amount and pay with PayPal
                    </div>
                </div>
                <form
                    className="add-charge-modal-body"
                    onSubmit={(e) => submit(e)}
                >
                    <div className="content-box">
                        <div className="dollar-option-box">
                            <div
                                className={`dollar-btn ${selection === 5 ? 'active' : ''}`}
                                onClick={() => onChangePoints(5)}
                            >
                                $5
                            </div>
                            <div
                                className={`dollar-btn ${selection === 10 ? 'active' : ''}`}
                                onClick={() => onChangePoints(10)}
                            >
                                $10
                            </div>
                            <div
                                className={`dollar-btn ${selection === 20 ? 'active' : ''}`}
                                onClick={() => onChangePoints(20)}
                            >
                                $20
                            </div>
                            <div
                                className={`dollar-btn ${selection === 50 ? 'active' : ''}`}
                                onClick={() => onChangePoints(50)}
                            >
                                $50
                            </div>
                            <div
                                className={`dollar-btn ${selection === 100 ? 'active' : ''}`}
                                onClick={() => onChangePoints(100)}
                            >
                                $100
                            </div>
                            <div
                                className={`dollar-btn ${selection === 200 ? 'active' : ''}`}
                                onClick={() => onChangePoints(200)}
                            >
                                $200
                            </div>
                        </div>
                    </div>
                    <div className="content-box">
                        <input
                            className="amount-input"
                            type="number"
                            placeholder="Enter the desired amount"
                            min={1}
                            value={amount === 0 ? '' : amount}
                            onChange={(e) => {
                                const value = parseInt(e.target.value, 10)
                                setAmount(isNaN(value) ? 0 : value)
                                setSelection(0)
                            }}
                        />
                    </div>
                    <div className="content-box">
                        <button className="charge-btn" type="submit">
                            charge
                        </button>
                    </div>
                </form>
            </div>
        </BaseModal>
    )
}
