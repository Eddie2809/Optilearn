import React,{Component} from 'react'
import TopicItem from './TopicItem'

export default class MyTopics extends Component{
    constructor(props) {
        super(props);

        this.wrapperRef = React.createRef();
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }
    
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
            setTimeout(()=>{
                this.props.openTab("none")
            },250)
        }
    }

    toggleCompletedTopics = () => {
        let items = document.querySelectorAll('.TopicItem');
        
        for(let i = 0; i<items.length; i++){
            if(this.props.topics[i].completed){
                items[i].classList.toggle("none")
                items[i].classList.toggle("list-item")
            }
        }
        console.log("done")
    }

    render(){
        const loadTopicItems = this.props.topics.map((topic)=>{
            return <TopicItem toggleDarkBg={this.props.toggleDarkBg} name={topic.name} id={topic.id}/>
        })
        return(
            <div ref={this.wrapperRef} className="MyTopics tab hide-for-mobile">
                <div className="show-completed-topics">
                    Ocultar temas completados<input onClick={this.toggleCompletedTopics} type="checkbox"></input>
                </div>
                <div className="list">
                    {loadTopicItems}
                </div>
                <div className="delete-completed-topics" onClick={()=>this.props.toggleDarkBg(true,8)}>Borrar temas completados</div>
            </div>
        )
    }
}