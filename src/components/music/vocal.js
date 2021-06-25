import Nav from '../nav'
import Modal from 'react-modal'

const musicIds = [
    '1H0Z7yH_fMVg4hf0cLDwh8Oo5VuXUGijL',
    '1FAfS9VVeD1HiKBuZ-bKytR9W8-YkCmzW',
    '1ikr3KtRIds5kw0iYhC0rM5zw2170VS7V',
    '1pMxVE-biV1H8Uju-0UEf25rXA2UuOaJw',
    '1j3YLUawKOe57x4s8L5eqGeBBKiKtnlPx',
    '11YaktPcPHyz_ClNm_WfIy7o6E3QKHRgZ',
    '1NKLEsBqNHU7_1vii1xhL4NRsVSwO5p2y',
    '1a7a-g6TJvoNzHkiikhyohH6yx-sRHvTY'
]

function Vocal(props) {
    return (
        <div>
            {/* <button onClick={() => props.handleModal(true)}>Open Modal</button> */}
            <Modal isOpen={props.modalIsOpen} onRequestClose={() => props.handleModal(false)}>
                <audio src="https://docs.google.com/uc?export=download&id=1H0Z7yH_fMVg4hf0cLDwh8Oo5VuXUGijL" controls controlsList="nodownload" />
                <button onClick={() => props.handleModal(false)}>close</button>
            </Modal>
            <Nav />
            <p onClick={() => props.handleModal(true)}>Victims of the Rooster</p>
            <audio src="https://docs.google.com/uc?export=download&id=1H0Z7yH_fMVg4hf0cLDwh8Oo5VuXUGijL" controls controlsList="nodownload" />
            <p>They</p>
            <audio src="https://docs.google.com/uc?export=download&id=1FAfS9VVeD1HiKBuZ-bKytR9W8-YkCmzW" controls controlsList="nodownload" />
            <p>Six Vowels</p>
            <audio src="https://docs.google.com/uc?export=download&id=1ikr3KtRIds5kw0iYhC0rM5zw2170VS7V" controls controlsList="nodownload" />
            <p>Second Draft</p>
            <audio src="https://docs.google.com/uc?export=download&id=1pMxVE-biV1H8Uju-0UEf25rXA2UuOaJw" controls controlsList="nodownload" />
            <p>Of What Is</p>
            <audio src="https://docs.google.com/uc?export=download&id=1j3YLUawKOe57x4s8L5eqGeBBKiKtnlPx" controls controlsList="nodownload" />
            <p>Near'r</p>
            <audio src="https://docs.google.com/uc?export=download&id=11YaktPcPHyz_ClNm_WfIy7o6E3QKHRgZ" controls controlsList="nodownload" />
            <p>Mended</p>
            <audio src="https://docs.google.com/uc?export=download&id=1NKLEsBqNHU7_1vii1xhL4NRsVSwO5p2y" controls controlsList="nodownload" />
            <p>Binaural Octet for Solo Voice</p>
            <audio src="https://docs.google.com/uc?export=download&id=1a7a-g6TJvoNzHkiikhyohH6yx-sRHvTY" controls controlsList="nodownload" />
        </div>
    )
}

export default Vocal