import { useEffect, useState } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'

import '@/assets/scss/pages/advertisement-page.scss'

export default function AdvertisementPage() {
    const [remainingTime, setRemainingTime] = useState(30)

    function navigateGithub() {
        window.location.href = 'https://github.com'
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setRemainingTime((prev) => {
                if (prev <= 1) {
                    clearInterval(intervalId)
                    navigateGithub()
                    return 0
                }
                return prev - 1
            })
        }, 1000)

        return () => clearInterval(intervalId)
    }, [])

    return (
        <div className="advertisement-page-container">
            <div className="video-container">
                <div className="circle-progressbar">
                    <CircularProgressbar
                        value={remainingTime}
                        maxValue={30}
                        minValue={0}
                        text={`${remainingTime}s`}
                    />
                </div>
            </div>
        </div>
    )
}
