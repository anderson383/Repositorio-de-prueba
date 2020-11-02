import React, { useState } from 'react';
import propTypes from 'prop-types'
export const AddCategoria = ({ setCategorias }) => {
    const [texto, setCategoriaData] = useState('')
    const changeInputText = (event) => {
        setCategoriaData(event.target.value)
    }
    const addCagorie = (e) => {
        e.preventDefault()
        setCategorias(carts => [ texto, ...carts ])
        setCategoriaData('')
    }
    return (
        <>
            <p>{texto}</p>
            <form onSubmit={addCagorie} >
                <input type="text" name="texto" value={texto} onChange={changeInputText} />
            </form>
        </>
    )
}
AddCategoria.propTypes = {
    setCategorias: propTypes.func.isRequired
}
