import React, {useEffect, useState}  from 'react';

const axios = require('axios');


function Hdpost() {
    const [poststate, postUpdate] = useState('아직안옴 post로 전송된 디비');

    useEffect( async ()=>{
       await axios.post('/reactProxy',{})
       .then( res =>{
        postUpdate(res.data.title)
       } )

    })
    


    return (
        <div>
            {poststate}
        </div>
    );
}

export default Hdpost;