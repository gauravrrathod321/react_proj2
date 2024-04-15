import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { useNavigate} from 'react-router-dom';


function Add() {

  const {register,handleSubmit} = useForm();

  const navi = useNavigate()

  function saveData(data){
    axios.post('http://localhost:5000/users',data);
    // alert("record added") 
    navi('/User/Show')

  }
  return (
   <>
   <div className='container'>
    <center><h1><u>Employee Registeration Form</u></h1></center>
   <form onSubmit={handleSubmit(saveData)}className='mt-5'>
    <label htmlFor='e'><b>Enter EMP ID:</b></label>
    <input type="number" id='e' className='form-control'{...register('empid')}></input>
   
    <br></br>

    <label htmlFor='n'><b>Enter EMP Name: </b></label>
    <input type="text" id='n' className='form-control'{...register('name')}></input>
  
    <br></br>

    <label htmlFor='s'><b>Enter EMP Sallary:</b></label>
    <input type="number" id='s' className='form-control'{...register('salary')}></input>
  
    <br></br>

    <input type="submit" value="Add Employee" className='btn btn-outline-danger col-6'></input>
    <input type="reset" value="Reset" className='btn btn-outline-success col-6'></input>
   </form>
   </div>
   </>
  )
}

export default Add