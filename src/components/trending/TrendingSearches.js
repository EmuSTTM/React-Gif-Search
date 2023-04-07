import getTrendingTerms from '../../services/getTrendingTerms'
import { useState, useEffect } from 'react'
import Category from '../Category'


// Lista de las tendencias
export default function TrendingSearches() {
    const [trends, setTrends] = useState([])

    useEffect(() => {
        getTrendingTerms()
        .then(setTrends)
    }, [])

    return <Category options={trends} name='Tendencias'/>
}
