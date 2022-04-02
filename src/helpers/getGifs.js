

export const getGifs = async( category, limit ) => { 

        const key = 'KPnZmVBZBguhcwC4evkI3eeOYdO8AtLF'
        limit == '' ? limit = 10 : limit = limit;
        const URL = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=${ limit }&api_key=${ key }`;

        const response = await fetch( URL );
        const { data } = await response.json();

        const gifs = data.map( gif => {
            return {
                id: gif.id,
                title: gif.title,
                url: gif.images?.downsized_medium.url
            }
        })

        // console.log( gifs );
        return gifs;

}
