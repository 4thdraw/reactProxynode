import React, { Component } from 'react';

import axios from 'axios';


class Hd extends Component {
    constructor(props) {
        super(props);
        this.state={
            getjson : '초기값',
            Postjson : '',
            getText : ''
        }
    }


   
    componentDidMount = async() =>{
        //reactProxy 라우팅은 post 전송정보
      await  axios.post('/reactProxy',{})
      .then(res =>{
        this.setState({ Postjson : res.data.title})

      })
      console.log(this.state.Postjson)
    
      const getdata = await axios.get('/reactProxy/get')
      this.setState({getText : getdata.data})
       
        
       console.log(this.state.getText)

       const getdatajson = await axios.get('/reactProxy/getjson')
      this.setState({getjson  : getdatajson.data})
       
        
       console.log(this.state.getjson)
        
    }
    render() {
        return (
            <div>
                <p>프록시로 설정된 서버와의 연동 + {this.state.Postjson.length > 0 && this.state.Postjson}</p>
                <p>Get으로 연동된 데이터 : {this.state.getText}</p>
    
                <p>Get으로 연동된 json데이터 : {this.state.getjson.getjsonkey}</p>
            </div>
            
        );
    }
}

export default Hd;