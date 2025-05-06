import { useState } from 'react'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'

import Album from './Album'

import redCover from './assets/covers/red-album.png'
import redSample from './assets/audio/red-album.mp3'

import orangeCover from './assets/covers/orange-album.png'

import yellowCover from './assets/covers/yellow-album.png'

import greenCover from './assets/covers/green-album.png'

import blueCover from './assets/covers/blue-album.png'

import purpleCover from './assets/covers/purple-album.png'

import blackCover from './assets/covers/black-album.png'
import blackSample from './assets/audio/black-album.mp3'

import whiteCover from './assets/covers/white-album.png'

export default function App() {

  const blackAlbum = {
    title: 'Care for Me',
    artist: 'Saba',
    songTitle: 'BUSY / SIRENS',
    image: blackCover,
    links: {
      spotify: 'https://open.spotify.com/album/1crhG7YecAj6ZN0AAYMYsb?highlight=spotify:track:5m7T46ZFLWKE5YOIN4nW0h',
      itunes: 'https://music.apple.com/us/album/care-for-me/1756822263',
      youtube: 'https://www.youtube.com/watch?v=zhE-fQU6P9U&list=PLy8w3wlWi4jDxB5NEcSolHpoaCxV2yP1N&ab_channel=SabaPivot'
    },
    audioSrc: blackSample,
    overview: 'Care for Me is Saba’s 2018 album, heavily influenced by the grief of losing his close friend, Walter Long Jr. The album addresses themes of loss, mental health, and personal growth, combining soulful production with raw, vulnerable lyrics that reflect Saba’s emotional journey through pain and healing.',
    themes: [
      "Grief and Loss: Deals with the impact of losing a close friend and the pain of mourning.",
      "Mental Health and Vulnerability: Saba addresses depression, anxiety, and feelings of isolation.",
      "Self-Reflection and Healing: The album portrays Saba’s emotional journey toward personal healing and growth."
    ]
  }

  const whiteAlbum = {
    title: 'Madvilllainy',
    artist: 'Madvillian (MF DOOM & Madlib)',
    songTitle: 'Accordion',
    image: whiteCover,
    links: {
      spotify: 'https://open.spotify.com/album/19bQiwEKhXUBJWY6oV3KZk?highlight=spotify:track:1YgDGKyKhFlimPw3mLavPG',
      itunes: '',
      youtube: 'https://www.youtube.com/playlist?list=PL9dk_xtWpAkKs1-EKcvq-nKwdaaS-3czd'
    },
    audioSrc: '',
    overview: 'Madvillainy is the 2004 album by MF DOOM and Madlib, known for its abstract lyricism and minimalist production. The album challenges traditional hip-hop conventions, with cryptic lyrics and lo-fi beats that encourage personal interpretation. It became a cult classic for its unique style and artistic innovation.',
    themes: [
      "Minimalism and Ambiguity: The album’s abstract lyrics and minimalist production encourage personal interpretation.",
      "Artistry and Wordplay: Emphasis on complex rhyme schemes and intricate lyricism.",
      "Listener Empowerment: Invites the audience to engage deeply, drawing their own meanings from the cryptic lyrics."
    ]
  }

  const redAlbum = {
    title: 'DAMN.',
    artist: 'Kendrick Lamar',
    songTitle: 'XXX.',
    image: redCover,
    links: {
      spotify: 'https://open.spotify.com/album/4eLPsYPBmXABThSJ821sqY',
      itunes: 'https://music.apple.com/us/album/damn/1440881047',
      youtube: 'https://www.youtube.com/watch?v=pltUZzEFLR0&list=PLFvR2bZRQluyK8EhHQ1vl4p0Rln3sVoJf&ab_channel=KendrickLamarSpotlight'
    },
    audioSrc: redSample,
    overview: 'DAMN. is Kendrick Lamar’s fourth studio album, released in 2017. The album explores themes of morality, self-identity, and societal pressures through intricate lyrics and diverse production. It addresses Lamar’s internal conflicts with fame, sin, and redemption, earning widespread acclaim, including the Pulitzer Prize for Music in 2018.',
    themes: [
      "Moral Conflict: Explores the tension between right and wrong, redemption, and the struggles of living with one’s choices.",
      "Self-Reflection and Growth: Lamar delves into his identity, fame, and internal battles.",
      "Anger and Redemption: Confronts anger and guilt while seeking self-improvement and forgiveness."
    ]
  }

  const orangeAlbum = {
    title: 'channel ORANGE',
    artist: 'Frank Ocean',
    songTitle: 'Sweet Life',
    image: orangeCover,
    links: {
      spotify: 'https://open.spotify.com/album/3wINP6SbT7TqiaYGo3Lj8f',
      itunes: 'https://music.apple.com/us/album/channel-orange/1440765580',
      youtube: 'https://www.youtube.com/watch?v=xEQ_946TO_g&list=OLAK5uy_mAGTQmYeosOR-Pp17OnnzkKHPeEbzSFOg&ab_channel=FrankOcean-Topic'
    },
    audioSrc: '',
    overview: 'channel ORANGE is Frank Ocean’s debut album, released in 2012, blending R&B, soul, and pop. It explores themes of love, heartbreak, and self-discovery, with Ocean openly addressing his experiences with same-sex love. The album was lauded for its vulnerability, creativity, and its genre-defying approach.',
    themes: [
      "Love and Heartbreak: Explores both the euphoric and painful aspects of love.",
      "Sexual Identity and Self-Discovery: A groundbreaking reflection on Frank Ocean’s own experiences with same-sex love.",
      "Escapism and Reality: The album delves into escaping the pain of reality through materialism, fantasy, and self-doubt."
    ]
  }

  //yellow
  const yellowAlbum = {
    title: "Niagara",
    artist: 'redveil',
    songTitle: 'Weight',
    image: yellowCover,
    links: {
      spotify: 'https://open.spotify.com/album/6jjX8mGrsWtrpYpFhGMrg1?highlight=spotify:track:2RPbEp0DyBVlkRvvYKopO7',
      itunes: 'https://music.apple.com/us/album/niagara/1527340332',
      youtube: 'https://www.youtube.com/watch?v=TBOv1C-Z-JM&list=PL3r1ldjYHlYOW_h96z2Uc52LVFlBKmnXB&ab_channel=redveil-Topic'
    },
    audioSrc: '',
    overview: 'Niagara is redveil’s second album, released in 2020. The album features introspective lyrics and lo-fi beats, exploring themes of mental health, self-discovery, and personal growth. Redveil self-produced and mixed most of the tracks, showcasing his raw, vulnerable approach to music.',
    themes: [
      "Mental Health: Tackles emotional struggles and vulnerability.",
      "Coming-of-Age: Focuses on self-discovery and growth.",
      "Resilience and Change: Expresses a desire for personal and societal transformation."
    ]
  }

  //green
  const greenAlbum = {
    title: "Bando Stone and the New World",
    artist: 'Childish Gambino',
    songTitle: 'Lithonia',
    image: greenCover,
    links: {
      spotify: 'https://open.spotify.com/album/4yUqNSK6jMi7Y6eWl03U5r?highlight=spotify:track:61wsDs3Dbb11h1m2tw9eMZ',
      itunes: 'https://music.apple.com/us/album/bando-stone-and-the-new-world/1757678472',
      youtube: 'https://www.youtube.com/playlist?list=PLYuz75ZV-NPCXTa16m4_9uuiEKlAwZfZq'
    },
    audioSrc: '',
    overview: 'Bando Stone & The New World is Childish Gambino’s final album, released alongside a film of the same name in July 2024. The album blends alternative R&B, hip-hop, and pop, following the post-apocalyptic journey of a musician, Bando Stone, seeking redemption and personal growth in a dystopian world.',
    themes: [
      "Survival in a Collapsing World: The protagonist faces both physical and emotional challenges.",
      "Personal Growth: Bando Stone’s journey of self-discovery and redemption.",
      "Cultural Critique: Reflections on societal collapse, fame, and human connection."
    ]
  }
  

  const blueAlbum = {
    title: "The Sun's Tirade",
    artist: 'Isaiah Rashad',
    songTitle: 'Stuck in the Mud (feat. SZA)',
    image: blueCover,
    links: {
      spotify: 'https://open.spotify.com/album/6jjX8mGrsWtrpYpFhGMrg1?highlight=spotify:track:2RPbEp0DyBVlkRvvYKopO7',
      itunes: 'https://music.apple.com/us/album/the-suns-tirade/1149506748',
      youtube: 'https://www.youtube.com/playlist?list=PLC80P4gsPr-Ztf940Zewj7_KFGfDWCSfF'
    },
    audioSrc: '',
    overview: 'Released in 2016, The Sun’s Tirade is Isaiah Rashad’s second album, which delves into themes of mental health, addiction, and personal growth. Through introspective lyrics and soulful production, Rashad reflects on his struggles and his journey toward emotional healing, receiving praise for its depth and vulnerability.',
    themes: [
      "Mental Health: Explores depression, anxiety, and addiction.",
      "Addiction and Escapism: Confronts substance abuse as both a form of escape and a destructive force.",
      "Growth and Self-Reflection: Focuses on Rashad’s journey toward emotional healing and self-discovery."
    ]
  }

  const purpleAlbum = {
    title: "ORQUÍDEAS PARTE 2",
    artist: "Kali Uchis",
    songTitle: "Como Debe Ser",
    image: purpleCover,
    links: {
      spotify: "https://open.spotify.com/album/1quQQFsx3AcBBotzj9UXfS?highlight=spotify:track:2xQIb4ZLQLAiWAZejlmOoR",
      itunes: "https://music.apple.com/us/album/orqu%C3%ADdeas-parte-2/1761264602",
      youtube: "https://www.youtube.com/playlist?list=OLAK5uy_kRWlYWQFxkCLGYwzrJjF4hDjgeYoAdR8Y"
    },
    audioSrc: "",
    overview: 'Orquídeas Parte 2 is Kali Uchis’ follow-up album to Isolation, blending R&B, Latin influences, and dreamlike production. The album explores love, heartbreak, and self-discovery, while also embracing Uchis’ Latin heritage. It marks a continuation of her emotional growth and empowerment through both personal and cultural themes.',
    themes: [
      "Love and Heartbreak: Reflects on the complexities of love and the emotional pain that accompanies it.",
      "Self-Discovery and Empowerment: Focuses on Uchis' journey of self-realization and embracing her individuality.",
      "Cultural Identity: Celebrates her Colombian heritage while embracing both personal and cultural growth."
    ]
  }


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>

        <Route path="/red" element={<Album
          title={redAlbum.title}
          songTitle={redAlbum.songTitle}
          artist={redAlbum.artist}
          image={redAlbum.image}
          links={redAlbum.links}
          audioSrc={redAlbum.audioSrc}
          overview={redAlbum.overview}
          themes={redAlbum.themes} />}/>

        <Route path="/orange" element={<Album 
        title={orangeAlbum.title}
        songTitle={orangeAlbum.songTitle}
        artist={orangeAlbum.artist}
        image={orangeAlbum.image}
        links={orangeAlbum.links}
        audioSrc={orangeAlbum.audioSrc}
        overview={orangeAlbum.overview}
        themes={orangeAlbum.themes} />}/>

        <Route path="/yellow" element={<Album 
        title={yellowAlbum.title}
        songTitle={yellowAlbum.songTitle}
        artist={yellowAlbum.artist}
        image={yellowAlbum.image}
        links={yellowAlbum.links}
        audioSrc={yellowAlbum.audioSrc}
        overview={yellowAlbum.overview}
        themes={yellowAlbum.themes} />}/>

        <Route path="/green" element={<Album 
        title={greenAlbum.title}
        songTitle={greenAlbum.songTitle}
        artist={greenAlbum.artist}
        image={greenAlbum.image}
        links={greenAlbum.links}
        audioSrc={greenAlbum.audioSrc}
        overview={greenAlbum.overview}
        themes={greenAlbum.themes} />}/>

        <Route path="/blue" element={<Album
        title={blueAlbum.title}
        songTitle={blueAlbum.songTitle}
        artist={blueAlbum.artist}
        image={blueAlbum.image}
        links={blueAlbum.links}
        audioSrc={blueAlbum.audioSrc}
        overview={blueAlbum.overview}
        themes={blueAlbum.themes} />}/>

        <Route path="/purple" element={<Album
        title={purpleAlbum.title}
        songTitle={purpleAlbum.songTitle}
        artist={purpleAlbum.artist}
        image={purpleAlbum.image}
        links={purpleAlbum.links}
        audioSrc={purpleAlbum.audioSrc}
        overview={purpleAlbum.overview}
        themes={purpleAlbum.themes} />}/>

        <Route path="/black" element={<Album
        title={blackAlbum.title}
        songTitle={blackAlbum.songTitle}
        artist={blackAlbum.artist}
        image={blackAlbum.image}
        links={blackAlbum.links}
        audioSrc={blackAlbum.audioSrc}
        overview={blackAlbum.overview}
        themes={blackAlbum.themes} />}/>

        <Route path="/white" element={<Album
        title={whiteAlbum.title}
        songTitle={whiteAlbum.songTitle}
        artist={whiteAlbum.artist}
        image={whiteAlbum.image}
        links={whiteAlbum.links}
        audioSrc={whiteAlbum.audioSrc}
        overview={whiteAlbum.overview}
        themes={whiteAlbum.themes} />}/>
      </Routes>
    </>
  )
}
