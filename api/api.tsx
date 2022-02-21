import axios from 'axios'

const config = {
    headers: {
        Authorization: `Client-ID ${process.env.NEXT_PUBLIC_KEY}`,
    }
}

interface Props {
    page: number,
    searchWord: string
}

 export const fetchImages = async ({ page, searchWord} : Props) => {
    const { data } = searchWord ? await axios.get(`https://api.unsplash.com/search/photos?page=${page}&query=${searchWord}&per_page=9`, config) : await axios.get(`https://api.unsplash.com/photos?page=${page}&per_page=9`, config);
    return data
}