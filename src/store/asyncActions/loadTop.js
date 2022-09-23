import {addTop} from "../slices/filmSlice";

export const loadTop = (dispatch) =>{
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=0739e9a04a979a0cd63d30e4f7443c63')
        .then(response=>response.json())
        .then(data=>dispatch(addTop(data)))
}