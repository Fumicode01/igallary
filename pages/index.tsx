import axios from 'axios'
import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import Header from '../components/header/Header'
import ImageGrid from '../components/imageGrid/ImageGird'
import styles from '../styles/Home.module.css'

const config = {
    headers: {
        Authorization: "Client-ID WRnSlOG7Pt-AbW-oKfIxhf3m666J129Op-xwOOq-Zh4",
    }
}


const Home: NextPage = () => {
    const [images, setImages] = useState([]);
    const [searchWord, setSearchWord] = useState("");


    useEffect(() => {
        const fetchImages = async () => {
            const response = await axios.get("https://api.unsplash.com/photos/", config);
            console.log(response)
            setImages(response.data);
        }
        fetchImages();
    } , [searchWord]);

  return (
    <div className={styles.container}>
        <Header />
        <ImageGrid images={images}/>
    </div>
  )
}

export default Home
