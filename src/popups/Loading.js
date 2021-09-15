import React,{Component} from 'react'

export default class Loading extends Component{
    render(){
        return(
            <div className='loading'>
                <div className='loading-particle'></div>
                <div className='loading-particle'></div>
                <div className='loading-particle'></div>
            </div>
        )
    }
}