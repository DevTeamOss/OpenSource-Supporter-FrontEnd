import { useEffect } from 'react'
import GitHubCalendar from 'react-github-calendar'

import ProfileBox from '@/components/profile-box'
import SupporterCard from '@/components/supporter-card'
import { useUserController } from '@/controllers/index.js'
import { useSupporterInfo } from '@/hooks/use-supporter-info.js'

export default function AsideLeft() {
    const userController = useUserController()
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
        supporterInfo.getData(userController.data.username).then()
    }, [userController.data])

    return (
        <div className="aside-left-container">
            <div className="content-box">
                <div className="content-title">Profile</div>
                <ProfileBox data={userController.data} />
                <div className="divide-line large-space" />
                <div className="content-title">Support Tier</div>
                <div className="supporter-card-box">
                    <SupporterCard data={supporterInfo.data} />
                </div>
                <div className="divide-line large-space" />
                <div className="content-title">Contributions</div>
                <div className="github-calendar">
                    <GitHubCalendar
                        username={userController.data.username}
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
