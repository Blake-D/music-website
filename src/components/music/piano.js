import { Link } from 'react-router-dom'
import Nav from '../nav'

function Piano(props){
    const tracks = props.trackData[0].trackList.map(track => {
        return (
            <li>
                <Link to={`/music/piano/player/${track.id}`}>{track.title}</Link>
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

export default Piano