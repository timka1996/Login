import { createSlice} from '@reduxjs/toolkit'
import {apicalls} from '../Actions/Actions'
import { toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const user  = createSlice({
    name:'user',
    initialState:{
        users:[],
    },
    reducers:{
        GetFromResponse:(state,action)=>{
            state.users = action.payload

        },
        UserSaved: (state,action)=>{
            state.users.push(action.payload)

            toast.success('Malumot Saqlandi')
        },

    },
})
//action
export const GetUser =()=> apicalls({
    url:'/users',
    method:'get',
    successtype:user.actions.GetFromResponse.type
})
export const SaveUser =(data)=> apicalls({
    url:'/users',
    method:'post',
    data,
    successtype:user.actions.UserSaved.type
})

export default user.reducer

