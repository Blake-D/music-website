function Player(props){
    console.log(props.playerUrl)
    return(
        <div>
            <p>Victims of the Rooster</p>
            <audio src={props.playerUrl} controls controlsList="nodownload" />
        </div>
    )
}

export default Player