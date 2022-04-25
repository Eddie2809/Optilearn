import React,{Component} from 'react'
import NewSessionAndTimerContainerTop from '../components/NewSessionAndTimerContainerTop'
import PomodoroContainer from './PomodoroContainer'
import NewSessionContainer from './NewSessionContainer'

export default class TimerContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            mode: 1,
            timerState: 0
        }
    }

    setTimerState = (State) => {
        this.setState({timerState: State})
    }
    shiftMode = () =>{
        this.setState({mode: !this.state.mode})
    }

    render(){
        return(
            <div className = "NewSessionAndTimerContainer">
                <NewSessionAndTimerContainerTop p={this.props.p} shiftMode={this.shiftMode} mode={this.state.mode}/>
                <PomodoroContainer p={this.props.p} mode={this.state.mode} setTimerState={this.setTimerState} timerState={this.state.timerState}/>
                <NewSessionContainer p={this.props.p} userCustomizedReviews={this.props.userCustomizedReviews} newTopic={this.props.newTopic} toggleDarkBg={this.props.toggleDarkBg} userId={this.props.userId} mode={this.state.mode}/>
            </div>
        )
    }
}