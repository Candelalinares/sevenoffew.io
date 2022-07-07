import React from 'react'
import './amulets.css'
import circulos from '../assets/circulos.png'


import { Link } from 'react-router-dom'

const Amulets = () => {
    return (
        <div className='imagen colection'>
            <div className='left'>
                <h1>SOF IS HERE</h1>
                <p>And has the power to break the chains that bind this world. SOF possesses forbiden power in the term of 7 puzzles. He is ready to release them into our world through the grandest the cybespace has ever witnessed.</p>
                <h2>So be ready to go beyond and try to be the one successor.</h2>
                <div className='at_item'>
                    <img src={circulos} className='img' alt='' />
                </div>
            </div>

            <div className='right'>
                <h1>THE AMULETS</h1>
                <p>The 7 amulets are the center of everything. They gaved tremendous power to upon SOF, but it is also what keeps them weakened and imprisoned.</p>
                <p>Assimilating their power and getting rid of them is the way to move towards the final goal. The 7 must split into pieces across the world to find the chosen successor that SOF has been searching for since the beginning of time.</p>
                <p>This game could be humanity’s last chance to fulfill the SOF’s plan. Each of the 7 puzzles is divided into 7 pieces. 49 that are necessary to complete the game.</p>
                <p>However, SOF sees that humanity has grown. To find the heir he must sacrifice the energy that remains to do the unthinkable. SOF has multiplied most pieces. Some are still unique.</p>
                <Link to='/goodpaper'><button className='btn nuevo'>GOODPAPER</button></Link>

            </div>


        </div>

    )
}

export default Amulets