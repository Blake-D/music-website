import Nav from '../nav'

function Player(props){
    return(
        <div>
            <Nav />
            <p>{props.title}</p>
            <audio src={props.url} controls controlsList="nodownload" />
        </div>
    )
}

export default Player