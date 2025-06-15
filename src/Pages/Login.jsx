import { BookOpen } from 'lucide-react';
import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import logo from '../assets/logo.jpg'
import { AuthContext } from '../Context/AuthContext';
import { GoogleAuthProvider } from 'firebase/auth';
import Swal from 'sweetalert2';

const Login = () => {
    const { Login, GoogleSignIn } = use(AuthContext)
    const Provider = new GoogleAuthProvider();
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const from = e.target;
        const formData = new FormData(from);
        const { email, password } = Object.fromEntries(formData.entries())
        Login(email, password).then(() => {
            navigate("/")
            Swal.fire({
                title: "Login Successfull!",
                icon: "success",
                draggable: true
            });
        }).catch(error => {
            console.log(error)
            Swal.fire({
                title: "Failed to Login!",
                icon: "error",
                draggable: true
            });
        })
    }
    const handelGoogleLogin = () => {
        GoogleSignIn(Provider).then(() => {
            navigate("/")
            Swal.fire({
                title: "Login Successfull!",
                icon: "success",
                draggable: true
            });
        }).catch(() => {
            Swal.fire({
                title: "Failed to Login!",
                icon: "error",
                draggable: true
            });
        })
    }
    return (
        <div className='w-2xl mx-auto py-6'>
            <span className='flex justify-center'><img className='w-17 h-17 rounded-lg object-cover' src={logo} /></span>
            <h1 className={`text-4xl py-3 font-bold  text-center`}>Sign in to your account</h1>
            <p className='text-center text-sm font-semibold text-gray-400'>Or <Link className='text-blue-500' to={"/register"}>create a new account</Link></p>
            <div className='my-8  '>
                <form onSubmit={handleSubmit} className='space-y-3'>
                    <input type="email" name='email' placeholder="Enter Email" className="input h-11 rounded-full  w-full" />

                    <input type="password" name='password' placeholder="Enter Password" className="input h-11 rounded-full  w-full" />
                    <button className='btn h-11 mb-6 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-full  w-full' type='submit'>Login</button>

                </form>
                <fieldset className='border-t  border-gray-400  '>
                    <legend className='text-center px-2 text-gray-500'>Or continue with</legend>
                </fieldset>
                <button onClick={handelGoogleLogin} className="btn my-3 h-11 rounded-full  w-full bg-white text-black border-[#362478]">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Login with Google
                </button>
            </div>
        </div>
    );
};

export default Login;