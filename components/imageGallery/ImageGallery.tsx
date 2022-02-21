import React, { useState, useCallback, useEffect } from "react";
import Gallery from "react-photo-gallery";

import { Image } from '../../interfaces/interfaces';

interface Props {
    images: Image[];
    setSelectedImage: (image: Image) => void;
}

interface User {
    id: number;
    name: string;
}

interface Url {
    small: string;
}

interface ModifiedImage {
    src: string,
    width: number,
    height: number,
    urls: Url,
    user: User,
    likes: number
    size:string[]
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
