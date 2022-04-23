import React,{Component} from 'react'

export default class Timer extends Component{
    constructor(props){
        super(props);
        this.state = {
            running: true,
            timeElapsed: 0
        }
        if(this.props.timerState) console.log("timerState in timer is "+this.props.timerState)
        switch(this.props.timerState){
            case 1: this.startTimer();break;
            case 2: this.pauseTimer(); break;
            case 3: this.stopTimer(); break;
            default: this.restartTimer(); break;
        }
    }
    componentDidMount(){
        
    }
    tick = () => {
        this.setState(state=>({
            timeElapsed: this.state.timeElapsed + 1
        }))
    }
    restartTimer = () =>{
        this.setState(state=>({
            timeElapsed: 0
        }))
    }
    pauseTimer = () => {
        clearInterval(this.timerID)
    }
    startTimer = () => {
        this.timerID = setInterval(this.tick,1000)
    }
    stopTimer = () => {
        clearInterval(this.timerID)
        this.setState(state=>({
            timeElapsed: 0
        }))
    }
    componentWillUnmount(){
        clearInterval(this.timerID)
    }
    render(){
        return(
            <div className="Timer">
                <p>{(Math.floor(this.state.timeElapsed/60))<10? "0"+Math.floor(this.state.timeElapsed/60):Math.floor(this.state.timeElapsed/60)}</p>
                <p>:</p>
                <p>{(this.state.timeElapsed%60)<10? "0"+this.state.timeElapsed%60:this.state.timeElapsed%60}</p>
            </div>
        )
    }
}