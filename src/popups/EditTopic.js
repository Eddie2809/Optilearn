    import React,{Component} from 'react'

    //this.props.topicId
    export default class EditTopic extends Component{
        constructor(props){
            super(props)
            this.state = {
                topic: {},
                topicName: "",
                references: "",
                firstSessionDate: ""
            }
        }
        submitChanges = () => {
            if(!this.state.topicName){
                console.error("Ingresa nombre del tema")
                return
            }
            
            this.props.editTopic(this.state.topicName,this.state.references,this.props.topicId)
            this.props.toggleDarkBg(false,0);

        }
        loadReviews = () => {
            let topicReviews = []

            for(let i = 0; i < this.props.reviews.length; i++){
                if(this.props.reviews[i].topic_id === this.props.topicId){
                    topicReviews.push(this.props.reviews[i])
                }
            }
            topicReviews.sort()
            topicReviews.reverse()
            let reviewDate
            let day
            let month
            let topicReviewsElements = topicReviews.map((r,i)=>{
                //reviewDate = new Date(r.review_date)
                reviewDate = new Date((r.review_date).slice(0,10)+'T00:00:00')
                day = reviewDate.getDate()<10? "0" + reviewDate.getDate(): reviewDate.getDate()
                month = (reviewDate.getMonth()+1)<10? "0" + (reviewDate.getMonth()+1): (reviewDate.getMonth()+1)
                reviewDate = day + "/" + month + "/" + reviewDate.getFullYear()
                return <div>
                    <p>{(i+1) + ".- " + reviewDate}</p>
                    {r.done?"":
                        <svg onClick={()=>this.props.toggleDarkBg(true,3,r.id)} xmlns="http://www.w3.org/2000/svg" width="13" height="15" viewBox="0 0 13 15">
                            <title>{this.props.p.reschedule}</title>
                            <path id="Icon_awesome-calendar-alt" data-name="Icon awesome-calendar-alt" d="M0,13.594A1.4,1.4,0,0,0,1.393,15H11.607A1.4,1.4,0,0,0,13,13.594V5.625H0ZM9.286,7.852A.351.351,0,0,1,9.634,7.5h1.161a.351.351,0,0,1,.348.352V9.023a.351.351,0,0,1-.348.352H9.634a.351.351,0,0,1-.348-.352Zm0,3.75a.351.351,0,0,1,.348-.352h1.161a.351.351,0,0,1,.348.352v1.172a.351.351,0,0,1-.348.352H9.634a.351.351,0,0,1-.348-.352ZM5.571,7.852A.351.351,0,0,1,5.92,7.5H7.08a.351.351,0,0,1,.348.352V9.023a.351.351,0,0,1-.348.352H5.92a.351.351,0,0,1-.348-.352Zm0,3.75a.351.351,0,0,1,.348-.352H7.08a.351.351,0,0,1,.348.352v1.172a.351.351,0,0,1-.348.352H5.92a.351.351,0,0,1-.348-.352ZM1.857,7.852A.351.351,0,0,1,2.205,7.5H3.366a.351.351,0,0,1,.348.352V9.023a.351.351,0,0,1-.348.352H2.205a.351.351,0,0,1-.348-.352Zm0,3.75a.351.351,0,0,1,.348-.352H3.366a.351.351,0,0,1,.348.352v1.172a.351.351,0,0,1-.348.352H2.205a.351.351,0,0,1-.348-.352Zm9.75-9.727H10.214V.469A.468.468,0,0,0,9.75,0H8.821a.468.468,0,0,0-.464.469V1.875H4.643V.469A.468.468,0,0,0,4.179,0H3.25a.468.468,0,0,0-.464.469V1.875H1.393A1.4,1.4,0,0,0,0,3.281V4.687H13V3.281A1.4,1.4,0,0,0,11.607,1.875Z" fill="#00adb5"/>
                        </svg>
                    }
                </div>
                
            })

            return <ol>{topicReviewsElements}</ol>
        }
        componentDidMount(){
            for(let i = 0; i < this.props.topics.length; i++){
                if(this.props.topics[i].id === this.props.topicId){
                    this.setState({
                        topic: this.props.topics[i],
                        topicName: this.props.topics[i].name,
                        references: this.props.topics[i].topic_references,
                        firstSessionDate: this.props.topics[i].first_session_date
                    })
                    break
                }
            }
        }
        render(){
            return(
                <div className="EditTopic pop-up">
                    <div onClick={()=>this.props.toggleDarkBg(false,0)} className="quit"><div className="right"></div><div className="left"></div></div>
                    <p>{this.props.p.editTopic}</p>
                    <div className="name">
                        <p>{this.props.p.name + ': '}</p>
                        <input maxLength="150" onChange={event=>this.setState({topicName: event.target.value})} defaultValue={this.state.topicName} type="text"/>
                    </div>
                    <div className="references">
                        <p>{this.props.p.references + ': '}</p>
                        <textarea maxLength="350" onChange={event=>this.setState({references: event.target.value})} defaultValue={this.state.references}></textarea>
                    </div>
                    <div className="reviews">
                        <p>{this.props.p.reviews + ': '}</p>
                        {this.loadReviews()}
                    </div>
                    <button onClick={this.submitChanges}>{this.props.p.done}</button>
                </div>
            )
        }
    }