
import axios from 'axios';

export const getGifs = async (category) => {
    let respuesta = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=R7RJjPDcvzDKZC7alVjnmYHdRy42jdi3&q=${encodeURI(category)}&limit=8`)
    let { data } = respuesta.data
    return data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
}