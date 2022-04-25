import React,{Component} from 'react'
import clock from '../img/clock.png'
import Timer from './Timer'

export default class PomodoroClock extends Component{
    constructor(props){
        super(props);
        this.text = this.props.p.focus
        
        this.clockStyle = "clock "

        switch(props.timerState){
            case 1: this.clockStyle+="runTimer"; break;
            case 2: this.clockStyle+="pause"; break;
            default: this.clockStyle = "clock"; break;
        }
    }

    render(){
        return(
            <div className="PomodoroClock">
                <p>{this.text}</p>
                <div className="clock">
                    <svg className="clock-hand runTimer" xmlns="http://www.w3.org/2000/svg" width="17" height="52.5" viewBox="0 0 17 52.5">
                        <g id="Grupo_116" data-name="Grupo 116" transform="translate(-603 -594.5)">
                            <g id="Elipse_3" data-name="Elipse 3" transform="translate(603 630)" fill="none" stroke="#000" strokeWidth="4">
                            <circle cx="8.5" cy="8.5" r="8.5" stroke="none"/>
                            <circle cx="8.5" cy="8.5" r="6.5" fill="none"/>
                            </g>
                            <line id="Línea_5" data-name="Línea 5" y2="35" transform="translate(611.5 596.5)" fill="none" stroke="#000" strokeLinecap="round" stroke-width="4"/>
                        </g>
                    </svg>
                    <img src={clock} alt="clock"/>
                </div>
                <Timer timerState={this.props.timerState}/>
            </div>
        )
    }
}