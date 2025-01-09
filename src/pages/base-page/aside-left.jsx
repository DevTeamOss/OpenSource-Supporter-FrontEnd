import { useEffect } from 'react'
import GitHubCalendar from 'react-github-calendar'

import ProfileBox from '@/components/profile-box'
import SupporterCard from '@/components/supporter-card'
import { useUser } from '@/view-models/index.js'
import { useSupporterInfo } from '@/view-models/use-supporter-info.js'

export default function AsideLeft() {
    const userViewModel = useUser()
    const supporterInfo = useSupporterInfo()

    const selectContributionsOfDays = (contributions) => {
        const count = 210
        const sortedContributions = contributions.sort(
            (a, b) => new Date(a.date) - new Date(b.date),
        )
        const selectedContributions = sortedContributions.slice(-count)
        return selectedContributions
    }

    useEffect(() => {
        supporterInfo.getData(userViewModel.data.username).then()
    }, [userViewModel.data])

    return (
        <div className="aside-left-container">
            <div className="content-box">
                <div className="content-title">Profile</div>
                <ProfileBox data={userViewModel.data} />
                <div className="divide-line large-space" />
                <div className="content-title">Support Tier</div>
                <div className="supporter-card-box">
                    <SupporterCard data={supporterInfo.data} />
                </div>
                <div className="divide-line large-space" />
                <div className="content-title">Contributions</div>
                <div className="github-calendar">
                    <GitHubCalendar
                        username={userViewModel.data.username}
                        colorScheme="dark"
                        blockSize={7}
                        blockMargin={2}
                        fontSize={12}
                        transformData={selectContributionsOfDays}
                    />
                </div>
            </div>
        </div>
    )
}
