import React, { useState, useCallback, useEffect } from "react";
import Gallery from "react-photo-gallery";

function ImageGallery({ images, setSelectedImage}:any) {
  const [modifiedImages, setModifiedImages] = useState<any[]>([]);

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
        setModifiedImages(modifiedImages => [...modifiedImages, tempImage])
    })
  }, [])

  const selectImage = useCallback((event, { photo, index }) => {
    setSelectedImage(photo)
  }, []);


  return (
    <div>
      <Gallery photos={modifiedImages} onClick={selectImage} />
      {/* <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={modifiedImages.map((x:any, i:number) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
                key: x.i
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway> */}
    </div>
  );
}

export default ImageGallery
