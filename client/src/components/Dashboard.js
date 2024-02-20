import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Dashboard = (props) => {
    
 
    const navigate = useNavigate()
    const logout = () => {
        axios.post('http://localhost:8000/api/logout', {}, { withCredentials: true })
            .then((res) => {
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <div className=' container mt-5'>
            <div className='d-flex w-100  justify-content-between  mt-5'>
                <div> <h1 className='text-center mt-5'>Welcome to the dashboard </h1>
                </div>
                <div><button className='btn btn-outline-primary mt-5' onClick={logout}>Logout</button> </div>
            </div>
        </div>
    )
}

export default Dashboard;