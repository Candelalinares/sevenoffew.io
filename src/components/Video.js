import React from 'react'
import './video.css'

import sofVideo from '../assets/secuencia01.mp4'

import { FaFacebook, FaInstagram, FaTwitter, FaDiscord, FaYoutube } from 'react-icons/fa'


const Video = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={sofVideo} type='video/mp4' />
            </video>

            <div className='content'>
                <h1>WELCOME TO THE NEW WORLD</h1>
                <div>
                    <a href='https://www.facebook.com/Seven-of-Few-107817825163173' target='_blank' rel="noreferrer"><FaFacebook size={28} style={{ color: '#ffffff', marginRight: '1rem', marginTop: '2rem' }} onMouseOver={({ target }) => target.style.color = "#941686"} onMouseOut={({ target }) => target.style.color = "white"} /></a>
                    <a href='https://twitter.com/Sevenoffew' target='_blank' rel="noreferrer"><FaTwitter size={28} style={{ color: '#ffffff', marginRight: '1rem', marginTop: '2rem' }} onMouseOver={({ target }) => target.style.color = "#941686"} onMouseOut={({ target }) => target.style.color = "white"} /></a>
                    <a href='https://www.instagram.com/sevenoffew_nft/' target='_blank' rel="noreferrer"><FaInstagram size={28} style={{ color: '#ffffff', marginRight: '1rem', marginTop: '2rem' }} onMouseOver={({ target }) => target.style.color = "#941686"} onMouseOut={({ target }) => target.style.color = "white"} /></a>
                    <a href='https://discord.gg/9S2X29q7' target='_blank' rel="noreferrer"><FaDiscord size={28} style={{ color: '#ffffff', marginRight: '1rem', marginTop: '2rem' }} onMouseOver={({ target }) => target.style.color = "#941686"} onMouseOut={({ target }) => target.style.color = "white"} /></a>
                    <a href='https://www.youtube.com/channel/UCY4gNdEEI-S7Q8hwxr51kjA' target='_blank' rel="noreferrer"><FaYoutube size={28} style={{ color: '#ffffff', marginRight: '1rem', marginTop: '2rem', }} onMouseOver={({ target }) => target.style.color = "#941686"} onMouseOut={({ target }) => target.style.color = "white"} /></a>
                </div>
            </div>
        </div>
    )
}

export default Video