import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import Header from '../components/header/Header'
import ImageGrid from '../components/imageGrid/ImageGird'
import styles from '../styles/Home.module.css'



const Home: NextPage = () => {
    const [images, setImages] = useState([]);
    const [searchWord, setSearchWord] = useState("");


  return (
    <div className={styles.container}>
        <Header />
        <ImageGrid images={images}/>
    </div>
  )
}

export default Home
