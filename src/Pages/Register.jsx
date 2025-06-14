import React, { use } from 'react';
import logo from '../assets/logo.jpg'
import { Link } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const Register = () => {
    const { Register } = use(AuthContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        const data  = Object.fromEntries(formData.entries())
        const { email, password } = data;
        
        Register(email,password).then(res=>{
            console.log(res)
        }).catch(error=>{
            console.log(error)
        })
        console.log(data)
    }
    return (
        <div className='w-2xl mx-auto  py-6'>
            <span className='flex justify-center'><img className='w-17 h-17 rounded-lg object-cover' src={logo} /></span>
            <h1 className={` text-4xl py-3 font-bold text-center`}>Create your account</h1>
            <p className='text-center text-sm font-semibold text-gray-400'>Or <Link className='text-blue-500' to={"/login"}>sign in to your existing account</Link></p>
            <div className='my-8'>
                <form onSubmit={handleSubmit} className='space-y-3'>
                    <input type="text" name='displayName' placeholder="Enter name" className="input h-11 rounded-full  w-full" required />
                    <input type="email" name='email' placeholder="Enter Email" className="input h-11 rounded-full  w-full" required />
                    <input type="text" name='photoURL' placeholder="Photo URL" className="input h-11 rounded-full  w-full" required />
                    <input type="password" name='password' placeholder="Enter Password" className="input h-11 rounded-full  w-full" required />
                    <p className='text-red-500'>{"error"}</p>
                    <button className='btn h-11  bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-full  w-full' type='submit'>Register</button>

                </form>
            </div>
        </div>
    );
};

export default Register;