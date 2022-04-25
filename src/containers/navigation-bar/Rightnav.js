import React,{Component} from 'react'

export default class Rightnav extends Component{
    changeTabState = (tab) => {
        if(this.props.openedTab===tab){
            this.props.openTab('none');
        }
        else if(this.props.openedTab==='none'){
            this.props.openTab(tab)
        }
        else{
            this.props.openTab(tab)
        }
    }
    render(){
        return(
            <div className="Rightnav hide-for-mobile">
                <p className="nav-option" onClick={() => this.props.toggleDarkBg(true,5)}>{this.props.p.addCustomizedReviews}</p>
                <p onClick={this.props.logOut} className="nav-option">{this.props.p.logOut}</p>
            </div>
        )
    }
}