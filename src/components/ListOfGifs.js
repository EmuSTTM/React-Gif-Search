import Gif from './Gif'
import { useState, useEffect } from 'react';
import getGifs from '../services/getGifs';

export default function ListOfGifs ({keyword}) { 
        const [gifs, setGifs]= useState([])


        useEffect(()=>{
        getGifs({keyword}).then(gifs => setGifs(gifs));
        }, [keyword])

        return <div>
            {
                gifs.map(({id, url, title}) => {
                    <Gif 
                    key={id}
                    title={title} 
                    url={url} 
                    id={id}
                    />
                })
            }
        </div>
       
}