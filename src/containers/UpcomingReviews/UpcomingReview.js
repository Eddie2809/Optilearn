import React,{Component} from 'react'

//props: date,name,id,topicId
export default class UpcomingReview extends Component{
    render(){
        const loadDate = () => {
            let date = new Date(this.props.date)
            let today = new Date()
            let tomorrow = new Date(today.getTime() + 86400000)

            if(today.getDate()===date.getDate() && today.getMonth()===date.getMonth() && today.getFullYear()===date.getFullYear()){
                return <p className="date">Hoy</p>
            }
            else if(tomorrow.getDate()===date.getDate() && tomorrow.getMonth()===date.getMonth() && tomorrow.getFullYear()===date.getFullYear()){
                return <p className="date">Mañana</p>
            }
            else{
                date = (date.getDate()<10? ("0" + (date.getDate())):date.getDate()) + "/" + (date.getMonth()+1<10? ("0" + (date.getMonth()+1)):date.getMonth()+1) + "/" + date.getFullYear()
                return <p className="date">{date}</p>
            }
        }
        const loadCheckbox = () =>{
            let today = new Date()
            let reviewDate = new Date(this.props.date)

            if(today.getDate()===reviewDate.getDate() && today.getMonth()===reviewDate.getMonth() && today.getFullYear()===reviewDate.getFullYear()){
                //return <input type="checkbox" onClick={()=>this.props.doReview(this.props.id,this.props.topicId,this.props.numberOfCompletedReviews,this.props.numberOfReviews)}></input>
                return <div className="checkbox" onClick={()=>this.props.doReview(this.props.id,this.props.topicId,this.props.numberOfCompletedReviews,this.props.numberOfReviews)}></div>
            }
        }
        return(
            <div className="UpcomingReview">
                <svg onClick={()=>this.props.toggleDarkBg(true,7,this.props.topicId)} xmlns="http://www.w3.org/2000/svg" width="29.236" height="26.997" viewBox="0 0 29.236 26.997">
                <title>Ver referencias</title>
                <g id="Icon_ionic-ios-book" data-name="Icon ionic-ios-book" transform="translate(-3.382 -4.5)">
                    <path id="Trazado_65" data-name="Trazado 65" d="M10.266,4.507c3.8,0,7.031,1.962,7.031,5.766V11.4h0V31.359a.138.138,0,0,1-.267.049V31.4a6.612,6.612,0,0,0-5.787-4.957A8.925,8.925,0,0,0,4.7,29.053a.758.758,0,0,1-.464.2H3.916c-.26,0-.534-.19-.534-.429V8.452C3.375,6.195,6.462,4.507,10.266,4.507Z" fill="#00adb5"/>
                    <path id="Trazado_66" data-name="Trazado 66" d="M25.734,4.5c-3.8,0-7.031,1.962-7.031,5.766v1.125h0V31.352a.138.138,0,0,0,.267.049v-.007a6.68,6.68,0,0,1,5.787-4.957A8.909,8.909,0,0,1,31.3,29.046a.8.8,0,0,0,.464.2h.316c.26,0,.534-.19.534-.429V8.438C32.625,6.188,29.538,4.5,25.734,4.5Z" fill="#00adb5"/>
                </g>
                </svg>
                <p className="name">{this.props.name}</p>
                {loadDate()}
                {loadCheckbox()}
            </div>
        )
    }
}