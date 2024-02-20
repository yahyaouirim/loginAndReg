import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
const Register = (props) => {
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})

    const [user, setUser] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:''
    })
    
    const changeHandler = (e) => {
        setUser({...user, [e.target.name]:e.target.value})
    }


    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/register', user, {withCredentials:true})
            .then((res) => {
                console.log(res);
                navigate('/dashboard')
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <div>
            <form className='d-flex flex-column justify-content-center text-primary col-4 mx-auto mt-3 rounded-5 p-4  gap-3' style={{boxShadow: "0 0 20px rgba(0, 123, 255, 0.5)" }} onSubmit={submitHandler}>
                <div className='form-group'> 
                    <label>First Name: </label>
                    <input type="text" className=' mx-auto form-control ' onChange={changeHandler} value={user.firstName} name='firstName'/>
                </div>
                <div className='form-group'>
                    <label>Last Name: </label>
                    <input type="text" className=' mx-auto form-control' onChange={changeHandler} value={user.lastName} name='lastName'/>
                </div>
                <div className='form-group'>
                    <label>Email: </label>
                    <input type="text" className=' mx-auto form-control' onChange={changeHandler} value={user.email} name='email'/>
                </div>
                <div className='form-group'>
                    <label>Password: </label>
                    <input type="password" className=' mx-auto form-control' onChange={changeHandler} value={user.password} name='password'/>
                </div>
                <div className='form-group'>
                    <label>Confirm Password: </label>
                    <input type="password" className=' mx-auto form-control' onChange={changeHandler} value={user.confirmPassword} name='confirmPassword'/>
                </div>
                <button className=' col-12 mx-auto btn btn-outline-primary mt-2'>Register</button>
                <Link className='' to={'/login'}>Already have an account?</Link>

            </form>
        </div>
)}

export default Register;