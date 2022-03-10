import { Component } from "react";
import axios from "axios"

class AxiosDelete extends Component {
    componentDidMount(){
        axios.delete("http://127.0.0.1:8080/rest_board/delete/33") 
        .then(function(response){ //정상처리시 실행 
            console.log("1", response.data);
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
            <h1>AxiosDelete</h1>
        );
    }
}
export default AxiosDelete;