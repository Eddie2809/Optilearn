import React,{Component} from 'react'

export default class SwitchBotton extends Component{
    constructor(props){
        super(props)
        this.state = {mode: "newSession"}
    }
    turnMode = () =>{
        this.setState(state =>({
            mode: state.mode==="newSession"? "timer":"newSession"
        }))
        this.props.shiftMode()
    }
    render(){
        return(
            <div className="SwitchBotton" onClick={this.turnMode}>
                <svg xmlns="http://www.w3.org/2000/svg" width="53" height="29" viewBox="0 0 53 29">
                    <g id="Grupo_104" data-name="Grupo 104" transform="translate(-312.091 -956)">
                        <rect id="Rectángulo_160" data-name="Rectángulo 160" width="53" height="29" rx="14" transform="translate(312.091 956)" fill="#007e84"/>
                        <g id="Icon_feather-clock" data-name="Icon feather-clock" transform="translate(317 961)">
                        <path id="Trazado_1" data-name="Trazado 1" d="M21,12a9,9,0,1,1-9-9A9,9,0,0,1,21,12Z" transform="translate(-3 -3)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                        <path id="Trazado_2" data-name="Trazado 2" d="M18,9v4.59l4.063,1.53" transform="translate(-9 -4.121)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                        </g>
                        <path id="Icon_awesome-book-reader" data-name="Icon awesome-book-reader" d="M12.375,3.375A3.375,3.375,0,1,0,9,6.75,3.375,3.375,0,0,0,12.375,3.375Zm-4.163,5.1C6.126,7.2,2.748,6.848,1.048,6.752A.973.973,0,0,0,0,7.7v7.833a.967.967,0,0,0,.931.951,18.911,18.911,0,0,1,6.786,1.457.489.489,0,0,0,.72-.417V8.879a.468.468,0,0,0-.226-.4Zm8.74-1.724c-1.7.1-5.079.448-7.164,1.724a.477.477,0,0,0-.225.409v8.641a.491.491,0,0,0,.722.418,18.918,18.918,0,0,1,6.784-1.455A.967.967,0,0,0,18,15.538V7.7A.973.973,0,0,0,16.952,6.752Z" transform="translate(342.091 961)" fill="#fff"/>
                    </g>
                </svg>

                <div className={"circle " + this.state.mode}></div>
            </div>

        )
    }
}