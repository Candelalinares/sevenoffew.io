import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { FaBars, FaTimes} from 'react-icons/fa'
import logo from '../assets/logo.svg'

import './navbar.css'

const Navbar = () => {
const[click, setClick] = useState(false)
const handleClick = () =>setClick(!click)


  return (
        <div className='header'>
            <Link to='/' >
                <img className='logo' src={logo} alt="logo" />
            </Link>
            
            <ul className={ click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <Link to='/story'>STORY</Link>
                    </li>
                    <li>
                        <Link to='/colection'>COLECTION</Link>
                    </li>
                    <li>
                        <Link to='/roadmap'>ROADMAP</Link>
                    </li>
                    <li>
                        <Link to='/team'>TEAM</Link>
                    </li>
                    <li className='buttons'>
                    <Link to='/Wallet' className='btn nuevo'>WALLET</Link>
                    </li>
                </ul>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{color:'#fff'}} />) : <FaBars size={30} style={{color:'#fff'}} /> }   
                </div>

        </div>
  )
}

export default Navbar