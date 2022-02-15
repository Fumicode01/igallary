import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import classes from './ImageGrid.module.css';

const ImageGrid = ({images}:any) => {

  return (
    <div className={classes.img_grid}>
      {images && images.map((image:any) => (
        <motion.div className={classes.img_wrap} key={image.id} 
          layout
          whileHover={{ opacity: 1 }}
        //   onClick={() => setSelectedImg(image.url)}
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