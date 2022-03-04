import { Component } from "react";

class Content extends Component {
    render(){
      console.log("콘텐트랜더");
      return(
        <article>
            <h3>{this.props.title}</h3>
            {this.props.desc}
          </article>
      );
    }
  }
export default Content;