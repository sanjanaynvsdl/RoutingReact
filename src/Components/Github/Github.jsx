import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {

    
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/sanjanaynvsdl")
    //     .then((res)=>(res.json()))
    //     .then((data)=>{
    //         console.log(data);
    //         setData(data);
    //     })

    // },[])

    const data = useLoaderData() //This done a lot of pre-proccessingg!
    return(
        <div>
            <div className='bg-gray-700 text-orange-700 text-center m-4 p-4 text-4xl font-bold '>Github Details</div>
            <div className=' m-4  bg-gray-600 text-white p-4 text-2xl flex justify-between font-sans'>

                <div className='center  p-24'>
                    <h1 className=''>UserName : {data.login} </h1>
                    <h1>Name      : {data.name}</h1>
                    <h1>Follwers  : {data.followers}</h1>
                    <h1>Following : {data.following}</h1>
                    <h1>Company   : {data.company}</h1>
                    <h1>Repo's    : {data.public_repos}</h1>
                    <h1>Created at : {data.created_at}</h1>
                    <h1>Updated at : {data.updated_at}</h1>

                </div>
                <img  className='w-1/3 h-1/2'src={data.avatar_url}/></div>
        </div>
    )
    
}
export default GitHub

export const githubinfo = async () => {
    const res= await fetch("https://api.github.com/users/sanjanaynvsdl")
    return res.json();
}

//Basically in this until unless we click on the github in the header it won't fetch the data
//We can try to optimize this such as, as we hover on the gihub it can make a network request!
//So, HOw can we do this??
//import this method in the main and add another prop in gihub router 
//Loader --(Mrthods like fetch, calc etc) (So, if some one tries to load this route then loader can do advance pre-processing)
//To use the data in the above code is (a useLoaderData hook) --> react-router-dom