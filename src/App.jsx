import { useState } from 'react'
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
import blackCover from './assets/covers/black-album.png'
import blackSample from './assets/audio/black-album.mp3'

import WhiteAlbum from './WhiteAlbum'

export default function App() {

  const blackAlbum = {
    title: 'Care for Me',
    artist: 'Saba',
    songTitle: 'BUSY / SIRENS',
    image: blackCover,
    links: {
      spotify: '',
      itunes: '',
      youtube: ''
    },
    audioSrc: blackSample
  }


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
        <Route path="/black" element={
          <BlackAlbum
          title={blackAlbum.title}
          songTitle={blackAlbum.songTitle}
          artist={blackAlbum.artist} 
          image={blackAlbum.image} 
          links={blackAlbum.links}
          audioSrc={blackAlbum.audioSrc}/>}/>
        <Route path="/white" element={<WhiteAlbum />}/>
      </Routes>
    </>
  )
}
