import React,{Component} from 'react'
import logo from '../../img/logo.png'

export default class Logo extends Component{
    render(){
        return(
            <div className="Logo">
                <img src={logo} alt="logo"/>
            </div>
        )
    }
}