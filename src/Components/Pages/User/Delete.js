import axios from 'axios';
import { NavLink, useParams,useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react';

function Delete() {
    const {userId}=useParams();
    const[user,setUser]=useState({})

    const navi = useNavigate()

    async function fetchData(){
        const result= await axios.get(`http://localhost:5000/users/${userId}`)

        setUser(result.data);
    }
    function deleteUser(){
        axios.delete(`http://localhost:5000/users/${userId}`)
        navi('/user/show');
    }

    useEffect(()=>{
        fetchData();
    },[])

  return (
   <div>
    <center><u><h1>Delelte Confirmation Form</h1></u>
    <div className='container mt-5'>
        <h3>Do you want to Delete <span style={{'color':'red'}}>{user.empid}{user.name}{user.salary}</span>Record?</h3>
        <button onClick={()=>deleteUser()} className='btn btn-outline-danger col-3'>YES</button>
        <NavLink to='/User/Show'><button className='btn btn-outline-warning col-3'>No</button></NavLink>
    </div>
    </center>
   </div>
  )
}

export default Delete