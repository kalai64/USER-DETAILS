import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Update() {

    const { id } = useParams()
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate()

    const getData = async () => {
        try {
            const result = await axios.get('http://localhost:8000/getuser/' + id)
            setName(result.data.name)
            setAge(result.data.age)
            setEmail(result.data.email)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    const Updates = async (e) => {
        e.preventDefault()
        try {
            await axios.put('http://localhost:8000/updateuser/' + id, { name, age, email })
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <h2>Update User</h2>
                <form onSubmit={Updates}>
                    <div className="mb-2">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" 
                            value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label className="form-label">Age</label>
                        <input type="text" className="form-control" 
                            value={age} onChange={(e) => setAge(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" 
                            value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Update</button>
                </form>
            </div>
        </div>
    )
}

export default Update
