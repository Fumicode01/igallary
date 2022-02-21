import React, { useState, useCallback } from 'react'
import ReactCardFlip from 'react-card-flip';
import { motion } from 'framer-motion';
import styles from './imageFlip.module.scss'
import { Image } from '../../interfaces/interfaces';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartIcon, faTwitterIcon, faInstagramIcon } from '../icons/Icon';


const ImageFlip = ({ image }: any) => {

    const [isFlipped, changeFlip] = useState(false)

    const handleClick = useCallback((event) => {
        event.preventDefault()
        changeFlip(!isFlipped)
    },[isFlipped])

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" key={image.id} >
        {/* <div onClick={handleClick} > */}
        <motion.div className={styles.img_wrap} 
            layout
            whileHover={{ opacity: 1 }}
            onClick={handleClick}
            >
            <motion.img src={image.urls.small} alt="uploaded pic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            />
        </motion.div>
        {/* </div> */}
        <div className={styles.card_back} onClick={handleClick}>
            <div className={styles.upper_wrapper}>
                    {/* <div className={styles.left_wrapper}> */}
                        <img className={styles.author_image} src={image.user.profile_image.medium} alt="author image" />
                        <p>{image.user.name}</p>
                    {/* </div> */}
                    {/* <div className={styles.right_wrapper}> */}
                    {image.user.social.twitter_username ? 
                        <div>
                            <FontAwesomeIcon icon={faTwitterIcon} className={styles.twitter_icon}/>
                            <p>{image.user.social.twitter_username}</p>
                        </div>
                        : null}
                        
                        {image.user.social.instagram_username ? 
                        <div>
                            <FontAwesomeIcon icon={faInstagramIcon} className={styles.instagram_icon}/>
                            <p>{image.user.social.instagram_username}</p>
                        </div>
                        : null}
                    {/* </div> */}
                </div>
            <div className={styles.lower_wrapper}>
                <FontAwesomeIcon icon={faHeartIcon} className={styles.heart_icon}/>
                <p>{image.likes}</p>
            </div>
            
        </div>
    </ReactCardFlip>
  )
}

export default ImageFlip