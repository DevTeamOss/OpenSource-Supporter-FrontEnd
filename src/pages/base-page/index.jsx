import AsideLeft from '@/pages/base-page/aside-left.jsx'
import AsideRight from '@/pages/base-page/aside-right.jsx'

import '@/assets/scss/pages/base-page.scss'

export default function BasePage({ children }) {
    return (
        <div className="base-page-container">
            <div className="left-section">
                <AsideLeft />
            </div>
            <div className="center-section">{children}</div>
            <div className="right-section">
                <AsideRight />
            </div>
        </div>
    )
}
