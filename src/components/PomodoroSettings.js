import React,{Component} from 'react'

export default class PomodoroSettings extends Component{
    constructor(props){
        super(props);
    }
    play = () =>{
        this.props.setTimerState(1);
    }
    stop = () =>{
        this.props.setTimerState(3);
    }
    pause = () =>{
        this.props.setTimerState(2);
    }
    render(){
        return(
            <div className="PomodoroSettings">
                <div className="settings">
                    <div className="settings-row">
                        <p>Sesiones a realizar</p>
                        <input type="number" name="" id=""/>
                    </div>
                    <div className="settings-row">
                        <p>Tiempo de concentración</p>
                        <input type="number" name="" id=""/>
                    </div>
                    <div className="settings-row">
                        <p>Descanso corto</p>
                        <input type="number" name="" id=""/>
                    </div>
                    <div className="settings-row">
                        <p>Descanso largo</p>
                        <input type="number" name="" id=""/>
                    </div>
                    <div className="settings-row">
                        <p>Sesiones antes del descanso largo</p>
                        <input type="number" name="" id=""/>
                    </div>
                </div>
                <div className="clock-buttons">
                    <button id="play" onClick={this.play}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13">
                        <path id="Icon_awesome-play" data-name="Icon awesome-play" d="M10.421,5.453,1.778.169A1.172,1.172,0,0,0,0,1.218V11.782a1.178,1.178,0,0,0,1.778,1.049L10.421,7.55a1.239,1.239,0,0,0,0-2.1Z" transform="translate(0 -0.002)" fill="#fff"/>
                        </svg>
                    </button>
                    <button id="pause" onClick={this.pause}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13">
                            <path id="Icon_awesome-pause" data-name="Icon awesome-pause" d="M4.179,15.18H1.393A1.393,1.393,0,0,1,0,13.787V3.573A1.393,1.393,0,0,1,1.393,2.18H4.179A1.393,1.393,0,0,1,5.571,3.573V13.787A1.393,1.393,0,0,1,4.179,15.18ZM13,13.787V3.573A1.393,1.393,0,0,0,11.607,2.18H8.821A1.393,1.393,0,0,0,7.429,3.573V13.787A1.393,1.393,0,0,0,8.821,15.18h2.786A1.393,1.393,0,0,0,13,13.787Z" transform="translate(0 -2.18)" fill="#fff"/>
                        </svg>
                    </button>
                    <button id="stop" onClick={this.stop}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13">
                            <rect id="Rectángulo_87" data-name="Rectángulo 87" width="13" height="13" fill="#fff"/>
                        </svg>
                    </button>
                </div>
            </div>
        )
    }
}