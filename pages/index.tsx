import React, { useState, useEffect, useContext, useRef } from 'react'
import type { NextPage } from 'next'
import axios from 'axios'
import classes from '../styles/Home.module.css'

import BoxLoading from 'react-loading';
import Modal from '../components/modal/Modal';
import ImageGrid from '../components/imageGrid/ImageGird'
import MainTitle from '../components/mainTitle/MainTitle'
import SearchInput from '../components/searchInput/SearchInput'

import { Image } from '../interfaces/interfaces';
import { configContext } from '../context/context';
import { Pagination } from '../components/pagination/Pagination';
import ImageGallery from '../components/imageGallery/ImageGallery';
import Toggle from '../components/toggle/Toggle';


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
    const [viewChange, setViewChange] = useState(false);


    const { state } = useContext(configContext);
    const searchWord = state.searchWord;

    useEffect(() => {
        const fetchImages = async () => {
            viewChange && setViewChange(false)
            setIsLoading(true);
            const response =  searchWord ? await axios.get(`https://api.unsplash.com/search/photos?page=${page}&query=${searchWord}&per_page=9`, config) : await axios.get(`https://api.unsplash.com/photos?page=${page}&per_page=9`, config);
            const maxItem = parseInt(response.headers.link.split('=')[1].split('&')[0]);
            totalPages == 0 ? setTotalPages(Math.ceil(Number(maxItem) / 9)) : setTotalPages(totalPages);
            searchWord ? setImages(response.data.results) : setImages(response.data);
            setTimeout(() => {
                setIsLoading(false);
            },1000)
            console.log(response.data)
        }
        console.log("before => ", viewChange)
        localStorage.getItem("viewChange") === "true" ? setViewChange(true) : setViewChange(false);
        fetchImages();
    } , [page, searchWord]);

    useEffect(()=> {
        setPage(1);
    }, [searchWord])

    useEffect(()=> {
        localStorage.setItem("viewChange", viewChange.toString());
    },[viewChange])


    const handlePages = (updatePage:number) => setPage(updatePage)
    


    if (isLoading)  return <BoxLoading className="loading" type="spin" color="#f0a5a0" height={100} width={100} />
  return (
      <>
        <MainTitle />
        <SearchInput />
        <div className={classes.container}>
            <Toggle onClick={setViewChange} viewChange={viewChange}  />
                {!viewChange ? 
                <>
                    <ImageGrid images={images} setSelectedImage={setSelectedImage} />
                    <Pagination 
                        page={page}
                        totalPages={totalPages}
                        handlePagination={handlePages}
                        />
                </>  :
                <>
                    <ImageGallery images={images} setSelectedImage={setSelectedImage} />
                    <Pagination 
                        page={page}
                        totalPages={totalPages}
                        handlePagination={handlePages}
                        />
                    { selectedImage && (
                        <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
                    )} 
                </>
                }
        </div>
      </>
  )
}

export default Home
