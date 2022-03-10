import { Component } from "react";
import axios from "axios"

class FetchDelete extends Component {
    componentDidMount(){
        fetch("http://127.0.0.1:8080/rest_board/delete/45", {
            method:"DELETE"
        }) 
        /*.then(function(response){ //정상처리시 실행 
            var tmp = response.json(); 
            console.log("1", tmp);
            return tmp;
        })
        .catch(function(error){ //오류발생시 실행
            console.log("2", error);
        })
        .then(function(js){ //항상 실행
            console.log("3", js);
        });*/
    }
    render(){
        return(
            <h1>FetchDelete</h1>
        );
    }
}
export default FetchDelete;