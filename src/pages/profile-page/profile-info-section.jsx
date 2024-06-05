import { useState } from 'react'

import { useProfileController, useUserController } from '@/controllers/index.js'
import ProfileBox from '@/components/profile-box'
import SupporterCard from '@/components/supporter-card'
import GitHubCalendar from 'react-github-calendar'

export default function ProfileInfoSection() {
    const userController = useUserController()
    const profileController = useProfileController()

    const currentYear = new Date().getFullYear()
    const [selectedYear, setSelectedYear] = useState(currentYear)

    function changeYear(year) {
        setSelectedYear(year)
    }

    return (
        <div className="profile-info-section-container">
            <div className="content-box">
                <div className="content-title">Profile</div>
                <ProfileBox data={profileController.data} />
            </div>
            <div className="content-box">
                <div className="content-title">Support Tier</div>
                <SupporterCard />
            </div>
            <div className="content-box">
                <div className="content-title">Contributions</div>
                <div className="github-calendar-container">
                    <div className="github-calendar">
                        {profileController.data.username && (
                            <GitHubCalendar
                                username={profileController.data.username}
                                colorScheme="dark"
                                blockSize={10}
                                blockMargin={4}
                                fontSize={10}
                                year={selectedYear}
                                throwOnError={false}
                                errorMessage="Not signed up on GitHub yet."
                            />
                        )}
                    </div>
                    <div className="year-btn-box">
                        <div
                            className={`year-btn ${selectedYear === currentYear ? 'active' : ''}`}
                            onClick={() => changeYear(currentYear)}
                        >
                            {currentYear}
                        </div>
                        <div
                            className={`year-btn ${selectedYear === currentYear - 1 ? 'active' : ''}`}
                            onClick={() => changeYear(currentYear - 1)}
                        >
                            {currentYear - 1}
                        </div>
                        <div
                            className={`year-btn ${selectedYear === currentYear - 2 ? 'active' : ''}`}
                            onClick={() => changeYear(currentYear - 2)}
                        >
                            {currentYear - 2}
                        </div>
                        <div
                            className={`year-btn ${selectedYear === currentYear - 3 ? 'active' : ''}`}
                            onClick={() => changeYear(currentYear - 3)}
                        >
                            {currentYear - 3}
                        </div>
                        <div
                            className={`year-btn ${selectedYear === currentYear - 4 ? 'active' : ''}`}
                            onClick={() => changeYear(currentYear - 4)}
                        >
                            {currentYear - 4}
                        </div>
                    </div>
                </div>
                {userController.data.username ===
                    profileController.data.username && (
                    <div className="account-delete-btn">Delete Account</div>
                )}
            </div>
        </div>
    )
}
