import React from 'react'
import { motion, usePresence } from 'framer-motion'
import './bubble.css'

const transition = {
  type: 'inertia',
  stiffness: 600,
  damping: 50,
  default: {
    duration: 0.6
  }
}

const Bubble = ({ id, children, sender, dy }) => {
  const [isPresent, safeToRemove] = usePresence()

  const animations = {
    layout: true,
    initial: 'out',
    style: {
      position: 'static'
    },
    animate: 'in',
    variants: {
      in: { opacity: 1, translateY: 0 },
      out: { opacity: 1, translateY: `${dy}px` }
    },
    exit: { opacity: 0, translateY: 0 },
    onAnimationComplete: () => !isPresent && safeToRemove(),
    transition
  }

  return (
    <motion.div key={id} className="bubble" {...animations}>
      <div className="bubble-content">{children}</div>
    </motion.div>
  )
}

export default Bubble
