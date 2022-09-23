import {addPopular} from "../slices/filmSlice";

export const loadPopular = (dispatch) =>{
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=0739e9a04a979a0cd63d30e4f7443c63')
        .then(response=>response.json())
        .then(data=>dispatch(addPopular(data)))
}