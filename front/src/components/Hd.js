import React, { Component } from 'react';

import axios from 'axios';


class Hd extends Component {
    constructor(props) {
        super(props);
        this.state={
            body : '',
            method : ''
        }
    }


   
    componentDidMount = async() =>{
      await  axios.post('/reactProxy',{})
      .then(res =>{
        this.setState({ body : res.data.title})

      })

     const getdata = await axios.get('/reactProxy/get')
     this.setState({method : getdata.data})



        

            


       
        
        console.log(this.state.method)
        
    }
    render() {
        return (
            <div>
                프록시로 설정된 서버와의 연동 + {this.state.body.length > 0 && this.state.body}
            </div>
        );
    }
}

export default Hd;