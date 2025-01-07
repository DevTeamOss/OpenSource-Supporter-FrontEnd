import { useState } from 'react'

import { usePoint } from '@/view-models/index.js'
import BaseModal from '@/components/base-modal.jsx'

import Spinner from '@/assets/img/spinner.svg'

const amounts = [5, 10, 20, 50, 100, 200]

export default function ChargeModal({ close, refresh }) {
    const pointController = usePoint()

    const [amount, setAmount] = useState(0)
    const [selection, setSelection] = useState(0)
    const [isLoading, setIsLoading] = useState(false)

    async function submit(e) {
        e.preventDefault()
        if (amount <= 0) {
            return
        }

        setIsLoading(true)
        const result = await pointController.chargePoint({ amount })
        if (result) {
            await refresh()
            close()
        }
        setIsLoading(false)
    }

    function onChangePoints(value) {
        setAmount(value)
        setSelection(value)
    }

    return (
        <BaseModal close={close}>
            <div className="charge-modal-container">
                <div className="charge-modal-header">
                    <div className="title-text">
                        Select the desired amount and pay with PayPal
                    </div>
                </div>
                <form className="charge-modal-body" onSubmit={(e) => submit(e)}>
                    <div className="content-box">
                        <div className="dollar-option-box">
                            {amounts.map((v) => (
                                <div
                                    className={`dollar-btn ${selection === v ? 'active' : ''}`}
                                    onClick={() => onChangePoints(v)}
                                    key={v}
                                >
                                    ${v}
                                </div>
                            ))}
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
                            {isLoading ? (
                                <img
                                    className="spinner-img"
                                    src={Spinner}
                                    alt="loading"
                                />
                            ) : (
                                'charge'
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </BaseModal>
    )
}
