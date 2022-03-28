import React, { useState } from 'react'
import { motion } from "framer-motion"

export default function Box3() {
    const boxVariant = {
        apple: {
            x: 100,
            scale: 1.5,
            backgroundColor: "red"
        },
        orange: {
            x: 1000,
            scale: .3,
            backgroundColor: "grey"
        }
    }
  return (
    <div className="box-container">
        <motion.div 
            className="box"
            variants={boxVariant}
            initial="apple"
            animate="orange"  
            >

        </motion.div>
        
    </div>
  )
}
