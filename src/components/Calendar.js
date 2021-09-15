import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

export default class Calendar extends React.Component{
    loadEvents = () => {
        let date
        let color
        let events = []
        let mapTopicIdName = new Map()
        for(let i = 0; i < this.props.topics.length; i++){
            //date = new Date(this.props.topics[i].first_session_date)
            date = new Date((this.props.topics[i].first_session_date).slice(0,10)+'T00:00:00')
            mapTopicIdName[this.props.topics[i].id] = this.props.topics[i].name
            events.push({
                title: this.props.topics[i].name,
                date: (date.getFullYear() + "-" + ((date.getMonth()+1)<10? ("0" + (date.getMonth()+1)):((date.getMonth()+1))) + "-" + ((date.getDate())<10? ("0" + (date.getDate())):((date.getDate())))),
                display: 'list-item',
                color: '#00ADB5',
                overlap: 'true'
            })
        }

        for(let i = 0; i < this.props.reviews.length; i++){
            //date = new Date(this.props.reviews[i].review_date)
            date = new Date((this.props.reviews[i].review_date).slice(0,10)+'T00:00:00')
            color = (this.props.reviews[i].done? "#4AC563":"#EBF144")
            events.push({
                title: mapTopicIdName[this.props.reviews[i].topic_id],
                date: (date.getFullYear() + "-" + ((date.getMonth()+1)<10? ("0" + (date.getMonth()+1)):((date.getMonth()+1))) + "-" + ((date.getDate())<10? ("0" + (date.getDate())):((date.getDate())))),
                display: 'list-item',
                color: color
            })
        }

        return events
    }
    render(){
        this.loadEvents()
        return(
            <div className="calendar">
                <div onClick={()=>this.props.toggleDarkBg(false,0)} className="quit"><div className="right"></div><div className="left"></div></div>
                <FullCalendar
                    height="100vh"
                    locale= "esLocale"
 
                    backgroundColor='white'
                    plugins={[ dayGridPlugin ]}
                    initialView="dayGridMonth"
                    events={this.loadEvents()}
                />
            </div>
        )
    }   
}

