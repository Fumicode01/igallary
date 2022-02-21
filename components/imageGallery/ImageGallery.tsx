import React, { useState, useCallback, useEffect } from "react";
import Gallery from "react-photo-gallery";

import { Image, ModifiedImage } from '../../interfaces/interfaces';

interface Props {
    images: Image[];
    setSelectedImage: (image: Image) => void;
}



function ImageGallery({ images, setSelectedImage}:Props) {
  const [modifiedImages, setModifiedImages] = useState<Array<ModifiedImage>>([]);

  useEffect(()=>{
    images.map((image:any)=> {
        let tempImage = {
            src: image.urls.small,
            width: image.width,
            height: image.height,
            urls: image.urls,
            user: image.user,
            likes: image.likes
        }
        setModifiedImages((modifiedImages:any) => [...modifiedImages, tempImage])
    })
  }, [])

  const selectImage = useCallback((event, { photo, index }) => {
    setSelectedImage(photo)
  }, []);


  return (
    <div>
      <Gallery photos={modifiedImages} onClick={selectImage} />
    </div>
  );
}

export default ImageGallery
