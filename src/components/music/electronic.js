import { Link } from 'react-router-dom'
import Nav from '../nav'

function Electronic(props){
    const tracks = props.trackData[4].trackList.map(track => {
        return (
            <li>
                <Link to={`/music/electronic/player/${track.id}`}>{track.title}</Link>
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

export default Electronic