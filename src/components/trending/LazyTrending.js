
import useNearScreen from '../../hooks/useNearScreen'
import { lazy } from 'react'

const TrendingSearches = lazy(
    // Esta es una importación dinámica. 
    () =>  import('./TrendingSearches')
)

// renderiza las tendencias con un lazy loading.
export default function LazyTrending () {
    const {isNearScreen, fromRef }= useNearScreen()

    return <div ref={fromRef}>
        {isNearScreen ? <TrendingSearches /> : null}

    </div>
}