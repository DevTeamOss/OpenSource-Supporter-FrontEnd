import ProfileBox from '@/components/profile-box'
import SupporterCard from '@/components/supporter-card'

export default function AsideLeft() {
    return (
        <div className="aside-left-container">
            <div className="content-box">
                <div className="content-title">Profile</div>
                <ProfileBox />
                <div className="divide-line large-space" />
                <div className="content-title">Support Tier</div>
                <div className="supporter-card-box">
                    <SupporterCard />
                </div>
            </div>
        </div>
    )
}
