import React from 'react'
import { motion } from 'framer-motion'

const ImgAnim = () => {
    return (
        <motion.div 
        className='animation-spin'
            animate={{ rotate: 360 }}
            transition={{ duration: 2 }}
            style={{ backgroundColor: "red", width: 100, height: 100 }}
            
        >

        </motion.div>
    )
}

export default ImgAnim