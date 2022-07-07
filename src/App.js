import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Goodpaper from './components/Goodpaper'

import Home from './routes/Home'
import Story from './routes/Story'
import Team from './routes/Team'
import Colection from './routes/Colection'
import Roadmap from './routes/Roadmap'
import Android from './routes/Android'
import PReserv from './routes/PReserv'





function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/story' element={<Story />} />
        <Route path='/team' element={<Team />} />
        <Route path='/colection' element={<Colection />} />
        <Route path='/roadmap' element={ <Roadmap /> } />
        <Route path='/android' element={<Android /> } />
        <Route path='goodpaper' element={<Goodpaper /> } />
        <Route path='/reserved' element={<PReserv /> } />
      </Routes>
    </div>
  );
}

export default App;
