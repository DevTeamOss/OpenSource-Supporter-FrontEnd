import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useProfileController } from '@/controllers/index.js'
import ProfileInfoSection from '@/pages/profile-page/profile-info-section'
import ProfileContentSection from '@/pages/profile-page/profile-content-section.jsx'

import '@/assets/scss/pages/profile-page.scss'

export default function ProfilePage() {
    const profileController = useProfileController()
    const { username } = useParams()

    useEffect(() => {
        profileController.getData({ username }).then()
    }, [])

    return (
        <div className="profile-page-container">
            <ProfileInfoSection />
            <ProfileContentSection />
        </div>
    )
}
