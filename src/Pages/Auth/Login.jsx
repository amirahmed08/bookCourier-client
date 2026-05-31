import React from 'react'
import loginImg from "../../assets/login.png";
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { Navigate } from 'react-router';

const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const { signInUser, signInGoogle } = useAuth();

  const location = useLocation();
  console.log('in the login page ', location);  
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInGoogle()
      .then(result => {
        console.log(result.user)
        navigate(location?.state || '/') // navigate to the page user wanted to access before login, or to home page if no specific page
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  const handleLogin = (data) => {
    console.log('after login', data)
    signInUser(data.email, data.password)
    .then(result => {
      console.log(result.user)
      navigate(location?.state || '/') // navigate to the page user wanted to access before login, or to home page if no specific page
    })
    .catch(error => {
      console.log(error.message)
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center mt-15">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-[850px] grid md:grid-cols-2">

        {/* Left */}
        <div className="bg-gradient-to-br from-violet-700 to-violet-500 flex items-center justify-center p-8">
          <img
            src={loginImg}
            alt=""
            className="w-72"
          />
        </div>

        {/* Right */}
        <div className="p-10">
          <h2 className="text-3xl font-bold text-center mb-2">
            Welcome Back!
          </h2>

          <p className="text-gray-500 text-center mb-6">
            Login to continue
          </p>

          <button onClick={handleGoogleSignIn} className="btn btn-outline w-full mb-2">
            <span className="flex items-center gap-2 justify-center">
              <FcGoogle className='text-xl' />
            <p>Continue with Google</p>
            </span>
          </button>

          <div className="divider">OR</div>

          <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
            />
            {errors.email?.type === 'required'
              &&
              <p className="text-red-500 text-sm">Email is required</p>}


            <input
              {...register("password", {
                required: true,
                minLength: 6,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/
              })}
              type="password"
              placeholder="Password"
              className="input input-bordered w-full"
            />
            {errors.password?.type === 'required'
              &&
              <p className="text-red-500 text-sm">Password is required</p>}
            {errors.password?.type === 'minLength'
              &&
              <p className="text-red-500 text-sm">Password must be at least 6 characters</p>}
            {errors.password?.type === 'pattern'
              &&
              <p className="text-red-500 text-sm">
                Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character
              </p>}
          

          <div className="flex justify-between mt-4 text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>

            <a
              href="#"
              className="text-violet-600"
            >
              Forgot Password?
            </a>
          </div>

          <button className="btn bg-violet-600 hover:bg-violet-700 text-white w-full mt-6">
            Login
          </button>
          </form>

          <p className="text-center mt-5">
            Don't have an account?
            <span className="text-violet-600 ml-1 font-medium">
              <Link state={location.state} to="/register">Register</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;