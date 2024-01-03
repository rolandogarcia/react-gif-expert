

export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=cN4CPCxMR6J0vpDiayOYGW6ges8dV43X&q=${ category }&limit=10`;
    const resp = await fetch( url );
    const { data } =  await resp.json();
  
  
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
  
  
    // console.log(resp);
    // console.log(data);
    // console.log(gifs);
    return gifs;
  }