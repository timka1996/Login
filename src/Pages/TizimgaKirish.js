import {AvForm,AvField} from 'availity-reactstrap-validation'
import React from "react";
import {useEffect, useState} from 'react'
import {connect} from "react-redux";
import {GetUser} from "../Store/redux/UserReducer";
import {toast} from "react-toastify";
import {useHistory} from 'react-router-dom';
import {Switch,Route,Link } from 'react-router-dom'
import Cabinet from "../Pages/Cabinet";

function TizimgaKirish(props) {

    function change(){
        console.log()
        const a = document.getElementById('ph').value 
        const b = document.getElementById('pass').value  
            if(a=='developer21' && b==123456){
                document.getElementById('login').disabled = false
            }else{
                document.getElementById('login').disabled = true
            }

    }

    const history = useHistory();

    useEffect(()=>{

        props.GetUser()

    },[])

    function Tizim(event,values) {
            if(values.phone == 'developer21' && values.password == 123456){
               toast.success('Tizimga kirdingiz')
            
            }
            else if(values.phone !== 'developer21' && values.password !== 123456){
                toast.error('Password yoki Phone xato')
            }


    }

    return(
        <div className={'row'}>
            <div className="col-md-4 offset-4">
            <div className="tizim">
               <div className="card">
                    <div className="card-header mt-3 text-center">
                        <h2>Вход в систему</h2>
                    </div>
                    <div className="card-body">
                        <AvForm id={'tizim'} onValidSubmit={Tizim}>
                        <AvField className={'my-3'} id='ph' onChange={(a)=>change(a)} name={'phone'} type={'text'} placeholder={'Login'} required/>
                        <AvField className={'my-3'} id='pass'  onChange={(b)=>change(b)} name={'password'} type={'password'} placeholder={'password'} required/>
                        </AvForm>

                    </div>
                    <div className="card-footer d-flex justify-content-end">
                    <Link to={'/cabinet'}> <button disabled id='login' className={'btn btn-primary mx-3'} form={'tizim'}>
                            Войти
                        </button> </Link>
                        <button className={'btn btn-danger'} onClick={() => history.goBack()}>Отменить</button>

                    </div>
                </div>
                <AvForm>

                </AvForm>

            </div>
            </div>
            <div className="col-md-12">
                  <Switch>
                      <Route path={'/cabinet'} component={Cabinet} />
                  </Switch>

              </div>
        </div>
    )

}

export default connect(({user:{users}})=>({users}),{GetUser})(TizimgaKirish)