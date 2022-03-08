import { Component } from "react";

class NavC extends Component {
  shouldComponentUpdate(newProps){
    console.log("슈드컴포넌트업데이트",newProps.data,this.props.data);
    if(newProps.data === this.props.data){
      return false;
    }
     return true;
  }
  render(){
    console.log("엔씨랜더");
      var lists = [];
      var data = this.props.data;
      for(var i=0; i<data.length; i++){
          lists.push(<li key={data[i].id}>
            <a href={"/content/"+data[i].id}
                onClick={function(id, e){
                console.log("#NavC id", id);
                e.preventDefault();
                this.props.onChangePage(id);
              }.bind(this, data[i].id)}>
              {data[i].title}
              </a>
          </li>);
      }
      return(
          <nav>
          <ul>
              {lists}
          </ul>
          </nav>
      );
  }
}
export default NavC