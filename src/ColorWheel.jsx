import React from 'react'
import './css/ColorWheel.css'

import red from './assets/colorwheel/Solid_red.svg'
import orange from './assets/colorwheel/Solid_orange.svg'
import yellow from './assets/colorwheel/Solid_yellow.svg'
import green from './assets/colorwheel/Solid_green.svg'
import blue from './assets/colorwheel/Solid_blue.svg'
import purple from './assets/colorwheel/Solid_purple.svg'
import black from './assets/colorwheel/Solid_black.svg'
import white from './assets/colorwheel/Solid_white.svg'

export default function ColorWheel({navigate}) {

  const colors = [red, orange, yellow, green, blue, purple, black, white]
  const links = ['/red', '/orange', '/yellow', '/green', '/blue', '/purple', '/black', '/white']
  const radius = 180 // distance from center

  return (
    <>
    <div className="wheel-rotator">
      <div className="dot-wheel">
        {colors.map((color, i) => {
          const angle = (360 / colors.length) * i
          return (
            <img
              src={color}
              alt={color}
              key={i}
              className="dot"
              style={{
                 transform: `rotate(${angle}deg) translate(${radius}px)`,
              }}
              onClick={() => navigate(`${links[i]}`)}
            />
          )
        })}
      </div>
    </div>
    </>
  )

}
