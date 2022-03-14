import { Component } from "react";

class Nav extends Component{
    /*state = {
        list: []
    }*/
    /*componentDidMount(){//컴포넌트 로딩완료후 호출되는 메소드
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
    }*/
    render(){
        var listTag=[];
        for(var i =0; i<this.props.list.length;i++){
            var li = this.props.list[i];
            listTag.push(
            <li key={li.id}>
                <a href={li.id}
                    data-id={li.id}
                    onClick={function(e){
                        e.preventDefault();
                        this.props.onClick(e.target.dataset.id);
                    }.bind(this)}>{li.title}</a></li>);
        }
        return(
            <nav>
                <ul>
                    {listTag}
                </ul>
            </nav>
        );
    }
}
export default Nav;