import '@/assets/scss/components/tag-chip.scss'

export default function TagChip({ children, onClick }) {
    return <div className="tag-chip-container" onClick={onClick} >{children}</div>
}
