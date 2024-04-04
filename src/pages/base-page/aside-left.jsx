import ProfileBox from '@/components/profile-box'
import SupporterCard from '@/components/supporter-card'

export default function AsideLeft() {
    return (
        <div className="aside-left-container">
            <div className="content-box">
                <div className="content-title">Profile</div>
                <ProfileBox />
                <div className="divide-line" />
                <div className="content-title">Support Tier</div>
                <SupporterCard />
            </div>
        </div>
    )
}
