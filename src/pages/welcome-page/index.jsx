import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import LogoImg from '/logo.svg'

import '@/assets/scss/pages/welcome-page.scss'

export default function WelcomePage() {
    const navigate = useNavigate()

    return (
        <div className="welcome-page-container">
            <div className="logo-box">
                <img
                    className="logo-img"
                    src={LogoImg}
                    alt="OpenSource Supporter"
                />
                <div className="logo-text">OpenSource</div>
                <div className="logo-text">Supporter</div>
            </div>
            <div className="btn-box">
                <div className="sign-in-btn" onClick={() => navigate('/main')}>
                    <FontAwesomeIcon className="github-logo" icon={faGithub} />
                    <div className="btn-text">Sign in With GitHub</div>
                </div>
                <div className="text-btn" onClick={() => navigate('/main')}>
                    아니요, 계정없이 이용할래요.
                </div>
            </div>
        </div>
    )
}
