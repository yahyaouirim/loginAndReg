import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = (props) => {
    const navigate = useNavigate()
    const [userLogin, setUserLogin] = useState({
        email:'',
        password:''
    })

    const changeHandler = (e) => {
        setUserLogin({...userLogin, [e.target.name]:e.target.value})
    }

    const loginHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/login', userLogin, {withCredentials:true})
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
            <form onSubmit={loginHandler}  style={{boxShadow: "0 0 20px rgba(0, 123, 255, 0.5)" }}  className='col-4 mx-auto mt-5 p-4 rounded-5 user-form text-primary'>
                <label className='form-label'>Email:</label>
                <input className='form-control' type="text" name='email' value={userLogin.email} onChange={changeHandler}/>

                <label className='form-label'>Password:</label>
                <input className='form-control' type="password" name='password' value={userLogin.password} onChange={changeHandler}/>

                <button className='btn btn-outline-primary col-12 mt-3 mb-3'>Login</button>
                <br />
                <Link className=' ' to={'/'}>Dont have an account? click here to sign up</Link>
            </form>
        </div>
)}

export default Login;