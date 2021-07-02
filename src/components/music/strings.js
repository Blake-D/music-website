import { Link } from 'react-router-dom'
import Nav from '../nav'

function Strings(props){
    const tracks = props.trackData[1].trackList.map(track => {
        return (
            <li>
                <Link to={`/music/strings/player/${track.id}`}>{track.title}</Link>
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

export default Strings