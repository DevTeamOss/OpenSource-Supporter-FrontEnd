import ProfileBox from '@/components/profile-box'
import SupporterCard from '@/components/supporter-card'

export default function ProfileInfoSection() {
    return (
        <div className="profile-info-section-container">
            <div className="content-box">
                <div className="content-title">Profile</div>
                <ProfileBox />
            </div>
            <div className="content-box">
                <div className="content-title">Support Tier</div>
                <SupporterCard />
            </div>
        </div>
    )
}
