import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons'
import { faRectangleAd } from '@fortawesome/free-solid-svg-icons'

import GithubImg from '@/assets/img/github.png'
import PaypalImg from '@/assets/img/paypal.png'

export default function PointsSummaryBox({
    method,
    points,
    profitRate,
    indicator,
}) {
    return (
        <div className="point-summary-box-container">
            <div className="title-section">
                <div className="logo-img">
                    {method === 'Github' ? (
                        <img
                            className="github-logo-img"
                            src={GithubImg}
                            alt="Github Logo Image"
                        />
                    ) : method === 'Paypal' ? (
                        <img
                            className="paypal-logo-img"
                            src={PaypalImg}
                            alt="Paypal Logo Image"
                        />
                    ) : method === 'Ads' ? (
                        <FontAwesomeIcon
                            icon={faRectangleAd}
                            className="sponsor-icon"
                        />
                    ) : (
                        <FontAwesomeIcon
                            icon={faHandHoldingDollar}
                            className="ads-icon"
                        />
                    )}
                </div>
                <div className="type-box">
                    <div className={`point-types ${method}`}>
                        {method === 'Github' ? 'Spent Points' : 'Earned Points'}
                    </div>
                    <div className="type-description">
                        {method === 'Github'
                            ? 'Supporting by Repository'
                            : `Gained By ${method}`}
                    </div>
                </div>
            </div>

            <div className="profit-rate-section">
                <div className="left-box">
                    <div className="points-text">{points}P</div>
                    <div className="last-month-text">last month</div>
                </div>
                <div className="right-box">
                    <div className={`profit-rate-box ${indicator}`}>
                        {indicator === 'up'
                            ? '↑'
                            : indicator === 'unchanged'
                              ? `-${'\u00A0\u00A0'}`
                              : '↓'}{' '}
                        {profitRate}%
                    </div>
                </div>
            </div>
        </div>
    )
}
