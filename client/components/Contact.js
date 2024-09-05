import React from 'react';
import './Contact.css';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";


const Contact = () => {
  return (
    <div className="contact">
      <h1>CONNECT WITH US</h1>
      <img src="./images/1.png" alt="Contact us" style={{width:700,height:400,justifyContent:'center'}} />
      <h3><FaPhoneAlt />  0404-48494849</h3>
      <h3><IoMdMail />  studentmanagement@gmail.com</h3>
    </div>
  );
};

export default Contact;
