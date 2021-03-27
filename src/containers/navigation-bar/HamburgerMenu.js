import React,{Component} from 'react'

export default class HamburgerMenu extends Component{
    render(){
        return(
            <div className="HamburgerMenu hide-for-desktop">
                <div className="hm-line"></div>
                <div className="hm-line"></div>
                <div className="hm-line"></div>
            </div>
        )
    }
}