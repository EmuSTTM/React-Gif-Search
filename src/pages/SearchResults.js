import ListOfGifs from '../components/ListOfGifs'
import { RaceBy } from '@uiball/loaders'
import Seeker from '../components/Seeker'
import useGifs from '../hooks/useGifs'
import useNearScreen from '../hooks/useNearScreen'
import { useRef, useEffect, useCallback } from 'react'
import debounce from 'just-debounce-it'

export default function SearchResults ({params}) {
    const { keyword } = params
    const { loading, gifs, setPage } = useGifs({ keyword })
    const externalRef = useRef()
    const { isNearScreen } = useNearScreen({ externalRef: loading ? null : externalRef, once: false })



    const debounceHandleNextPage = useCallback(() => debounce(
        setPage(prevPage => prevPage + 1), 200
    ),[setPage])

    useEffect(()=>{
        if(isNearScreen) debounceHandleNextPage()
    },[isNearScreen, debounceHandleNextPage])

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
           <div className='App-Gifs'>
           < Seeker />
           <h3 className="App-title">
            {decodeURI(keyword)}
           </h3>
           <ListOfGifs gifs={gifs} />
           <div id='visor' ref={externalRef}></div>
           </div>
           
        }
    </>
}


