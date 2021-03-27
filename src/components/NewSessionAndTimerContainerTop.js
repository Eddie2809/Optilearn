import React,{Component} from 'react'
import SwitchBotton from './SwitchBotton'

export default class NewSessionAndTimerContainerTop extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="NewSessionAndTimerContainerTop">
                <p className={this.props.mode? "flipX":""}>Temporizador Pomodoro</p>
                <p className={this.props.mode? "":"flipX"}>Registrar nueva sesión de estudio</p>
                {/*<SwitchBotton shiftMode={this.props.shiftMode}/>*/}
            </div>
        )
    }
}