import { Component } from "react";

class CreateContent extends Component {
    render(){
      console.log("크리에이티브콘텐트랜더");
      return(
        <article>
            <h3>Create</h3>
            <form action="/create_process" method ="post" onSubmit={function(e){
              e.preventDefault();
              alert("전송!");
              this.props.onSubmit(e.target.title.value,e.target.desc.value);
            }.bind(this)}>
              <p><input name="title" placeholder="제목"/></p>
              <p><input name="desc" placeholder="설명"/></p>
              <p><input type="submit" placeholder="전송"/></p>
            </form>
          </article>
      );
    }
  }
export default CreateContent;