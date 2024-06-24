import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useSupporterInfo } from '@/hooks/use-supporter-info.js'
import SupporterCard from '@/components/supporter-card'

import '@/assets/scss/pages/supporter-card-page.scss'

export default function SupporterCardPage() {
    const { username } = useParams()
    const supporterInfo = useSupporterInfo()

    useEffect(() => {
        if (!username) {
            return
        }

        supporterInfo.getData(username).then()
    }, [username])

    return (
        <div className="supporter-card-page-container">
            <div className="supporter-card-box">
                <SupporterCard data={supporterInfo.data} />
            </div>
        </div>
    )
}
