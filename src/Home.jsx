import { useNavigate } from "react-router-dom"

import './css/Home.css'

import ColorWheel from "./ColorWheel";

export default function Home() {

    const navigate = useNavigate();

    return (
        <div className="color-wrapper">
          <ColorWheel navigate={navigate}/>
        </div>
      )
}