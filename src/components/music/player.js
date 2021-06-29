import Nav from '../nav'

function Player(props){
    return(
        <div>
            <Nav />
            <p>{props.playerInfo.title}</p>
            <audio src={props.playerInfo.url} controls controlsList="nodownload" />
        </div>
    )
}

export default Player