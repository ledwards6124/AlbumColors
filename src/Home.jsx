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
        <h1>
            Find the report <a href="https://docs.google.com/document/d/1KkcmADvd_afx9pw6HoR5jrZeECF_MikT4U1UqmwzQsw/edit?usp=sharing" target="_blank" rel="noopener noreferrer">here</a>.
          </h1>
          <h1>Pick a color!</h1>

          <ColorWheel navigate={navigate} />

        </div>
      </motion.div>
    </>
      )
}