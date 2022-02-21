import React from 'react';

import { Image } from '../../interfaces/interfaces';
import styles from './ImageGrid.module.scss';
import ImageFlip from '../ImageFlip/ImageFlip';



interface Props {
    images: Image[];
    setSelectedImage: (image: Image) => void;
}

const ImageGrid = ({ images }:Props) => {

  return (
    <div className={styles.img_grid}>
      {images && images.map((image:Image) => (
          <ImageFlip key={image.id} image={image} />
      ))}
    </div>
  )
}

export default ImageGrid;