import { useContext } from 'react'
import GifsContext from '../context/GifContext'
import Gif  from '../components/Gif'

export default function Detail ({ params }) {
    const { gifs } = useContext(GifsContext)
    const gif= gifs.find(thegif => thegif.id === params.id)


    return (
        <Gif {...gif} />
    )
}