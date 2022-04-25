import React,{Component} from 'react'
import SwitchBotton from './SwitchBotton'

export default class NewSessionAndTimerContainerTop extends Component{
    render(){
        return(
            <div className="NewSessionAndTimerContainerTop">
                <p className={this.props.mode? "flipX":""}>{this.props.p.pomodoroTimer}</p>
                <p className={this.props.mode? "":"flipX"}>{this.props.p.addNewStudySession}</p>
                {<SwitchBotton shiftMode={this.props.shiftMode}/>}
            </div>
        )
    }
}