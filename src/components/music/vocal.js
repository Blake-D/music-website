import Nav from '../nav'
import { Link } from 'react-router-dom'
// import Modal from 'react-modal'




function Vocal(props){
    return (
        <div>
            {/* <button onClick={() => props.handleModal(true)}>Open Modal</button> */}
            {/* <Modal isOpen={props.modalIsOpen} onRequestClose={() => props.handleModal(false)}>
                <audio src="https://docs.google.com/uc?export=download&id=1H0Z7yH_fMVg4hf0cLDwh8Oo5VuXUGijL" controls controlsList="nodownload" />
                <button onClick={() => props.handleModal(false)}>close</button>
            </Modal> */}
            <Nav />
            {/* <p onClick={() => props.handleModal(true)}>Victims of the Rooster</p>
            <audio src="https://docs.google.com/uc?export=download&id=1H0Z7yH_fMVg4hf0cLDwh8Oo5VuXUGijL" controls controlsList="nodownload" /> */}
            <Link to="/music/player" id="https://docs.google.com/uc?export=download&id=1H0Z7yH_fMVg4hf0cLDwh8Oo5VuXUGijL" onClick={(e) => props.handlePlayerInfo(e)}>Victims of the Rooster</Link><br></br>
            <Link to="/music/player" id="https://docs.google.com/uc?export=download&id=1FAfS9VVeD1HiKBuZ-bKytR9W8-YkCmzW" onClick={(e) => props.handlePlayerInfo(e)}>They</Link><br></br>
            <Link to="/music/player" id="https://docs.google.com/uc?export=download&id=1ikr3KtRIds5kw0iYhC0rM5zw2170VS7V" onClick={(e) => props.handlePlayerInfo(e)}>Six Vowels</Link><br></br>
            <Link to="/music/player" id="https://docs.google.com/uc?export=download&id=1pMxVE-biV1H8Uju-0UEf25rXA2UuOaJw" onClick={(e) => props.handlePlayerInfo(e)}>Second Draft</Link><br></br>
            <Link to="/music/player" id="https://docs.google.com/uc?export=download&id=1j3YLUawKOe57x4s8L5eqGeBBKiKtnlPx" onClick={(e) => props.handlePlayerInfo(e)}>Of What Is</Link><br></br>
            <Link to="/music/player" id="https://docs.google.com/uc?export=download&id=11YaktPcPHyz_ClNm_WfIy7o6E3QKHRgZ" onClick={(e) => props.handlePlayerInfo(e)}>Near'r</Link><br></br>
            <Link to="/music/player" id="https://docs.google.com/uc?export=download&id=1NKLEsBqNHU7_1vii1xhL4NRsVSwO5p2y" onClick={(e) => props.handlePlayerInfo(e)}>Mended</Link><br></br>
            <Link to="/music/player" id="https://docs.google.com/uc?export=download&id=1a7a-g6TJvoNzHkiikhyohH6yx-sRHvTY" onClick={(e) => props.handlePlayerInfo(e)}>Binaural Octet for Solo Voice</Link><br></br>

            <p>Binaural Octet for Solo Voice</p>
            <audio src="https://docs.google.com/uc?export=download&id=1a7a-g6TJvoNzHkiikhyohH6yx-sRHvTY" controls controlsList="nodownload" />
        </div>
    )
}

export default Vocal