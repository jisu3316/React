import { Component } from "react";


class FetchGet extends Component {
    componentDidMount(){
        //fetch("http://127.0.0.1:8080/rest_board/read.json") //모두검색
        //axios.get("http://127.0.0.1:8080/rest_board/read/12.json")//seq검색
        fetch("http://127.0.0.1:8080/rest_board/read.json?na=병철") //name검색
        .then(function(response){ //정상처리시 실행 
            var tmp = response.json(); 
            console.log("1", tmp);
            return tmp;
        })
        .catch(function(error){ //오류발생시 실행
            console.log("2", error);
        })
        .then(function(js){ //항상 실행
            console.log("3", js);
        });
    }
    render(){
        return(
            <h1>FetchGet</h1>
        );
    }
}
export default FetchGet;