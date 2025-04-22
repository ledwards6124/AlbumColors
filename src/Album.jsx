import React, { useRef, useState } from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "motion/react"
import Info from './Info'
import './css/Album.css'

export default function Album({ image, title, songTitle, artist, links, audioSrc }) {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const toggleAudio = () => {
    if (!audioRef.current) return
  
    if (!isPlaying) {
      audioRef.current.currentTime = 0
      fadeAudioIn(audioRef.current)
      audioRef.current.play().catch((err) => console.warn(err))
    } else {
      fadeAudioOut(audioRef.current)
    }
  
    setIsPlaying(!isPlaying)
  }
  

  const fadeAudioIn = (audio, duration = 500) => {
    audio.volume = 0
    const step = 0.05
    const interval = duration / (1 / step)
    const fade = setInterval(() => {
      if (audio.volume < 1) {
        audio.volume = Math.min(1, audio.volume + step)
      } else {
        clearInterval(fade)
      }
    }, interval)
  }
  
  const fadeAudioOut = (audio, duration = 500) => {
    const step = 0.05
    const interval = duration / (1 / step)
    const fade = setInterval(() => {
      if (audio.volume > 0) {
        audio.volume = Math.max(0, audio.volume - step)
      } else {
        audio.pause()
        clearInterval(fade)
      }
    }, interval)
  }
  

  return (
    <motion.div
    initial={{ y: "100vh" }}
    animate={{ y: 0 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
     className="album-wrapper">
        <div className="album-cover-column">
        <div className="album-cover-container">
            <img
            className={`album-cover ${isPlaying ? 'spinning' : ''}`}
            src={image}
            alt={title}
            />
            <button className="play-button" onClick={toggleAudio}>
            {isPlaying ? '❚❚' : '▶'}
            </button>
            <audio ref={audioRef} src={audioSrc} preload="auto" onEnded={() => {
                setIsPlaying(false);
                audioRef.current.currentTime = 0;
                audioRef.current.pause();
                audioRef.current.volume = 1;
            }} />
        </div>

        {isPlaying && (
            <div className="track-title">{songTitle}</div>
        )}
        </div>


      <div className="album-info">
        <h1 className="album-title">{title}</h1>
        <h2 className="album-artist">{artist}</h2>
        <p>Click the button to preview a 30-second sample.</p>
        <Info overview={'test'} themes={[1,2,3]}/>
        <h2 className='link-box'>Listen for yourself:</h2>
        <nav className="album-links">
          {Object.entries(links).map(([key, value]) => {
            if (value.includes('apple')) {
              return <SocialIcon network='itunes' url={value} key={key} target="_blank" rel="noreferrer" style={{filter: 'brightness(1)', transition: 'filter 0.2s ease'}} onMouseEnter={(e) => e.currentTarget.style.filter = 'brightness(0.8)'} onMouseLeave={(e) => e.currentTarget.style.filter = 'brightness(1)'} />

            }
            return <SocialIcon url={value} key={key} target="_blank" rel="noreferrer" style={{filter: 'brightness(1)', transition: 'filter 0.2s ease'}} onMouseEnter={(e) => e.currentTarget.style.filter = 'brightness(0.8)'} onMouseLeave={(e) => e.currentTarget.style.filter = 'brightness(1)'} />
          })}
        </nav>
      </div>
    </motion.div>
  )
}
