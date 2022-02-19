import React, { useState, useEffect, useLayoutEffect, useContext, useRef } from 'react'
import type { NextPage } from 'next'
import axios from 'axios'
import BoxLoading from 'react-loading';
import classes from '../styles/Home.module.css'


import Modal from '../components/modal/Modal';
import ImageGrid from '../components/imageGrid/ImageGird'

import { Image } from '../interfaces/interfaces';
import { configContext } from '../context/context';


const config = {
    headers: {
        Authorization: `Client-ID ${process.env.NEXT_PUBLIC_KEY}`,
    }
}

const Home: NextPage = () => {
    const [images, setImages] = useState<Image[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedImage, setSelectedImage] = useState<Image | null>(null);
    const firstUpdate = useRef(true);

    const { state } = useContext(configContext);
    const searchWord = state.searchWord;

    useEffect(() => {
        const fetchImages = async () => {
            setIsLoading(true);
            const response = await axios.get("https://api.unsplash.com/photos?page=1&per_page=9", config);
            console.log(response)
            // console.log(response.headers.link.split(';')[1].split(",")[1]);
            // console.log("MaxPage => " +response.headers.link.split(';')[2].split(",")[1].split("=")[1].split(">")[0]);
            const maxItem = response.headers
            console.log(maxItem)

            await setImages(response.data);
            setTimeout(() => {
                setIsLoading(false);
            },1000)
        }
        fetchImages();
    } , []);

    useLayoutEffect(() => {
        if(firstUpdate.current){
            firstUpdate.current = false;
            return
        }
        const fetchImages = async () => {
            setIsLoading(true);
            const response = await axios.get(`https://api.unsplash.com/search/photos?page=1&query=${searchWord}&per_page=9`, config);
            console.log("response => ", response)
            console.log("total Page => ", response.data.total_pages);

            await setImages(response.data.results);
            setTimeout(() => {
                setIsLoading(false);
            },1000)
        }
        fetchImages();
    } , [searchWord]);

  return (
    <div className={classes.container}>
        {isLoading ? <BoxLoading className="loading" type="spin" color="#f0a5a0" height={100} width={100} /> : <ImageGrid images={images} setSelectedImage={setSelectedImage} />}
        { selectedImage && (
        <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
         )}
    </div>
  )
}

export default Home
