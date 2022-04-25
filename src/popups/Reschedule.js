import React,{Component} from 'react'

export default class Reschedule extends Component{

    constructor(props){
        super(props)
        this.state = {
            day: new Date().getDate(),
            month: new Date().getMonth()+1,
            year: new Date().getFullYear()
        }
    }
    submitNewDate = () =>{
        let newDate = new Date(this.state.month + " " + this.state.day + " " + this.state.year)
        let today = new Date(new Date().toDateString())
        if(newDate<today){
            alert("Tienes que elegir una fecha que no haya pasado")
            return
        }
        else{
            this.props.toggleDarkBg(false,0)
            this.props.reschedule(this.props.reviewId,newDate.getTime(),2)
        }
    }

    generateDays = () => {
        let today = new Date()
        let days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
        let daysElements = days.map((d,i)=>{
            if(d === today.getDate()) return <option selected value={d<10? "0"+d:d}>{d<10? "0"+d:d}</option>
            else return <option value={d<10? "0"+d:d}>{d<10? "0"+d:d}</option>
        })
        return <select onChange={event => this.setState({day: event.target.value})} name="day" id="day">{daysElements}</select>
    }

    generateMonths = () => {
        let today = new Date()
        let months = [['Jan',this.props.p.january],['Feb',this.props.p.february],['Mar',this.props.p.march],['Apr',this.props.p.april],['May',this.props.p.may],['Jun',this.props.p.june],['Jul',this.props.p.july],['Aug',this.props.p.august],['Sep',this.props.p.september],['Oct',this.props.p.october],['Nov',this.props.p.november],['Dec',this.props.p.december]]
    
        let monthsElements = months.map((m,i)=>{
            if(i === today.getMonth()) return <option selected value={m[0]}>{m[1]}</option>
            else return <option value={m[0]}>{m[1]}</option>
        })

        return <select onChange={event => this.setState({month: event.target.value})} name="month" id="month">{monthsElements}</select>
    
    }

    generateYears = () => {
        let today = new Date()
        let firstYear = 2019
        let years = []
        do{
            years.push(firstYear)
            firstYear++
        }while(firstYear<=today.getFullYear())

        let yearsElements = years.map((y,i)=>{
            if(y === today.getFullYear()) return <option selected value={y}>{y}</option>
            else return <option value={y}>{y}</option>
        })

        return <select onChange={event => this.setState({year: event.target.value})} name="year" id="year">{yearsElements}</select>

    }

    render(){
        
        return(
            <div className="Reschedule pop-up">
                <div onClick={()=>this.props.toggleDarkBg(false,0)} className="quit"><div className="right"></div><div className="left"></div></div>
                <p>{this.props.p.enterTheNewDate}</p>
                <div>
                    {this.generateDays()}
                    {this.generateMonths()}
                    {this.generateYears()}
                </div>
                <button onClick={this.submitNewDate}>{this.props.p.done}</button>
            </div>
        )
    }
}