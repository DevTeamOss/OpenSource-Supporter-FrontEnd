import LogoImg from '/logo.svg'

import '@/assets/scss/components/header.scss'

export default function Header() {
    return (
        <div className="header-container">
            <div className="left-section">
                <div className="logo-btn">
                    <img
                        className="logo-img"
                        src={LogoImg}
                        alt="OpenSource Supporter"
                    />
                    <div className="logo-text">OpenSource Supporter</div>
                </div>
            </div>
            <div className="right-section">
                <div className="profile-btn"></div>
            </div>
        </div>
    )
}
