import {createSlice} from "@reduxjs/toolkit";
const initialState= {popular:null}

export const filmSlice=createSlice(
    {
        name:'film',
        initialState,
        reducers: {
            addPopular: (state,action)=> {
                state.popular=action.payload.results
            }
            ,
            addFilm: (state,action) => {
                state.push(action.payload)
            },
            removeLast: (state,action) =>{
                state.pop()
            },
            addTop: (state,action) =>{
                state.top=action.payload.results
            }
        }

    }

    )
export const {addPopular,addTop}= filmSlice.actions
export default filmSlice.reducer