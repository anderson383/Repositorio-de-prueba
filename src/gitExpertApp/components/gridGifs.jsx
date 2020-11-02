import React from 'react';
// import React from 'react';
import { GridItem } from './gridItem';
// import { getGifs } from '../helpers/getGifs';
import { useFecthGifts } from '../hooks/useFecthGifts'


export const GifGrid = ({ category }) => {
    const { data:images, loading } = useFecthGifts(category);
    return (
        <>
            <h3>{category}</h3>
            {loading && <p>Cargando...</p>}
            <div className="container-card">
                {
                    images.map(item => (
                        <GridItem key={item.id} dataImg={item} ></GridItem>
                    ))
                }
            </div>
        </>
    )
}