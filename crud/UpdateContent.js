import { Component } from "react";
class UpdateContent extends Component{
    constructor(props){
      super(props);
      this.state = {
        id: this.props.data.id, 
        title: this.props.data.title, 
        desc: this.props.data.desc
      }
    }
    render(){
      console.log("#UpdateContent render()");
      return(
        <article>
          <h3>Update</h3>
          <form action="/update_process" method="post" onSubmit={function(e){
            e.preventDefault();
            //debugger;
            this.props.onSubmit(this.state.id,e.target.title.value, e.target.desc.value);
			      alert("전송완료!");
          }.bind(this)}>
            <input type="hidden" name="id" value={this.state.id}/>
            <p><input name="title" placeholder="제목" value={this.state.title}
            onChange={function(e){
              this.setState({
                title:e.target.value
                  });
              }.bind(this)}/></p>
            <p><textarea name="desc" placeholder="설명" value={this.state.desc}
            onChange={function(e){
              this.setState({
                desc:e.target.value
              });
            }.bind(this)}/></p>
            <p><input type="submit" value="수정"/></p>
          </form>
        </article>
      );
    }
  }
  export default UpdateContent;