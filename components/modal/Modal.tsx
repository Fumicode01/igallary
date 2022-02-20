import React from 'react';
import { motion } from 'framer-motion';
import styles from './modal.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartIcon, faTwitterIcon, faInstagramIcon } from '../icons/Icon';


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
            <ul className={styles.image_info_container}>
                <li className={styles.author_wrapper}>
                    <img className={styles.author_image} src={selectedImage.user.profile_image.medium} alt="author image" />
                    <p>{selectedImage.user.name}</p>
                </li>
                <li className={styles.icon_wrapper}>
                    {selectedImage.user.social.twitter_username ? 
                    <div>
                        <FontAwesomeIcon icon={faTwitterIcon} className={styles.twitter_icon}/>
                        <p>{selectedImage.user.social.twitter_username}</p>
                    </div>
                    : null}
                    
                    {selectedImage.user.social.instagram_username ? 
                    <div>
                        <FontAwesomeIcon icon={faInstagramIcon} className={styles.instagram_icon}/>
                        <p>{selectedImage.user.social.instagram_username}</p>
                    </div>
                    : null}
                    
                </li>
                <li className={styles.like_wrapper}>
                    <FontAwesomeIcon icon={faHeartIcon} className={styles.heart_icon}/>
                    <p>{selectedImage.likes}</p>
                </li>
            </ul>
        </div>

    </motion.div>
  )
}

export default Modal;