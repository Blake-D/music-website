import { Link } from 'react-router-dom'
import Nav from '../nav'

function ChamberMisc(props){
    const tracks = props.trackData[3].trackList.map(track => {
        return (
            <li>
                <Link to={`/music/chamber/player/${track.id}`}>{track.title}</Link>
            </li>
        )
    })
    return(
        <div>
            <Nav />
            <ul>{tracks}</ul>
        </div>
    )
}

export default ChamberMisc