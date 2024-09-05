import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Registration.css';

const Registration = () => {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    gender: ''
  });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);

const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};


  const fetchStudents = async () => {
    const response = await axios.get('http://localhost:5000/api/students/fetch');
    setStudents(response.data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'dob') {
      const formattedDate = new Date(value).toISOString().split('T')[0];
      setFormData({
        ...formData,
        [name]: formattedDate,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await axios.put(`http://localhost:5000/api/students/update/${editId}`, formData);
      setEditId(null);
    } else {
      await axios.post('http://localhost:5000/api/students/add', formData);
    }
    fetchStudents();
    setFormData({ firstName: '', lastName: '', dob: '', gender: '' });
  };

  const handleEdit = (id) => {
    const student = students.find(student => student.id === id);
  
    if (student) {
      const formattedDob = new Date(student.dob).toISOString().split('T')[0];
      setFormData({
        firstName: student.firstName,
        lastName: student.lastName,
        dob: formattedDob, 
        gender: student.gender,
      });
  
      setEditId(id);
    }
  };
  

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/students/delete/${id}`);
    fetchStudents();
  };

  return (
    <>
      <div className="registration">
        <h1>Student Registration</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <button type="submit">{editId ? 'UPDATE' : 'ADD'}</button>
        </form>
      </div>
      <div className='table'>
        <table>
          <thead>
            <tr>
              <th>FIRST NAME</th>
              <th>LAST NAME</th>
              <th>DATE OF BIRTH</th>
              <th>GENDER</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            { students.length > 0 ?(
              students.map((student) => (
                <tr key={student.id}>
                  <td>{student.firstName}</td>
                  <td>{student.lastName}</td>
                  <td>{formatDate(student.dob)}</td>
                  <td>{student.gender}</td>
                  <td>
                    <button onClick={() => handleEdit(student.id)}>Edit</button>
                    <button onClick={() => handleDelete(student.id)}>Delete</button>
                  </td>
                </tr>
              ))
            ):(
              <tr>
                <td colSpan="5">No Data Found</td>
              </tr> 
            )}
          </tbody>
        </table>
      </div>
    </> 
  );
};

export default Registration;
