import React, { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import axios from 'axios'
import BoxLoading from 'react-loading';
import ImageGrid from '../components/imageGrid/ImageGird'
import classes from '../styles/Home.module.css'

const config = {
    headers: {
        Authorization: "Client-ID WRnSlOG7Pt-AbW-oKfIxhf3m666J129Op-xwOOq-Zh4",
    }
}


const Home: NextPage = () => {
    const [images, setImages] = useState([]);
    const [searchWord, setSearchWord] = useState("");
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        const fetchImages = async () => {
            setIsLoading(true);
            const response = await axios.get("https://api.unsplash.com/photos/", config);
            console.log(response)
            await setImages(response.data);
            setTimeout(() => {
                setIsLoading(false);
            },1000)
            // setIsLoading(false);
        }
        fetchImages();
    } , []);

    useEffect(() => {
        const fetchImages = async () => {
            setIsLoading(true);
            const response = await axios.get("https://api.unsplash.com/photos/", config);
            console.log(response)
            await setImages(response.data);
            setTimeout(() => {
                setIsLoading(false);
            },1000)
        }
        fetchImages();
    } , [searchWord]);


  return (
    <div className={classes.container}>
        {isLoading ? <BoxLoading className="loading" type="spin" color="#f0a5a0" height={100} width={100} /> : <ImageGrid images={images} />}
        {/* <ImageGrid images={images}/> */}
    </div>
  )
}

export default Home
