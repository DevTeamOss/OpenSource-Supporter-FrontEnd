import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import GitHubCalendar from 'react-github-calendar'

import { useProfileController, useUserController } from '@/controllers/index.js'
import { useSupporterInfo } from '@/hooks/use-supporter-info.js'
import { useModal } from '@/hooks/use-modal.js'
import ProfileBox from '@/components/profile-box'
import SupporterCard from '@/components/supporter-card'
import ConfirmModal from '@/components/confirm-modal'

export default function ProfileInfoSection() {
    const navigate = useNavigate()
    const { username } = useParams()
    const userController = useUserController()
    const profileController = useProfileController()
    const supporterInfo = useSupporterInfo(username)
    const deleteAccountModal = useModal()

    const currentYear = new Date().getFullYear()
    const [selectedYear, setSelectedYear] = useState(currentYear)

    function changeYear(year) {
        setSelectedYear(year)
    }

    const [calendarData, setCalendarData] = useState({})
    const [hasData, setHasData] = useState(1)

    async function withdraw() {
        const result = await userController.withdraw()
        if (!result) {
            return
        }
        alert('Your account has been deleted')
        navigate('/')
    }

    useEffect(() => {
        if (calendarData.length > 0) {
            setHasData(1)
        } else {
            setHasData(0)
        }
    }, [calendarData])

    useEffect(() => {
        supporterInfo.getData(profileController.data.username).then()
    }, [profileController.data.username])

    useEffect(() => {
        if (profileController.data.username !== userController.data.username) {
            return
        }

        supporterInfo.getData(profileController.data.username).then()
    }, [userController.data])

    return (
        <div className="profile-info-section-container">
            <div className="content-box">
                <div className="content-title">Profile</div>
                <ProfileBox data={profileController.data} />
            </div>
            <div className="content-box">
                <div className="content-title">Support Tier</div>
                <SupporterCard data={supporterInfo.data} />
            </div>
            <div className="content-box">
                <div className="content-title">Contributions</div>
                <div className="github-calendar-container">
                    <div className="github-calendar">
                        <GitHubCalendar
                            username={username}
                            colorScheme="dark"
                            blockSize={9}
                            blockMargin={2}
                            fontSize={10}
                            year={selectedYear}
                            throwOnError={false}
                            transformData={(days) => {
                                setCalendarData(days)
                                return days
                            }}
                        />
                        {hasData === 0 && (
                            <div className="no-data-description">
                                Not signed up on GitHub yet.
                            </div>
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
                {userController.data.username === username && (
                    <div
                        className="account-delete-btn"
                        onClick={deleteAccountModal.open}
                    >
                        Delete Account
                    </div>
                )}
                {deleteAccountModal.visible && (
                    <ConfirmModal
                        close={deleteAccountModal.close}
                        next={withdraw}
                    >
                        Are you sure you want to delete your account?
                    </ConfirmModal>
                )}
            </div>
        </div>
    )
}
