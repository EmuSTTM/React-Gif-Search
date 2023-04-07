
import Seeker from '../components/Seeker'
import useGifs from '../hooks/useGifs'
import ListOfGifs from '../components/ListOfGifs'
import TrendingSearches from '../components/trending/LazyTrending'

export default function Home() {

    const { gifs } = useGifs()

    return(
        <div className="Link-container">
            < Seeker />
            <h4>Lo último buscado</h4>
            <ListOfGifs gifs={gifs}/>
            <TrendingSearches />
      </div>
    )
}