import useSingleGif from '../hooks/useSingleGif'
import Gif  from '../components/Gif'
import { RaceBy } from '@uiball/loaders'
// import useSEO from '../hooks/useSEO'
import { Helmet }from 'react-helmet'

export default function Detail  ({ params }) {
    const {gif , isLoading} = useSingleGif({id:params.id})

    // const title = gif ? gif.title : 'Gif no encontrado'
    // useSEO({title: title, description: `Vista de ${title}` })
    if (isLoading) {
        return(
            <>
                <Helmet>
                    <title>Cargando...</title>
                </Helmet>
                    <RaceBy 
                    size={300}
                    lineWeight={10}
                    speed={1.4} 
                    color="black" 
                /> 
            </>
            
        )
    }
    if (!gif ) return null
    return (
        <>
        <Helmet>
                <title>RBG | {decodeURI(gif.title)}</title>
                <meta name="description" content={gif.title}></meta>
        </Helmet>
        <h3 className='App-title'>{gif.title}</h3>
        <Gif {...gif} />
        </>

    )
}