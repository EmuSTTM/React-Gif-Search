import './Gif.css'
import { Link } from 'wouter'
import { memo } from 'react'

 function Gif ({ title, id , url }) {
    return(
        <div className="Gif">
            <Link to={'/gif/' + id} className="Gif-link">
                <h4>{title}</h4>
                <img loading='lazy' alt={title} src={url}></img>
            </Link>
        </div>
    )
}

export default memo(Gif)