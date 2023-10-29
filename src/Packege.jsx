import React from "react";
import Box from './Box.jsx';
export default function Packege(){
    const product=[{title:"box1",desc:"red"},{title:"box2",desc:"blue"},{title:"box3",desc:"red"},{title:"box4",desc:"red"}]
    let data='';
    return(

        <div className="row my-5">
            {product.map(function(ele,index){
                console.log(ele)
                return <Box title={ele.title} des={ele.desc} key={index}/>
             })
             
             }
            
        </div>
    )
}