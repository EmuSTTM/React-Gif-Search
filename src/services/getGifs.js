
const apiKey = 'zNSQyMex1216SWzF8lfGJk9wAMVQ0Maj'

export default function getGifs({keyword = 'morty', page = 0, limit = '10'} = {}) {
    const apiURL = 
    `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${limit}&offset=${limit * page}&rating=r&lang=en`
    
    
    
    return fetch(apiURL)
    .then(res => res.json())
    .then( response => {
    
        const {data} = response
        const gifs = data.map(image => {
            const { images, title, id } = image;
            const { url } = images.downsized_medium;
            return { title, id , url }
        }
             )
        return gifs;
      })
}