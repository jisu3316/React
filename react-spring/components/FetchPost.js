import { Component } from "react";
import axios from "axios"

class FetchPost extends Component {
    componentDidMount(){
        fetch("http://127.0.0.1:8080/rest_board/create.json", {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({seq:-1, writer:"네시", email:"사십칠분"})
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
            <h1>FetchPost</h1>
        );
    }
}
export default FetchPost;