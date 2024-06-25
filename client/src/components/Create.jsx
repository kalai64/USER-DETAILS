import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Create() {

    const [name,setName] = useState()
    const [age,setAge] = useState()
    const [email,setEmail] = useState()
    const navigate = useNavigate()

    const Submit = async(e)=>{
        e.preventDefault()
        try {
            await axios.post('https://crud-tkvv.onrender.com/create',{name,age,email})
            .then(result => navigate('/'))
            
        } catch (error) {
            console.log(error)
            
        }
    }

  return <>
  <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
    <div className='w-50 bg-white rounded p-3'>
        <h2>Add User</h2>
    <form onSubmit={Submit}>
        <div className="mb-2">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" 
            onChange={(e)=> setName(e.target.value)}/>
        </div>
        <div className="mb-2">
            <label className="form-label">Age</label>
            <input type="text" className="form-control" 
            onChange={(e)=> setAge(e.target.value)}/>
        </div>
        <div className="mb-2">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" 
            onChange={(e)=> setEmail(e.target.value)}/>
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
  </div>
  </>
}

export default Create