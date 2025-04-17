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
import yellowCover from './assets/covers/yellow-album.png'

import GreenAlbum from './GreenAlbum'
import greenCover from './assets/covers/green-album.png'

import BlueAlbum from './BlueAlbum'
import blueCover from './assets/covers/blue-album.png'

import PurpleAlbum from './PurpleAlbum'
import purpleCover from './assets/covers/purple-album.png'

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
      spotify: 'https://open.spotify.com/album/3wINP6SbT7TqiaYGo3Lj8f',
      itunes: '',
      youtube: 'https://www.youtube.com/watch?v=xEQ_946TO_g&list=OLAK5uy_mAGTQmYeosOR-Pp17OnnzkKHPeEbzSFOg&ab_channel=FrankOcean-Topic'
    },
    audioSrc: ''
  }

  //yellow
  const yellowAlbum = {
    title: "Niagara",
    artist: 'redveil',
    songTitle: 'Weight',
    image: yellowCover,
    links: {
      spotify: 'https://open.spotify.com/album/6jjX8mGrsWtrpYpFhGMrg1?highlight=spotify:track:2RPbEp0DyBVlkRvvYKopO7',
      itunes: '',
      youtube: 'https://www.youtube.com/watch?v=TBOv1C-Z-JM&list=PL3r1ldjYHlYOW_h96z2Uc52LVFlBKmnXB&ab_channel=redveil-Topic'
    },
    audioSrc: ''
  }

  //green
  const greenAlbum = {
    title: "Bando Stone and the New World",
    artist: 'Childish Gambino',
    songTitle: 'Lithonia',
    image: greenCover,
    links: {
      spotify: 'https://open.spotify.com/album/4yUqNSK6jMi7Y6eWl03U5r?highlight=spotify:track:61wsDs3Dbb11h1m2tw9eMZ',
      itunes: '',
      youtube: 'https://www.youtube.com/playlist?list=PLYuz75ZV-NPCXTa16m4_9uuiEKlAwZfZq'
    },
    audioSrc: ''
  }
  

  const blueAlbum = {
    title: "The Sun's Tirade",
    artist: 'Isaiah Rashad',
    songTitle: 'Stuck in the Mud (feat. SZA)',
    image: blueCover,
    links: {
      spotify: 'https://open.spotify.com/album/6jjX8mGrsWtrpYpFhGMrg1?highlight=spotify:track:2RPbEp0DyBVlkRvvYKopO7',
      itunes: '',
      youtube: 'https://www.youtube.com/playlist?list=PLC80P4gsPr-Ztf940Zewj7_KFGfDWCSfF'
    },
    audioSrc: ''
  }

  const purpleAlbum = {
    title: "ORQUÍDEAS PARTE 2",
    artist: "Kali Uchis",
    songTitle: "Como Debe Ser",
    image: purpleCover,
    links: {
      spotify: "https://open.spotify.com/album/1quQQFsx3AcBBotzj9UXfS?highlight=spotify:track:2xQIb4ZLQLAiWAZejlmOoR",
      itunes: "",
      youtube: "https://www.youtube.com/playlist?list=OLAK5uy_kRWlYWQFxkCLGYwzrJjF4hDjgeYoAdR8Y"
    },
    audioSrc: ""
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

        <Route path="/yellow" element={<YellowAlbum 
        title={yellowAlbum.title}
        songTitle={yellowAlbum.songTitle}
        artist={yellowAlbum.artist}
        image={yellowAlbum.image}
        links={yellowAlbum.links}
        audioSrc={yellowAlbum.audioSrc}/>}/>


        <Route path="/green" element={<GreenAlbum 
        title={greenAlbum.title}
        songTitle={greenAlbum.songTitle}
        artist={greenAlbum.artist}
        image={greenAlbum.image}
        links={greenAlbum.links}
        audioSrc={greenAlbum.audioSrc}/>}/>


        <Route path="/blue" element={<BlueAlbum
        title={blueAlbum.title}
        songTitle={blueAlbum.songTitle}
        artist={blueAlbum.artist}
        image={blueAlbum.image}
        links={blueAlbum.links}
        audioSrc={blueAlbum.audioSrc} />}/>


        <Route path="/purple" element={<PurpleAlbum 
        title={purpleAlbum.title}
        songTitle={purpleAlbum.songTitle}
        artist={purpleAlbum.artist}
        image={purpleAlbum.image}
        links={purpleAlbum.links}
        audioSrc={purpleAlbum.audioSrc}/>}/>

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
