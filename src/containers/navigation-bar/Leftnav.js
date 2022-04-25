import React,{Component} from 'react'

export default class Leftnav extends Component{
    changeTabState = (tab) => {
        this.props.openTab(tab)
    }
    render(){
        return(
            <div className="Leftnav hide-for-mobile">
                <p className="nav-option" onClick={() => this.changeTabState('mytopics')}>{this.props.p.myTopics}</p>
                <p className="nav-option" onClick={() => this.changeTabState('history')}>{this.props.p.history}</p>
                <p className="nav-option" onClick={() => this.changeTabState('missed')}>{this.props.p.missedSessions}</p>
            </div>
        )
    }
}