import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { GITHUB_AUTH_URL } from '@/constants/config.js'

import LogoImg from '@/assets/img/logo.svg'
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
                <a className="sign-in-btn" href={GITHUB_AUTH_URL}>
                    <FontAwesomeIcon className="github-logo" icon={faGithub} />
                    <div className="btn-text">Sign in With GitHub</div>
                </a>
                <div className="text-btn" onClick={() => navigate('/main')}>
                    No, I want to use without an account.
                </div>
            </div>
        </div>
    )
}
