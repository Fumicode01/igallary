import React from 'react';
import styles from './Grid.module.scss'

import { Image } from '../../interfaces/interfaces';
import { ImageFlip } from '../ImageFlip';

interface Props {
    images: Image[];
    setSelectedImage: (image: Image) => void;
}
export const Grid = ({ images }:Props) => {

  return (
    <div className={styles.img_grid}>
      {images && images.map((image:Image) => (
          <ImageFlip key={image.id} image={image} />
      ))}
    </div>
  )
}
