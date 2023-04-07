import ListOfGifs from '../components/ListOfGifs'
import { RaceBy } from '@uiball/loaders'
import Seeker from '../components/Seeker'
import useGifs from '../hooks/useGifs'

export default function SearchResults ({params}) {
    const { keyword } = params
    const { loading, gifs } = useGifs({ keyword })

    return <>
        {
            loading
            ? <RaceBy 
            size={300}
            lineWeight={10}
            speed={1.4} 
            color="black" 
           /> 
           : 
           <div class='App-Gifs'>
           < Seeker />
           <h3 className="App-title">
            {decodeURI(keyword)}
           </h3>
           <ListOfGifs gifs={gifs} />
           </div>
        }
    </>
}


