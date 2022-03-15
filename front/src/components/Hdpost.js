import React, {useEffect, useState}  from 'react';

const axios = require('axios');


function Hdpost(props) {
    const [poststate, postUpdate] = useState('아직안옴 post로 전송된 디비');

    // useEffect(()=>{

    // })
    // const dbPress = async (t) => {
    //   postUpdate(t)
    //   //snsstate값을 t로 수정해라
    // }


    return (
        <div>
            {poststate}
        </div>
    );
}

export default Hdpost;