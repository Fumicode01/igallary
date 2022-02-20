import React, { useState, useEffect, useLayoutEffect, useContext, useRef } from 'react'
import type { NextPage } from 'next'
import axios from 'axios'
import BoxLoading from 'react-loading';
import classes from '../styles/Home.module.css'


import Modal from '../components/modal/Modal';
import ImageGrid from '../components/imageGrid/ImageGird'

import { Image } from '../interfaces/interfaces';
import { configContext } from '../context/context';
import { Pagination } from '../components/pagination/Pagination';
import ImageCard from '../components/imageCard/ImageCard';
import ImageGallery from '../components/imageGallery/ImageGallery';


const config = {
    headers: {
        Authorization: `Client-ID ${process.env.NEXT_PUBLIC_KEY}`,
    }
}

const Home: NextPage = () => {
    const [images, setImages] = useState<Image[]>([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedImage, setSelectedImage] = useState<Image | null>(null);
    const firstUpdate = useRef(true);


    const { state, dispatch } = useContext(configContext);
    const searchWord = state.searchWord;

    useEffect(() => {
        const fetchImages = async () => {
            setIsLoading(true);
            const response = await axios.get(`https://api.unsplash.com/photos?page=${page}&per_page=9`, config);
            const maxItem = parseInt(response.headers.link.split('=')[1].split('&')[0]);
            totalPages == 0 ? setTotalPages(Math.ceil(Number(maxItem) / 9)) : setTotalPages(totalPages);


            await setImages(response.data);
            setTimeout(() => {
                setIsLoading(false);
            },1000)
        }
        fetchImages();
    } , [page]);

    useLayoutEffect(() => {
        if(firstUpdate.current){
            firstUpdate.current = false;
            return
        }
        const fetchImages = async () => {
            setIsLoading(true);
            setPage(1)
            const response = await axios.get(`https://api.unsplash.com/search/photos?page=1&query=${searchWord}&per_page=9`, config);
            setTotalPages(response.data.total_pages);


            await setImages(response.data.results);
            setTimeout(() => {
                setIsLoading(false);
            },1000)
        }
        fetchImages();
    } , [searchWord]);

    const handlePages = (updatePage:number) => setPage(updatePage)


  return (
    <div className={classes.container}>
        {/* {isLoading 
            ? <BoxLoading className="loading" type="spin" color="#f0a5a0" height={100} width={100} /> 
            : (
                <>
                    <ImageGrid images={images} setSelectedImage={setSelectedImage} />
                    <Pagination 
                        page={page}
                        totalPages={totalPages}
                        handlePagination={handlePages}

                        />
                </>
                )}
        { selectedImage && (
        <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
         )} */}

{isLoading 
            ? <BoxLoading className="loading" type="spin" color="#f0a5a0" height={100} width={100} /> 
            : (
                <>
                    <ImageGallery images={images} setSelectedImage={setSelectedImage} />
                    <Pagination 
                        page={page}
                        totalPages={totalPages}
                        handlePagination={handlePages}

                        />
                </>
                )}
                { selectedImage && (
        <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
         )} 
    </div>
  )
}

export default Home
