import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import RedAlbum from './RedAlbum'
import OrangeAlbum from './OrangeAlbum'
import YellowAlbum from './YellowAlbum'
import GreenAlbum from './GreenAlbum'
import BlueAlbum from './BlueAlbum'
import PurpleAlbum from './PurpleAlbum'
import BlackAlbum from './BlackAlbum'
import WhiteAlbum from './WhiteAlbum'

export default function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/red" element={<RedAlbum />}/>
        <Route path="/orange" element={<OrangeAlbum />}/>
        <Route path="/yellow" element={<YellowAlbum />}/>
        <Route path="/green" element={<GreenAlbum />}/>
        <Route path="/blue" element={<BlueAlbum />}/>
        <Route path="/purple" element={<PurpleAlbum />}/>
        <Route path="/black" element={<BlackAlbum />}/>
        <Route path="/white" element={<WhiteAlbum />}/>
      </Routes>
    </>
  )
}
