import React,{Component} from 'react'
import Leftnav from './Leftnav'
import Rightnav from './Rightnav'
import HamburgerMenu from './HamburgerMenu'
import Logo from './Logo'
import History from './History/History'
import Missed from './Missed/Missed'
import MyTopics from './MyTopics/MyTopics'
import Settings from './Settings/Settings'

export default class TopNav extends Component{
    constructor(){
        super()
        this.state = {
            openedTab: 'none'
        }
    }
    openTab = (tab) => {
        if(this.state.openedTab !== 'none') this.setState({openedTab: 'none'})
        else this.setState({openedTab: tab})
    }
    
    render(){
        return(
            <div className="TopNav">
                <Leftnav p={this.props.p} openTab={this.openTab} openedTab={this.state.openedTab}/>
                <Logo/>
                <Rightnav p={this.props.p} toggleDarkBg={this.props.toggleDarkBg} logOut={this.props.logOut} openTab={this.openTab} openedTab={this.state.openedTab}/>
                <HamburgerMenu/>
                {
                    this.state.openedTab==='history'?
                    <History p={this.props.p} openTab={this.openTab} toggleDarkBg={this.props.toggleDarkBg} history={this.props.history} undoReview={this.props.undoReview}/>:
                    this.state.openedTab==='missed'?
                    <Missed p={this.props.p} openTab={this.openTab} toggleDarkBg={this.props.toggleDarkBg} doReview={this.props.doReview} missed={this.props.missed}/>:
                    this.state.openedTab==='mytopics'?
                    <MyTopics p={this.props.p} openTab={this.openTab} toggleDarkBg={this.props.toggleDarkBg} topics={this.props.topics}/>:
                    this.state.openedTab==='settings'?
                    <Settings/>:
                    ''
                }
            </div>
        )
    }
}