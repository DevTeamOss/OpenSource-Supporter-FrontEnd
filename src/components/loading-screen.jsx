import Spinner from '@/assets/img/spinner.svg'

import '@/assets/scss/components/loading-screen.scss'

export default function LoadingScreen() {
    return (
        <div className="loading-screen-container">
            <img
                className="loading-screen-spinner"
                src={Spinner}
                alt="spinner"
            />
        </div>
    )
}
