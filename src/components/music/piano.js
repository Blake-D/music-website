import React from 'react'
import Nav from '../nav'

function Piano(props){
    console.log(props.trackData[0].trackList)
    const tracks = props.trackData[0].trackList.map(track => {
        return <li>{track.title}</li>
    })
    return(
        <div>
            <ul>{tracks}</ul>
        </div>
        // <div>
        //     <Nav />
        //     <p>We Grant Thee Our Bodies amidst Spiritual Decline</p>
        //     <audio src="https://docs.google.com/uc?export=open&id=1eqesg77hkTl06YDoLfveRNmlAQH7PIlt" controls controlsList="nodownload"/>
        //     <p>Two Chromatic Miniatures</p>
        //     <audio src="https://docs.google.com/uc?export=download&id=1KFPnvgs-rnu0UYIxpgi8aXsJZCwK5Bdk" controls controlsList="nodownload"/>
        //     <p>The Conqueror Snail (four hands)</p>
        //     <audio src="https://docs.google.com/uc?export=download&id=1N3FVE310B7B0tWFkVo1wP1yIK3m5WTIv" controls controlsList="nodownload"/>
        //     <p>Microgressive Isotopic Fractionations/Prolonged Exposure</p>
        //     <audio src="https://docs.google.com/uc?export=download&id=1HKSivNE8mZMOD2D9tB0Q0zys-0M-5kXt" controls controlsList="nodownload"/>
        //     <p>Matrixial Decomposition</p>
        //     <audio src="https://docs.google.com/uc?export=download&id=1kKELTqbpk6FIpH8bJzn6tO7zLq3qfErN" controls controlsList="nodownload"/>
        //     <p>Lagomorphic Pronunciation (for four pianos)</p>
        //     <audio src="https://docs.google.com/uc?export=download&id=1r6D7lWtxgwJ85KOIUioxGUxll7_Ydka5" controls controlsList="nodownload"/>
        //     <p>Houndstooth (for four pianos)</p>
        //     <audio src="https://docs.google.com/uc?export=download&id=1uAVjHCq_OOlwAN9GU3TgJlO3xaqTM2vg" controls controlsList="nodownload"/>
        //     <p>Fugue</p>
        //     <audio src="https://docs.google.com/uc?export=download&id=1a57SXJSjWxbCS7JdbLDm9IKPz8yPqev2" controls controlsList="nodownload"/>
        //     <p>Eleven Etudes</p>
        //     <audio src="https://docs.google.com/uc?export=download&id=12ybz68TnpsBRZ8mpv3oyzLUCJK92gLtG" controls controlsList="nodownload"/>
        //     <p>Dirge</p>
        //     <audio src="https://docs.google.com/uc?export=download&id=1P66PgzzBU2_-4Tt1KLd9AGKzjY1Vf1eV" controls controlsList="nodownload"/>
        //     <p>[having to do with] Limbed Creatures in a Tidepool (four hands)</p>
        //     <audio src="https://docs.google.com/uc?export=download&id=1h1GFAYNOmxqck_ztZwR4NRBtHbkyWcmf" controls controlsList="nodownload"/>
        // </div>
    )
}

export default Piano