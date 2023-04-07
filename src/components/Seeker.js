
import { useLocation } from 'wouter'
import { useState } from 'react'

export default function Seeker () {
    const [ keyword, setKeyWord] = useState('')
    const [path, pushLocation] = useLocation()
    
    const handleSubmit = evt => {
        evt.preventDefault()
        // Esto es un custom hook creado por otros -->
        pushLocation('/search/' + keyword)   
    }

    const handleChange = evt => {
        setKeyWord(evt.target.value)
    }
    
    
    
    return(
        <form onSubmit={handleSubmit}>
        <input className="Seeker-input" placeholder="Busca tu gif aquí" onChange={handleChange}type="text" value={keyword}></input>
      </form>
    )
}