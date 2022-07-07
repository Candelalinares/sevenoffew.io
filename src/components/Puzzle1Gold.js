import React from 'react'
import './puzzle1glod.css'
import androidGold from './../assets/androidGold.mp4'

const Puzzle1Gold = () => {
    return (
        <div className='container' id='androidGold'>
            <div className='card-container'>
                <div className='card'>
                    <h3>ANDROID</h3>
                    <span className='bar'></span>
                    <video autoPlay loop muted id='and'>
                        <source src={androidGold} type='video/mp4' />
                    </video>
                    <form>
                        <label>ADDRESS</label>
                        <input type="text"
                            required
                            label="Address"
                        />
                        <button>CLAIM</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Puzzle1Gold