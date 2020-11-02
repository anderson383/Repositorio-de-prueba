

import { useEffect, useState } from 'react';

import { getGifs } from '../helpers/getGifs';

export const useFecthGifts = (category) => {
    const [state, setState] = useState({
        loading: true,
        data: []
    })

    useEffect(() => {
        getGifs (category).then(imgs => {
            setTimeout(() => {
                setState({
                    data: imgs,
                    loading: false
                })
            }, 3000)
        })
    }, [category])

    return state
}