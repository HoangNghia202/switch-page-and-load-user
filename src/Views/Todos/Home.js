import React from "react";
import Color  from "../HOC/Color";
class Home extends React.Component{
    componentDidMount(){
        setTimeout(()=>{
            this.props.history.push('/todo')
        },3000)
    }
    render(){
        return(
            <div>This is home page</div>
        )
    }
}

export default  Home