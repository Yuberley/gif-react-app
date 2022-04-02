import React from 'react'
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category, limit }) => {

    const { data:gifs, loading } = useFetchGifs( category, limit );

    return (
        <>
            <h3>{ category }</h3>

            { loading && <p> Loading... </p>}

            <div className="card-grid">
                
                {
                    gifs.map( gif => (
                        <GifGridItem
                            key={ gif.id } 
                            { ...gif } 
                        />
                    ))
                }
                
            </div>
        </>
    )
}