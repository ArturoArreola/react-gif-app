export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=J2J9xUh3KZZ3IQd4akvhMU1gyU9vaBPi`;
    const response = await fetch(url);
    const {data} = await response.json();
    const jsonGifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });
    return jsonGifs;
}