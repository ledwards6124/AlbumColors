import { useNavigate } from "react-router-dom"
import { motion } from "motion/react";
import './css/Home.css'

import ColorWheel from "./ColorWheel";

export default function Home() {

    const navigate = useNavigate();

    return (
    <>
      <motion.div
        className="color-wrapper"
        initial={{ y: "100vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="background">
          <h1>Pick a color!</h1>

          <ColorWheel navigate={navigate} />
        </div>
      </motion.div>
    </>
      )
}