import { useNavigate } from "react-router-dom"
import { motion } from "motion/react";
import './css/Home.css'

import ColorWheel from "./ColorWheel";

export default function Home() {

    const navigate = useNavigate();

    return (
        <motion.div
          className="color-wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ColorWheel />
        </motion.div>
      )
}