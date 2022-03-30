import React, {useState, useEffect} from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const key = 'KPnZmVBZBguhcwC4evkI3eeOYdO8AtLF'
    const URL = `https://api.giphy.com/v1/gifs/search?q=Rick&limit=10&api_key=${key}`;

    const [images, setImages] = useState([]);

    // Execute the fetch request once
    useEffect( () => {
        getGifs();
    }, [])

    const getGifs = async () => { 
        const response = await fetch( URL );
        const { data } = await response.json();

        const gifs = data.map( gif => {
            return {
                id: gif.id,
                title: gif.title,
                url: gif.images?.downsized_medium.url
            }
        })

        console.log( gifs );
        setImages( gifs );

    }

    return (
        <>
            <h3>{category}</h3>
            
            {
                images.map( gif => (
                    <GifGridItem
                        key={ gif.id } 
                        gif = { gif } 
                    />
                ))
            }
            
        </>
    )
}
