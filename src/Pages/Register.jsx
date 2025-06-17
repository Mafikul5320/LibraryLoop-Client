import React, { use, useState } from 'react';
import logo from '../assets/logo.jpg'
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';

const Register = () => {
    const { Register, UpdateUser } = use(AuthContext)
    const [Error, setError] = useState("");
    const Navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries())
        const { email, password, ...remain } = data;
        setError("")
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password) == true) {
            return setError('Password must have uppercase , lowercase , and 6 characters long')
        }

        Register(email, password).then(res => {
            // console.log(res)
            UpdateUser(remain).then(() => {
                // console.log("Profile update")
                Navigate("/")
                Swal.fire({
                    title: "Register Successfull!",
                    icon: "success",
                    draggable: true
                });
            })
        }).catch(() => {
            Swal.fire({
                title: "Failed to Register!",
                icon: "error",
                draggable: true
            });
        })
        console.log(data)
    }

    return (
        <div className='max-w-xl w-full mx-auto px-4 py-6 sm:px-6 lg:px-8'>
            <span className='flex justify-center'>
                <img className='w-20 h-20 rounded-lg object-cover' src={logo} alt="Logo" />
            </span>
            <h1 className='text-3xl sm:text-4xl py-3 font-bold text-center'>Create your account</h1>
            <p className='text-center text-sm font-semibold text-gray-400'>
                Or <Link className='text-blue-500' to={"/login"}>sign in to your existing account</Link>
            </p>
            <div className='my-8'>
                <form onSubmit={handleSubmit} className='space-y-3'>
                    <input
                        type="text"
                        name='displayName'
                        placeholder="Enter name"
                        className="input h-11 rounded-full w-full"
                        required
                    />
                    <input
                        type="email"
                        name='email'
                        placeholder="Enter Email"
                        className="input h-11 rounded-full w-full"
                        required
                    />
                    <input
                        type="text"
                        name='photoURL'
                        placeholder="Photo URL"
                        className="input h-11 rounded-full w-full"
                        required
                    />
                    <input
                        type="password"
                        name='password'
                        placeholder="Enter Password"
                        className="input h-11 rounded-full w-full"
                        required
                    />
                    <p className='text-red-500'>{Error}</p>
                    <button
                        className='btn h-11 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-full w-full'
                        type='submit'
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
