import React,{Component} from 'react'

export default class Leftnav extends Component{
    changeTabState = (tab) => {
        this.props.openTab(tab)
    }
    render(){
        return(
            <div className="Leftnav hide-for-mobile">
                <p className="nav-option" onClick={() => this.changeTabState('mytopics')}>Mis Temas</p>
                <p className="nav-option" onClick={() => this.changeTabState('history')}>Historial</p>
                <p className="nav-option" onClick={() => this.changeTabState('missed')}>Sesiones Perdidas</p>
            </div>
        )
    }
}