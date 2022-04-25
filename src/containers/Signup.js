import React,{Component} from 'react'
import validator from 'email-validator'

export default class Signup extends Component{
    constructor(){
        super()
        this.state = {
            name: "",
            lastname: "",
            email: "",
            password: "",
            passwordVerification: "",
            securityCode: "moreletii2021"
        }
    }
    onSubmit = () => {
        if(this.state.securityCode !== "moreletii2021"){
            alert("Please, type the security code to sign up")
            return
        }
        if(!validator.validate(this.state.email)){
            alert("Invalid email")
            return
        }
        if(this.state.passwordVerification !== this.state.password){
            alert("Passwords don't match")
            return
        }
        if(!this.state.name||!this.state.lastname||!this.state.email||!this.state.password||!this.state.passwordVerification){
            alert("Please, fill in all fields.")
            return
        }
        this.props.toggleOnLS()
        fetch('https://tranquil-meadow-47562.herokuapp.com/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name,
                lastname: this.state.lastname
            })
        })
        .then(response=>response.json())
        .then(user=>{
            if(user !== "Authentication failed"){
                this.props.onChangeRoute('login')
            }
            this.props.toggleOffLS()
        })   
    }
    render(){
        return(
            <div className="Signup">
                <div className="form">
                    <p>{this.props.p.signup}</p>
                    <div>
                        <input onChange={event=>this.setState({name: event.target.value})} placeholder={this.props.p.name} type="text"></input>
                        <input onChange={event=>this.setState({lastname: event.target.value})} placeholder={this.props.p.lastname} type="text"></input>
                        <input onChange={event=>this.setState({email: event.target.value})} placeholder={this.props.p.email} type="email"></input>
                        <input onChange={event=>this.setState({password: event.target.value})} placeholder={this.props.p.password} type="password"></input>
                        <input onChange={event=>this.setState({passwordVerification: event.target.value})} placeholder={this.props.p.repeatYourPassword} type="password"></input>
                    </div> 
                    <button onClick={this.onSubmit}>{this.props.p.signup}</button>
                    <p onClick={()=>this.props.onChangeRoute("login")} className="signup-link">{this.props.p.login}</p>
                </div>
            </div>
        )
    }
}