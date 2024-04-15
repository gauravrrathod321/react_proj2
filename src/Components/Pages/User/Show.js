import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'


function Show() {
    const[users,setUser]=useState([])

    async function fetdata(){
        const result = await axios.get('http://localhost:5000/users')

        setUser(result.data)
    }
    useEffect(()=>{
        fetdata();
    })
  return (
    <div>
        <table className='table table-dark table-striped'>
            <thead>
                <tr>
                    <td>empid</td>
                    <td>Ename</td>
                    <td>Esalary</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((obj)=>{
                        return(
                            <tr>
                                <td>{obj.empid}</td>
                                <td>{obj.name}</td>
                                <td>{obj.salary}</td>
                                <td>
                                    <NavLink to={`/user/update/${obj.id}`}><button className='btn btn-outline-success btn-sm'>Update</button></NavLink>
                                    <NavLink to={`/user/delete/${obj.id}`}><button className='btn btn-outline-danger btn-sm'>Delete</button></NavLink>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Show