

import React, {useState} from "react";
import {Switch,Route,Link } from 'react-router-dom'
import {connect} from 'react-redux'
import TizimgaKirish from "./Pages/TizimgaKirish";
import {GetUser,SaveUser} from './Store/redux/UserReducer'
import Cabinet from "./Pages/Cabinet";
import './App.css'
function App(props) {

    const [Users,setUsers] = useState('')

    function SaveUsers(data) {

       props.SaveUser(data)

        setUsers(data)

    }
    return(
      <div className={'container-fluid'}>
          <div className="row">
              <div className="col-md-12">
                  <div className="navbar">

                      <div className="col-md-6 offset-5">
                         <Link to={'/tizim'}> <button className={'btn btn-add'}> Sign In</button> </Link>
                      </div>
                  </div>
              </div>


              <div className="col-md-12">
                  <Switch>
                      <Route path={'/tizim'} render={(props)=><TizimgaKirish props={props} tizimUser={setUsers} />} />
                      <Route path={'/cabinet'} render={(props)=><Cabinet props={props} Users={Users}/>} />
                  </Switch>

              </div>
          </div>

      </div>
    )
}
export default connect(({user:{users}})=>({users}),{GetUser,SaveUser})


(App)