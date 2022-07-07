import React from 'react'
import './puzzle1.css'



import Gold from '../assets/androidGold.mp4'



const Puzzle1 = () => {
    return (
        <div className='pricing' id='puzzle1'>
            <div className='card-container'>
                <div className='card'>
                    <h3>ANDROID GOLD</h3>
                    <span className='bar'></span>
                    <video autoPlay loop muted id='and'>
                        <source src={Gold} type='video/mp4' />
                    </video>
                    <h4>AUCTION</h4>
                    <form>
                        <input type="text"
                            required
                            label="bid"
                            />
                    </form>
                    <button>BID</button>
                </div>
            </div>
        </div>
    )
}

export default Puzzle1