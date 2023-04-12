import ListOfGifs from '../components/ListOfGifs'
import { RaceBy } from '@uiball/loaders'
import Seeker from '../components/Seeker'
import useGifs from '../hooks/useGifs'
import useNearScreen from '../hooks/useNearScreen'
import { useRef, useEffect, useCallback } from 'react'
import debounce from 'just-debounce-it'
// import useSEO from '../hooks/useSEO'
import { Helmet } from 'react-helmet'
export default function SearchResults ({params}) {
    const { keyword, rating } = params
    const { loading, gifs, setPage } = useGifs({ keyword, rating })
    const externalRef = useRef()
    const { isNearScreen } = useNearScreen({ externalRef: loading ? null : externalRef, once: false })

    // const title = gifs ? 'Resultados de ' + keyword: ''
    // useSEO({title, description : `Resultados de ${keyword}`})

    const debounceHandleNextPage = useCallback(() => debounce(
        setPage(prevPage => prevPage + 1), 200
    ),[setPage])

    useEffect(()=>{
        if(isNearScreen) debounceHandleNextPage()
    },[isNearScreen, debounceHandleNextPage])

    return <>
        {
            loading
            ? 
            <>
            <Helmet>
                <title>Loading...</title>
            </Helmet>
            <RaceBy 
            size={300}
            lineWeight={10}
            speed={1.4} 
            color="black" 
           /> 
           </>
           : 
           <>
           <Helmet>
                <title>RBG | Resultados de {keyword}</title>
                <meta name="description" content={keyword}></meta>
           </Helmet>
           <div className='App-Gifs'>
        < Seeker initialKeyword={keyword} initialRating={rating} />
           <h3 className="App-title">
            {decodeURI(keyword)}
           </h3>
           <ListOfGifs gifs={gifs} />
           <div id='visor' ref={externalRef}></div>
           </div>
           </>
           
        }
    </>
}


