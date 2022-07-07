import React from 'react'
import { Link } from 'react-router-dom'
import './piezas.css'

import burn from '../assets/burn.mp4';
import city from '../assets/city.mp4';
import crowd from '../assets/crowd.mp4';
import light from '../assets/light.mp4';
import vertigo from '../assets/vertigo.mp4';
import newH from '../assets/newH.mp4';
import android from '../assets/android.mp4';


const Piezas = () => {
    return (
        <div className='pricing'>
            <div className='card-container'>
                <div className='card'>
                    <h3>ANDROID</h3>
                    <span className='bar'></span>
                    <video autoPlay loop muted id='burn'>
                        <source src={android} type='video/mp4' />
                    </video>
                    <Link to='/android' target='_blank' rel="noreferrer" className='btn'>7/7 AUCTION</Link>
                </div>
                <div className='card cardA'>
                    <h3> BURN </h3>
                    <span className='bar'></span>
                    <video autoPlay loop muted id='burn'>
                        <source src={burn} type='video/mp4' />
                    </video>
                     <div to='' target='_blank' rel="noreferrer" className='btn'>SOON</div>
                </div>
                <div className='card cardA'>
                    <h3> CITY </h3>
                    <span className='bar'></span>
                    <video autoPlay loop muted id='burn'>
                        <source src={city} type='video/mp4' />
                    </video>
                    <div to='' target='_blank' rel="noreferrer" className='btn'>SOON</div>
                </div>
                <div className='card cardA'>
                    <h3> CROWD </h3>
                    <span className='bar'></span>
                    <video autoPlay loop muted id='burn'>
                        <source src={crowd} type='video/mp4' />
                    </video>
                    <div to='' target='_blank' rel="noreferrer" className='btn'>SOON</div>
                </div>
                <div className='card'>
                    <h3> LIGHT</h3>
                    <span className='bar'></span>
                    <video autoPlay loop muted id='burn'>
                        <source src={light} type='video/mp4' />
                    </video>
                    <div to='' target='_blank' rel="noreferrer" className='btn'>SOON</div>
                </div>
                <div className='card'>
                    <h3>NEW HORIZON</h3>
                    <span className='bar'></span>
                    <video autoPlay loop muted id='burn'>
                        <source src={newH} type='video/mp4' />
                    </video>
                    <div to='' target='_blank' rel="noreferrer" className='btn'>SOON</div>
                </div>
                <div className='card'>
                    <h3> VERTIGO </h3>
                    <span className='bar'></span>
                    <video autoPlay loop muted id='burn'>
                        <source src={vertigo} type='video/mp4' />
                    </video>
                    <div to='' target='_blank' rel="noreferrer" className='btn'>SOON</div>
                </div>
            </div>
        </div>
    )
}

export default Piezas