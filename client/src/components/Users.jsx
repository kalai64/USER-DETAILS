import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Users() {

    const [users, setUsers] = useState([])

    const getData = async () => {
        try {
            const result = await axios.get('https://crud-tkvv.onrender.com/users')
            setUsers(result.data)
        } catch (error) {
            console.log(error)
        }
    }
        
        useEffect(() => {
            getData()
        }, [])
        
        const handleDelete = async (id) => {
            try {
                await axios.delete('https://crud-tkvv.onrender.com/deleteuser/' + id)
                window.location.reload()
            } catch (error) {
                console.log(error)
            }
        }
        
        return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <Link to={'/create'} className='btn btn-primary'>+Add</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Email</th>
                        <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((e, i) => (
                            <tr key={i}>
                                <td>{e.name}</td>
                                <td>{e.age}</td>
                                <td>{e.email}</td>
                                <td>
                                    <Link to={`/update/${e._id}`} className='btn btn-primary'>Update</Link>
                                    <button className='btn btn-danger' onClick={() => handleDelete(e._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users
