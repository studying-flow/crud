import React from 'react'

const Create = () => {

  
  return (
    <>
      <h2>CREATE</h2>
       <form>
  
<div className="mb-3">
    <label  className="form-label">Name</label>
    <input type="text" className="form-control" />
   </div>

<div classname="mb-3">
    <label className="form-label">Email address</label>
    <input type="email" className="form-control"  aria-describedby="emailHelp"/>
    </div>
  <div>
  <button type="submit" className="btn btn-primary mt-3 ">Submit</button>
  </div>
</form>
    </>
  )
}

export default Create