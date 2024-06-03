import { useEffect, useState } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import { useUserController } from '@/controllers/index.js'

import '@/assets/scss/pages/advertisement-page.scss'

export default function AdvertisementPage() {
    const userController = useUserController()

    const [remainingTime, setRemainingTime] = useState(30)

    function navigateGithub() {
        console.log(userController.data.username)
        if (userController.data.username === 'guest')
            window.location.href = 'https://github.com'
        else
            window.location.href = `https://github.com/${userController.data.username}`
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
