export default function SpentPointBox({
    date,
    points,
    description,
    status,
    background,
}) {
    return (
        <div
            className="spent-point-box-container"
            style={{
                background:
                    background === 'aside-black' ? '#020408' : '#161B22',
            }}
        >
            <div className="date-box">{date}</div>
            <div className="points-box">{points} P</div>
            <div className="info-box">{description}</div>
            <div className={`status-box ${status}`}>{status}</div>
        </div>
    )
}
