import { Component } from "react";
import axios from "axios"

class AxiosGet extends Component {
    componentDidMount(){
        fetch("http://127.0.0.1:8080/rest_board/read.json") //모두검색
        //axios.get("http://127.0.0.1:8080/rest_board/read/12.json")//seq검색
        //axios.get("http://127.0.0.1:8080/rest_board/read.json?na=병철") //name검색
        .then(function(response){ //정상처리시 실행 
            console.log("1", response.json);
        })
        .catch(function(error){ //오류발생시 실행
            console.log("2", error);
        })
        .then(function(){ //항상 실행
            console.log("3");
        });
    }
    render(){
        return(
            <h1>AxiosGet</h1>
        );
    }
}
export default AxiosGet;