import React from 'react'
import './css/ColorWheel.css'
import red from './assets/colorwheel/Solid_red.svg'
import orange from './assets/colorwheel/Solid_orange.svg'
import yellow from './assets/colorwheel/Solid_yellow.svg'
import green from './assets/colorwheel/Solid_green.svg'
import blue from './assets/colorwheel/Solid_blue.svg'
import purple from './assets/colorwheel/Solid_purple.svg'
import white from './assets/colorwheel/Solid_white.svg'
import black from './assets/colorwheel/Solid_black.svg'

const colorSvgs = [
  { src: orange, route: '/orange' },
  { src: yellow, route: '/yellow' },
  { src: green, route: '/green' },
  { src: blue, route: '/blue' },
  { src: purple, route: '/purple' },
  { src: white, route: '/white' },
  { src: black, route: '/black' },
  { src: red, route: '/red' },
  

]


export default function ColorWheel({ navigate }) {
  return (
    <div className="image-color-wheel">
{[...colorSvgs].map((slice, i, arr) => {
    const angle = ((arr.length - 1 - i) * 45) % 360


  return (
    <div
      key={i}
      className="slice-wrapper"
      style={{
        transform: `rotate(${angle}deg)`,
      }}
      onClick={() => navigate(slice.route)}
    >
      <img src={slice.src} alt={slice.route} className="slice-image" />
    </div>
  )
})}




    </div>
  )
}
