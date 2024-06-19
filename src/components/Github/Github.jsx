import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'

function Github() {


// const [data,setData]=useState([])
    const data =useLoaderData()
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/ravi-aman")
    //     .then(response => response.json()) // Call json() correctly
    //     .then(data =>{
    //         console.log(data)
    //         setData(data)
    //     } )
    // },[])
    return (
        <div>Github followers : {data?.followers}</div>
    )


}

export default Github;



export const githubinfoLoader =async () =>{
    const response = await fetch('https://api.github.com/users/ravi-aman')

    return response.json()
}