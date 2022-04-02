import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { AddTags } from './components/AddTags';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Halo']);
    const [limit, setLimit] = useState('10');

    return (
        <>
            <div className="title-logo">
                <img className="logo" src="./logo192.png"></img>
                <h2 className="title">Gif React App</h2>
            </div>
            <AddCategory setCategories={ setCategories } categories={ categories } setLimit={ setLimit }/>
            <hr />
                { 
                    categories.map( category => (
                        <AddTags 
                            key={ category } 
                            category={ category } 
                        />
                    ))
                }
            <hr />

            <ol>
                {
                    categories.map( category => (
                        <GifGrid
                            key={ category }
                            category={ category }
                            limit={ limit }
                        />
                    ))
                }
            </ol>

        </>
    );

}
