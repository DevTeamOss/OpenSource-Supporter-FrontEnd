import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { useProfileController } from '@/controllers/index.js'
import ProfileInfoSection from '@/pages/profile-page/profile-info-section'
import ProfileContentSection from '@/pages/profile-page/profile-content-section.jsx'
import LoadingScreen from '@/components/loading-screen'

import '@/assets/scss/pages/profile-page.scss'
import { useSupporterInfo } from '@/hooks/use-supporter-info.js'

export default function ProfilePage() {
    const profileController = useProfileController()
    const { username } = useParams()
    const [isLoading, setIsLoading] = useState(false)

    async function init() {
        setIsLoading(true)
        await profileController.getData({ username })
        setIsLoading(false)
    }

    useEffect(() => {
        init().then()
    }, [username])

    return (
        <div className="profile-page-container">
            <ProfileInfoSection />
            <ProfileContentSection />
            {isLoading && <LoadingScreen />}
        </div>
    )
}
