


const apiKey = 'zNSQyMex1216SWzF8lfGJk9wAMVQ0Maj'

export default function getTrendingTerms() {
    const apiURL = 
    `https://api.giphy.com/v1/trending/searches?api_key=${apiKey}`
    
    
    
    return fetch(apiURL)
    .then(res => res.json())
    .then( response => {
    
        const {data} = response
        return data;
      })
}