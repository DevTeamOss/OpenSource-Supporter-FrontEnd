export default function EarnedPointBox({
    date,
    points,
    description,
    status,
    background,
}) {
    return (
        <div
            className="earned-point-box-container"
            style={{
                background:
                    background === 'aside-black' ? '#020408' : '#161B22',
            }}
        >
            <div className="date-box">{date}</div>
            <div className="points-box">+{points} P</div>
            <div className="method-box">{description}</div>
            <div className={`status-box ${status}`}>{status}</div>
        </div>
    )
}
