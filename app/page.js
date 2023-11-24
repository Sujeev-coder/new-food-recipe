"use client"
import axios from 'axios';
import React, { useState } from 'react'
import Products from './Products';

const page = () => {

  const [search, setsearch] = useState("");

  const [data, setdata] = useState([])

  const YOUR_APP_ID = "0ed3666f";

  const YOUR_APP_KEY = "169de439637224da417bff9a2e8d0147";

  const sumbitHandler = (e) => {

    e.preventDefault();


    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=20&calories=591-722&health=alcohol-free`).then(response => response.json()).then(data => setdata(data.hits))



  }


  return (

<body>


<div className='m-5 bg-yellow-900 h-40 '>

<center>

  <h1 className='text-5xl'>Food Recipe App</h1>

  <form onSubmit={sumbitHandler}>

    <input className='text-center rounded' type='text' placeholder='search any recipe' value={search} onChange={(e) => {

      setsearch(e.target.value)

    }} />

    <input className='ml-5 bg-slate-400 rounded p-1' type='submit' value="Search" />

  </form>

</center>

</div>

<div>

{data.length >= 1 ? <Products data = {data}/> : <center className='m-5'> <h2>No Recipe Found</h2></center>}

</div>

</body>

   

  )
}

export default page




