import ProfileInfoSection from '@/pages/profile-page/profile-info-section'
import ProfileContentSection from '@/pages/profile-page/profile-content-section.jsx'

import '@/assets/scss/pages/profile-page.scss'

export default function ProfilePage() {
    return (
        <div className="profile-page-container">
            <ProfileInfoSection />
            <ProfileContentSection />
        </div>
    )
}
