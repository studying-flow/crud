import React, { useState } from 'react'
import axios from "axios";

const Create = () => {
const[name,setName] = useState("")
const[email,setEmail] = useState("")

const header = {"Access-Control-Allow-Origin":"*"};

const handleSubmit = () =>{
  console.log("clclekd");
  
  axios.post(
    "https://692d3c47e5f67cd80a4aa93c.mockapi.io/api/crud/crud-youtube",{
       name:name,
       email:email,
       header,
    });
};

  return (
    <>
      <h2>CREATE</h2>
       <form>
  
<div className="mb-3">
    <label  className="form-label">Name</label>
    <input type="text" className="form-control"
    onChange={(e)=>setName(e.target.value)} />
   </div>

<div className="mb-3">
    <label className="form-label">Email address</label>
    <input type="email" className="form-control"  aria-describedby="emailHelp"
    onChange={(e)=>setEmail(e.target.value)}/>
    </div>

  <button type="submit" className="btn btn-primary mt-3 " onClick={handleSubmit}>Submit</button>
</form>
    </>
  )
}

export default Create