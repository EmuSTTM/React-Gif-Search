
import { useContext, useState, useEffect } from 'react'
import GifsContext from '../context/GifContext'
import getSingleGif from '../services/getSingleGif'


export default function useSingleGif ({ id }){
    const { gifs } = useContext(GifsContext)
    const gifFromCache = gifs.find(thegif => thegif.id === id)

    const [ gif, setGif ] = useState(gifFromCache)
    
    useEffect(()=>{
        if(!gif){
            getSingleGif({id:id}).then(gif => setGif(gif))
        }
    },[gif, id])

    return { gif }
}