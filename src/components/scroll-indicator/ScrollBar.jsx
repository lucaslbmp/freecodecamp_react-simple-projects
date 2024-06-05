import './ScrollBar.css'

export default function ScrollBar({percentage}){
    return(
        <div className="scroll-progress-container">
            <div className="current-progress-bar" style={{width: `${percentage}%`}}></div>
        </div>
    )
}