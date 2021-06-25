import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Modal from 'react-modal'
import './styles.css'
import Home from './components/home/home'
import About from './components/about'
import Collab from './components/collab'
import Music from './components/music/music'
import Piano from './components/music/piano'
import Strings from './components/music/strings'
import Vocal from './components/music/vocal'
import Electronic from './components/music/electronic'
import ChamberMisc from './components/music/chamber-misc'

Modal.setAppElement('#root')

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalContent, setModalContent] = useState('modal content')

  function handleModal(){
    if(!modalIsOpen){
      setModalIsOpen(true)
    } else{
      setModalIsOpen(false)
    }
  }

  return (
    <div>
      {/* <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
      <Modal 
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={
          {
            overlay: {
              backgroundColor: 'gray'
            },
            content: {
              color: 'orange'
            }
          }
        }
        >
        <h2>{modalContent}</h2>
        <button onClick={() => setModalIsOpen(false)}>close</button>
      </Modal> */}
      <Router>
        <Route exact path="/" render={Home} />
        <Route exact path="/about" render={About} />
        <Route exact path="/collab" render={Collab} />
        <Route exact path="/music" render={Music} />
        <Route exact path="/music/piano" render={Piano} />
        <Route exact path="/music/Strings" render={Strings} />
        <Route path="/music/vocal" render={() => <Vocal modalContent={modalContent} modalIsOpen={modalIsOpen} handleModal={handleModal}/>}/>
        <Route exact path="/music/electronic" render={Electronic} />
        <Route exact path="/music/chamber-misc" render={ChamberMisc} />
      </Router>
    </div>
  )
}

export default App