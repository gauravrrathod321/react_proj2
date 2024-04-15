import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { useParams,useNavigate } from 'react-router-dom';

function Update() {

    const {register,handleSubmit,setValue} = useForm();
    const {userId}= useParams();

    const navi = useNavigate()

    async function fetchData(){
        const result= await axios.get(`http://localhost:5000/users/${userId}`)
        setValue('empid',result.data.empid);
        setValue('name',result.data.name);
        setValue('salary',result.data.salary);
    }

    function saveData(data){
        axios.put(`http://localhost:5000/users/${userId}`,data);

        navi('/User/Show/');
    }
    useEffect(()=>{
        fetchData();
    },[])

  return (
    <>
      <div className='container'>
      <center><h1><u>Employee Updatation Form</u></h1></center>
      <form onSubmit={handleSubmit(saveData)} className='mt-5'>
      <label htmlFor='e'><b>Enter EMP ID:</b></label>
      <input type="number" id='e' className='form-control'{...register('empid')}></input>
    
      <br></br>

      <label htmlFor='n'><b>Enter EMP Name: </b></label>
      <input type="text" id='n' className='form-control'{...register('name')}></input>
    
      <br></br>

      <label htmlFor='s'><b>Enter EMP Sallary:</b></label>
      <input type="number" id='s' className='form-control'{...register('salary')}></input>
    
      <br></br>

      <input type="submit" value="Update employee" className='btn btn-outline-danger col-6'></input>
      <input type="reset" value="Reset" className='btn btn-outline-success col-6'></input>
      </form>
      </div>
    </>
  )
}
export default Update