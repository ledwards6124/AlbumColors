import { useNavigate } from "react-router-dom"
import ColorWheel from "./ColorWheel";

export default function Home() {

    const navigate = useNavigate();

    return (
        <ColorWheel navigate={navigate}/>
      )
}