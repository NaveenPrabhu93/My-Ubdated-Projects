import React, {useState} from "react";
import axios from "axios";
import {useEffect} from "react";

export default function Registration(){

    
    const [data, setdata]=useState();

    useEffect(()=> {
        axios.get("http://localhost:3000/record")
        .then(res => setdata(res.data))
        .catch(err => console.log(err))
       },
       [])

   
    return(
        <>
        <ol>
            {data.map((data, index) => (
            <li key={index}>
            <li>{index + 1}</li>
            <li>{data.name}</li>
            <li>{data.employeeid}</li>
            <li>{data.checkin}</li>
            <li>{data.checkout}</li>
            <li>{data.id}</li>
            </li>            
             ))}
         </ol> 
        </>
    )
}