import { configureStore} from "@reduxjs/toolkit";
import user from './redux/UserReducer'
import api from "./middleware/apiCals";
 export default configureStore({
    reducer:{
        user
    },
    middleware:[
      api
    ]

})
