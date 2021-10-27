import axios from 'axios'
 const api =({dispatch}) => (next) => (action) => {
    if(action.type!=='api/apicalls'){
   next(action)
       return
    }

    next(action)

    const {url,method,data,successtype} = action.payload

    axios({
       baseURL:'http://localhost:3009/',
       url,
       method,
       data
    }).then(res=>{
            dispatch({
                type:successtype,
                payload:res.data

            })

        }).catch(err=>{
        console.log(err)
    })


 }
export default api