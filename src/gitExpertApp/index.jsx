import React, { useState } from 'react';
import { AddCategoria } from './components/addCategoria';
import { GifGrid } from './components/gridGifs';

export const GitExpertAPP = () => {

    const [categorias, setCategorias] = useState(['Hola'])
    // const categorias = 
    // let añadirElemento = () => setCategorias([...categorias, 'Nuevo Elemento'])
    // let añadirElemento = () => setCategorias(catego => [...catego, 'Nuevo Elemento'])

     return (
        <>
            <div className="container">
                <h2>Gif expert app</h2>
                <hr></hr>
                 <AddCategoria setCategorias={setCategorias} ></AddCategoria>
                    {
                         categorias.map((item, i) => (
                             
                             <GifGrid key={i} category={item} ></GifGrid>
                        ))
                 }
                 
            </div>
        </>
    )
}
