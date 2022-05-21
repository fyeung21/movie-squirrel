// API key for movies
const API_KEY = `bc84b9110bc5129bbe699836c6acc130`

export { API_KEY }


const isFavourite = (arr,path,id) => {
    if (path === '/favourites') {
        return true;
    }

    if (arr.length === 0) {
        return false;
    }

    return arr.someObj((obj) => obj.id === id);
}

export default isFavourite;