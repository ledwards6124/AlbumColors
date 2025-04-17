import { useState } from 'react'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'

import RedAlbum from './RedAlbum'
import redCover from './assets/covers/red-album.png'
import redSample from './assets/audio/red-album.mp3'

import OrangeAlbum from './OrangeAlbum'
import orangeCover from './assets/covers/orange-album.png'

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
      spotify: 'https://open.spotify.com/album/1crhG7YecAj6ZN0AAYMYsb?highlight=spotify:track:5m7T46ZFLWKE5YOIN4nW0h',
      itunes: '',
      youtube: 'https://www.youtube.com/watch?v=zhE-fQU6P9U&list=PLy8w3wlWi4jDxB5NEcSolHpoaCxV2yP1N&ab_channel=SabaPivot'
    },
    audioSrc: blackSample
  }

  const redAlbum = {
    title: 'DAMN.',
    artist: 'Kendrick Lamar',
    songTitle: 'XXX.',
    image: redCover,
    links: {
      spotify: 'https://open.spotify.com/album/4eLPsYPBmXABThSJ821sqY',
      itunes: '',
      youtube: 'https://www.youtube.com/watch?v=pltUZzEFLR0&list=PLFvR2bZRQluyK8EhHQ1vl4p0Rln3sVoJf&ab_channel=KendrickLamarSpotlight'
    },
    audioSrc: redSample
  }

  const orangeAlbum = {
    title: 'channel ORANGE',
    artist: 'Frank Ocean',
    songTitle: 'Sweet Life',
    image: orangeCover,
    links: {
      spotify: 'https://open.spotify.com/album/392p3shh2jkxUxY2VHvlH8?highlight=spotify:track:7DfFc7a6Rwfi3YQMRbDMau',
      itunes: '',
      youtube: 'https://www.youtube.com/watch?v=xEQ_946TO_g&list=OLAK5uy_mAGTQmYeosOR-Pp17OnnzkKHPeEbzSFOg&ab_channel=FrankOcean-Topic'
    },
    audioSrc: ''
  }


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>

        <Route path="/red" element={<RedAlbum
          title={redAlbum.title}
          songTitle={redAlbum.songTitle}
          artist={redAlbum.artist}
          image={redAlbum.image}
          links={redAlbum.links}
          audioSrc={redAlbum.audioSrc} />}
          />

        <Route path="/orange" element={<OrangeAlbum 
        title={orangeAlbum.title}
        songTitle={orangeAlbum.songTitle}
        artist={orangeAlbum.artist}
        image={orangeAlbum.image}
        links={orangeAlbum.links}
        audioSrc={orangeAlbum.audioSrc}
        />}/>

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
