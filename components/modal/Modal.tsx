import React from 'react';
import { motion } from 'framer-motion';
import classes from './modal.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

// interface props{
//     selectedImage: string,
//     setSelectdImage : (value: React.SetStateAction<string>) => void

// }

const faHeartIcon = faHeart as IconProp
const faTwitterIcon = faTwitter as IconProp
const faInstagramIcon = faInstagram as IconProp

const Modal = ({ setSelectedImage, selectedImage }:any) => {
    console.log(selectedImage)

  const handleClick = (e:any) => {
    if ((e.target as Element).classList.contains('backdrop')) {
      setSelectedImage(null);
    }
  }

  return (
    <motion.div  className="backdrop" onClick={(e:any)=>handleClick(e)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
        <div className="modal_wrapper">
            <motion.img src={selectedImage.urls.regular} alt="enlarged pic" 
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
                className="modal_image"
            />
            <ul className={classes.image_info_container}>
                <li className={classes.author_wrapper}>
                    <img className={classes.author_image} src={selectedImage.user.profile_image.medium} alt="author image" />
                    <p>{selectedImage.user.name}</p>
                </li>
                <li className={classes.icon_wrapper}>
                    {selectedImage.user.social.twitter_username ? 
                    <div>
                        <FontAwesomeIcon icon={faTwitterIcon} className={classes.twitter_icon}/>
                        <p>{selectedImage.user.social.twitter_username}</p>
                    </div>
                    : null}
                    
                    {selectedImage.user.social.instagram_username ? 
                    <div>
                        <FontAwesomeIcon icon={faInstagramIcon} className={classes.instagram_icon}/>
                        <p>{selectedImage.user.social.instagram_username}</p>
                    </div>
                    : null}
                    
                </li>
                <li className={classes.like_wrapper}>
                    <FontAwesomeIcon icon={faHeartIcon} className={classes.heart_icon}/>
                    <p>{selectedImage.likes}</p>
                </li>
            </ul>
        </div>

    </motion.div>
  )
}

export default Modal;