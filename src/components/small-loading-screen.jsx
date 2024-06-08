import Spinner from '@/assets/img/spinner.svg'

import '@/assets/scss/components/small-loading-screen.scss'

export default function SmallLoadingScreen() {
    return (
        <div className="small-loading-screen-container">
            <img
                className="loading-screen-spinner"
                src={Spinner}
                alt="spinner"
            />
        </div>
    )
}
