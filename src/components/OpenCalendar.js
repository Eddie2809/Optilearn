import React,{Component} from 'react'

export default class Calendar extends Component{
    render(){
        return(
            <div onClick={()=>this.props.toggleDarkBg(true,9)} className="openCalendar hide-for-mobile">
                <p>Abrir calendario</p>
            </div>
        )
    }   
}

