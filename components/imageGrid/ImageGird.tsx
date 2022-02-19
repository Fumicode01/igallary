import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { Image } from '../../interfaces/interfaces';
import classes from './ImageGrid.module.css';



interface Props {
    images: Image[];
    setSelectedImage: (image: Image) => void;
}

const ImageGrid = ({images, setSelectedImage}:Props) => {

  return (
    <div className={classes.img_grid}>
      {images && images.map((image:any) => (
        <motion.div className={classes.img_wrap} key={image.id} 
          layout
          whileHover={{ opacity: 1 }}
          onClick={() => setSelectedImage(image)}
        >
          <motion.img src={image.urls.small} alt="uploaded pic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          />
        </motion.div>
      ))}
    </div>
  )
}

export default ImageGrid;