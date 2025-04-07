import React, { useRef, useState } from 'react'
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
    <div className="album-wrapper">
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
        <nav className="album-links">
          {Object.entries(links).map(([key, value]) => (
            <a href={value} key={key} target="_blank" rel="noreferrer">{key}</a>
          ))}
        </nav>
      </div>
    </div>
  )
}
