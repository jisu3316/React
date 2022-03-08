import './App.css';
import Subject from "./components/Subject"
import NavC from "./components/NavC"
import ReadContent from "./components/ReadContent"
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
import Control from "./components/Control"
import { Component } from 'react';

/*
function App() {
  return (
    <div className="App">
      <Subject title="수스 홈" sub="수스 리액트 홈페이지"/>
      <NavC/>
      <Content title="자바!" desc="자바는 엔터프라이즈 솔루션 구축에 최적화 된 언어!!"/>
    </div>
  );
}*/
class App extends Component{
  constructor(props){
    super(props);
    this.max_navc_id = 3; //UI에 영향이 없는 속성이기때문에 멤버변수로 뺌 
    this.state = {
      mode: "welcome", 
      welcome: {title:"환영", desc:"어솨~ 리액트!"}, 
      subject: {title:"수스 홈" , sub:"수스 리액트 홈페이지"},
      selected_navc_id: 2, 
      navc: [
        {id:1, title:"자바", desc:"자바는 엔터프라이즈 솔루션 구축에 최적화 된 언어"}, 
        {id:2, title:"파이썬", desc:"데이터 과학에 최적화 된 언어"}, 
        {id:3, title:"오라클", desc:"가장 안정적인 대용량 시스템구축을 위한 DBMS"}
      ],
      content: {title:"자바", desc:"자바는 엔터프라이즈 솔루션 구축에 최적화 된 언어"}
    };
  }

  getReadContent(){
    for(var i=0; i<this.state.navc.length; i++){
      var data = this.state.navc[i];
      if(data.id === this.state.selected_navc_id){
        //_title = data.title;
        //_desc = data.desc;
        return data;
        //break;
      }
    }
  }
  getContent(){
    var _title, _desc = null;
    var _article = null; //추가1
    if(this.state.mode === "welcome"){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}/> //추가2
    }else if(this.state.mode === "read"){
      //_title = this.state.navc[0].title;
      //_desc = this.state.navc[0].desc;

      var _content = this.getReadContent();//변경
      _article = <ReadContent title={_content.title} desc={_content.desc}/> //추가2
    }else if(this.state.mode === "create"){
      _article =<CreateContent onSubmit={function(_title, _desc){
        this.max_navc_id = this.max_navc_id + 1; //step1
        /*this.state.navc.push(
          {id:this.max_navc_id, title:_title, desc:_desc}
        ); */
        /*var _navc = this.state.navc.concat(
          {id:this.max_navc_id, title:_title, desc:_desc}
        );*/
        var copy_navc = Array.from(this.state.navc);
        copy_navc.push(
          {id:this.max_navc_id, title:_title, desc:_desc}
        );//step2 
        this.setState({
          //navc:_navc
          navc:copy_navc, //step3
          mode:"read",
          selected_navc_id:this.max_navc_id
        }); 
      }.bind(this)}/> //추가3 
    }else if(this.state.mode === "update"){
       _content = this.getReadContent();//추가
        _article = <UpdateContent data={_content} onSubmit={function(_id,_title, _desc){
        var copy_navc = Array.from(this.state.navc);
        for(var i=0;i<copy_navc.length;i++){
          if(copy_navc[i].id === _id){
            copy_navc[i] = {id:_id,title:_title,desc:_desc};
            break;
          }
        }
        this.setState({
          navc:copy_navc,
          mode:"read"
        });
      }.bind(this)}/>
      
    }
    return _article; //추가 
  }
  render(){
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={function(){
            this.setState(
              {mode: "welcome"}
            );
          }.bind(this)}
        />
        {/* <header>
          <h1><a href="/" onClick={function(e){
            console.log("e", e); //이벤트 객체를 확인!
            e.preventDefault(); //<a>태그가 가진 고유한기능(페이지갱신)을 막음!
            //debugger;

            //this.state.mode = 'welcome';
            this.setState(
              {mode: "welcome"}
            );
          }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header> */}
        <NavC 
          data={this.state.navc}
          onChangePage={function(id){
            this.setState(
              {
                mode: "read", 
                selected_navc_id: Number(id)
              }
            );
          }.bind(this)}
        />
        <Control onChangeMode={function(_mode){
          if(_mode === "delete"){
            if(window.confirm("정말 삭제 할까요?")){
            var copy_navc = Array.from(this.state.navc);
            for(var i=0;i<copy_navc.length;i++){
              if(copy_navc[i].id === this.state.selected_navc_id){
                copy_navc.splice(i,1);
                break;
              }
            }
              this.setState({
                navc:copy_navc,
                mode:"welcome"
              });
            }
          }else{
            this.setState({
              mode: _mode
            });
          }
        }.bind(this)}
          />
        {this.getContent()} 
      </div>
    );
  }
}

export default App;
