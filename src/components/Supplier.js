import React from 'react'
import './supplier.css'

const Supplier = () => {
    return (
        <div className='completo' id='reserved'>

            <div className='container'>
                <h1>RESERVED PIECES</h1>
                <label>SELECT PUZZLE</label>
                <select>
                    <option value=""></option>
                    <option value="Android">ANDROID</option>
                    <option value="Burn">BURN</option>
                    <option value="City">CITY</option>
                    <option value="Crowd">CROWD</option>
                    <option value="Light">LIGHT</option>
                    <option value="NewHorizon">NEW HORIZON</option>
                    <option value="Vertigo">VERTIGO</option>
                </select>
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
    )
}

export default Supplier