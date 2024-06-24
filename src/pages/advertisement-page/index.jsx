import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CircularProgressbar } from 'react-circular-progressbar'
import ReactPlayer from 'react-player'

import { useAdvertisement } from '@/hooks/use-advertisement.js'

import '@/assets/scss/pages/advertisement-page.scss'

export default function AdvertisementPage() {
    const { username } = useParams()
    const advertisement = useAdvertisement()
    const [remainingTime, setRemainingTime] = useState(99)
    const [isLoading, setIsLoading] = useState(false)

    const videoConfig = {
        youtube: {
            playerVars: {
                controls: 0,
                rel: 0,
                disablekb: 1,
                mute: 1,
                fs: 0,
            },
        },
    }

    function startTimer() {
        setRemainingTime(advertisement.data.videoLength)
        const intervalId = setInterval(() => {
            setRemainingTime((prev) => {
                if (prev <= 1) {
                    clearInterval(intervalId)
                    complete().then()
                    return 0
                }
                return prev - 1
            })
        }, 1000)

        return () => clearInterval(intervalId)
    }

    async function complete() {
        if (isLoading) {
            return
        }

        setIsLoading(true)
        await advertisement.complete(username)
        window.location.href = `https://github.com/${username}`
    }

    useEffect(() => {
        advertisement.getData().then()
    }, [])

    useEffect(() => {
        if (remainingTime === 0) {
            complete().then()
        }
    }, [remainingTime])

    return (
        <div className="advertisement-page-container">
            {advertisement.data && (
                <div className="video-container">
                    <div className="video-player">
                        <ReactPlayer
                            url={advertisement.data.url}
                            config={videoConfig}
                            onPlay={startTimer}
                            onEnded={complete}
                            muted
                            playing
                            width="100%"
                            height="100%"
                        />
                    </div>
                    <div className="circular-progress-bar">
                        <CircularProgressbar
                            value={remainingTime}
                            maxValue={advertisement.data.videoLength}
                            minValue={0}
                            text={`${remainingTime}s`}
                        />
                    </div>
                </div>
            )}
            <div className={`blocking-screen ${isLoading && 'black'}`} />
        </div>
    )
}
