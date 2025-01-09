import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { useProfileRepoList, useUser } from '@/view-models/index.js'
import ProfileInfoSection from '@/pages/profile-page/profile-info-section'
import ProfileContentSection from '@/pages/profile-page/profile-content-section.jsx'
import LoadingScreen from '@/components/loading-screen'

import '@/assets/scss/pages/profile-page.scss'

export default function ProfilePage() {
    const userViewModel = useUser()
    const profileViewModel = useProfile()
    const { username } = useParams()
    const [isLoading, setIsLoading] = useState(false)

    async function init() {
        setIsLoading(true)
        await profileViewModel.getData({ username })
        setIsLoading(false)
    }

    useEffect(() => {
        init().then()
    }, [username, userViewModel.data])

    return (
        <div className="profile-page-container">
            <ProfileInfoSection />
            <ProfileContentSection />
            {isLoading && <LoadingScreen />}
        </div>
    )
}
