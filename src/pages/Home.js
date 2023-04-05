import { Link } from 'wouter'
import Seeker from '../components/Seeker'
import useGifs from '../hooks/useGifs'
import ListOfGifs from '../components/ListOfGifs'

const POPULAR_GIFS = ["Matrix", "Leon Kennedy", "Minecraft", "Luffy"]

export default function Home() {

    const { gifs } = useGifs()

    return(
        <div className="Link-container">
                
            <h3>Los gifs más populares</h3>
            < Seeker />
                <ul>
                {
                    POPULAR_GIFS.map(popularGif => (
                        <li key={popularGif}>
                            <Link to={'/search/' + popularGif}>
                                Gifs de {popularGif}
                            </Link>
                        </li>
                    ))
                }
                </ul>
                <br/>

                <h4>Lo último buscado</h4>
                <ListOfGifs gifs={gifs}/>
      </div>
    )
}