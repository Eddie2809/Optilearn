import React,{Component} from 'react'

export default class Calendar extends Component{
    constructor(props){
        super(props)
        this.state = {
            count: 1,
            bgState: true
        }
    }   
    openCalendar = () => {
        this.props.toggleDarkBg(this.state.bgState,9)
        this.setState({bgState: !this.state.bgState})

        let ocElement = document.querySelector('.openCalendar')
        let calendarElement = document.querySelector('.calendar')

        if(this.state.count === 1){
            ocElement.classList.toggle('moveOpenCalendarLeft')
            calendarElement.classList.toggle('moveCalendarLeft')
            this.setState({count: 2})
        } 
        else{
            ocElement.classList.toggle('moveOpenCalendarLeft')
            calendarElement.classList.toggle('moveCalendarLeft')

            ocElement.classList.toggle('moveOpenCalendarRight')
            calendarElement.classList.toggle('moveCalendarRight')
        }
        
    }
    render(){
        return(
            <div onClick={this.openCalendar} className="openCalendar">
                <p>Abrir calendario</p>
            </div>
        )
    }   
}

