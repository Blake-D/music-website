function Player(props){
    return(
        <div>
            <p>{props.playerInfo.title}</p>
            <audio src={props.playerInfo.url} controls controlsList="nodownload" />
        </div>
    )
}

export default Player