import React from 'react'
import { useNavigate } from "react-router-dom";
import './Add.css';
import { FaArrowDownLong } from "react-icons/fa6";


const Add = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className='content'><h2>We are glad to have you join our educational community. 
        This is the first step toward becoming a part of an organization dedicated to 
        supporting your academic journey and personal growth.</h2></div>
        <h3>Click here to add your details</h3>
        <h2><FaArrowDownLong />
        </h2>
        <button className='button' onClick={()=>navigate(`/add`)} >ADD</button>
    </div>
  )
}

export default Add