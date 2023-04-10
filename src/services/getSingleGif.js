
const apiKey = 'zNSQyMex1216SWzF8lfGJk9wAMVQ0Maj'

export default function getGifs({id}) {
    const apiURL = 
    `https://api.giphy.com/v1/gifs/${id}?api_key=${apiKey}`
    
    
    
    return fetch(apiURL)
    .then(res => res.json())
    .then( response => {
        const { data } = response
        const { images, title, id } = data
        const { url } = images.downsized_medium 
        return {title, id, url}
      })
}