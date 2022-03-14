import { Component } from "react";
import Nav from "./Nav";

class Article extends Component{
  render(){
      return(
          <article>
              <h3>{this.props.title}</h3>
              {this.props.desc}
          </article>
      );
  }
}
class App extends Component{
  state= {
    article:{title:"환영",desc:"어서화 리액트..에이젝스도환영해"},
    list:[]
  }
  componentDidMount(){//컴포넌트 로딩완료후 호출되는 메소드
    fetch("list.json")//해당 리소스에 연결
    .then(function(result){
        var temp = result.json()//json -> js객체를 포함하는 객체로 변경
        console.log("temp:",temp);
        return temp;
    })
    .then(function(js){
        //console.log(js);//변경된 js객체만 출력
        this.setState({
            list:js
        });
    }.bind(this))
  }
  render(){
  return (
    <div className="App">
      <h1>Ajax홈</h1>
      <Nav  
        list={this.state.list} 
        onClick={function(id){
        fetch(id+".json")//해당 리소스에 연결
        .then(function(result){
            return result.json();
        })
        .then(function(js){
          this.setState({
            article:{title:js.title,desc:js.desc}
          });
        }.bind(this))
      }.bind(this)}/>
       <Article title={this.state.article.title} desc={this.state.article.desc}/>
    </div>
    );
  }
}

export default App;
