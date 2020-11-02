import React from 'react';

export const GridItem = ({ dataImg }) => {
    return (
        <>
            <div className="card-custom animate__animated animate__bounce" >
                <img className="card-img" src={dataImg.url} alt="img"></img>
                <p>{dataImg.title}</p>
            </div>
        </>
    )
}