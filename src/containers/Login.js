import React,{Component} from 'react'
import Logo from '../img/logo.png'

export default class Login extends Component{
    constructor(){
        super()
        this.state = {
            email: "",
            password: "",
        }
    }
    fillForTest = () => {
       this.setState({email: 'TestOptilearn@gmail.com', password: 'ultrasecret'}) 
    }
    onSubmit = () => {
        this.props.toggleDarkBg(true,10)
        fetch('https://tranquil-meadow-47562.herokuapp.com/login', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
        .then(response=>response.json())
        .then(user=>{
            if(user === "Authentication failed"){
                alert("Credenciales no válidas")
                this.props.toggleDarkBg(false,0)
            }
            else{
                fetch('https://tranquil-meadow-47562.herokuapp.com/generate-sid', {
                    method: 'post',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        userId: user.id,
                    })
                })
                .then(res => res.json())
                .then(res => {
                    let expirationDate = new Date()
                    expirationDate.setTime(expirationDate.getTime() + (1000*60*60*24*30))
                    let newCookie =  'SID=' + res + ';expires=' + expirationDate + ';'
                    if(this.state.email !== 'TestOptilearn@gmail.com') document.cookie = newCookie
                })

                this.props.getUserData(user)
                this.props.onChangeRoute('home')
                this.props.toggleDarkBg(false,0)
            }
        })
    }
    onChangeLanguage = (lan) => {
        document.cookie = "LOC=" + lan + ";"
        this.props.changeLanguage(lan)
    }
    render(){
        return(
            <div className="Login">
                <img src={Logo} alt="logo"></img>
                <div className="form">
                    <div className='form-header'>
                        <p>{this.props.p.login}</p>
                        <select value={this.props.getCookie('LOC') === ''? 'en':this.props.getCookie('LOC')} onChange={ (event) => this.onChangeLanguage(event.target.value)}>
                            <option value="en">{this.props.p.langs.english}</option>
                            <option value="es">{this.props.p.langs.spanish}</option>
                        </select>
                    </div>
                    
                    <input onChange={event=>this.setState({email: event.target.value})} value = {this.state.email} placeholder={this.props.p.email} type="email"></input>
                    <input onChange={event=>this.setState({password: event.target.value})} value={this.state.password} placeholder={this.props.p.password} type="password"></input>
                    <button onClick={this.onSubmit}>{this.props.p.login}</button>
                    <button onClick={this.fillForTest}>Test Optilearn</button>
                    <p className="signin-link" onClick={()=>this.props.onChangeRoute('signup')}>{this.props.p.signup}</p>
                </div>
            </div>
        )
    }
}