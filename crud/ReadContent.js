import { Component } from "react";

class ReadContent extends Component {
    render(){
      console.log("리드콘텐트랜더");
      return(
        <article>
            <h3>{this.props.title}</h3>
            {this.props.desc}
          </article>
      );
    }
  }
export default ReadContent;