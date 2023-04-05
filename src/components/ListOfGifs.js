import Gif from './Gif'

import './ListOfGifs.css'

export default function ListOfGifs ({ gifs}) { 
        

        return <div className="ListOfGifs">
            {
                gifs.map(({id, url, title}) => 
                    <Gif 
                    key={id}
                    title={title} 
                    url={url} 
                    id={id}
                    />
                )
            }
        </div>
       
}