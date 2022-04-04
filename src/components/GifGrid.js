import React from 'react'
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import PropTypes from 'prop-types';

export const GifGrid = ({ category, limit }) => {

    const { data:gifs, loading } = useFetchGifs( category, limit );

    return (
        <>
            <h3 className="text-capitalize">{ category } {gifs.length === 0 && <small className="text-muted">Not found</small>}</h3>

            { 
                loading &&  <div className="d-flex align-items-center">
                                <strong>Loading...</strong>
                                <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                            </div> 
            }


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

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
    limit: PropTypes.string.isRequired,
}