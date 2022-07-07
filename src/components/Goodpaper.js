import React, { Component } from 'react';
import Pdf from '../assets/goodpaper.pdf';
import './goodpaper.css'

class Download extends Component {

  render() {

    return (
        <div className='fondo'>
          <div className='containergp'>
          <div className='aver'>

          <a href = {Pdf} target="_blank" rel="noreferrer" className='btn nuevo'>GOODPAPER</a>
          </div>

          </div>
        </div>
    );

  }
}

export default Download;