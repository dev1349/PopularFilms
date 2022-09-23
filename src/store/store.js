import {configureStore} from "@reduxjs/toolkit"
import filmSlice from "./slices/filmSlice";

const store = configureStore({reducer:
        {
            film:filmSlice
        }
    }
)

export default store