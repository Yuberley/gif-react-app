import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Halo']);
    const [limit, setLimit] = useState('10');

    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={ setCategories } categories={ categories } setLimit={ setLimit }/>
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
