import React, { Component } from 'react';

import axios from 'axios';


class Hd extends Component {
    constructor(props) {
        super(props);
        this.state={
            body : ''
        }
    }


   
    componentDidMount (){
        axios.post('/reactProxy', {})
        .then( response =>{

            this.setState({ body : response.data.Method})

        }

        )
        
        //console.log(body)
        
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