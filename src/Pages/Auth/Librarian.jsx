import React from "react";
import loginImg from "../../assets/riderImage.png";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const Librarian = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { signInUser, signInGoogle } = useAuth();

    const handleGoogleSignIn = () => {
        signInGoogle()
            .then((result) => {
                console.log(result.user);
                navigate("/");
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    const handleLogin = (data) => {
        signInUser(data.email, data.password)
            .then((result) => {
                console.log(result.user);
                navigate("/");
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-gradient-to-br from-violet-100 via-white to-purple-100">
            <div className="w-full max-w-5xl overflow-hidden bg-white shadow-2xl rounded-3xl grid md:grid-cols-2">

                {/* Left Side */}
                <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-violet-700 via-violet-600 to-purple-600 p-10 relative overflow-hidden">

                    <div className="absolute w-72 h-72 bg-white/10 rounded-full -top-20 -left-20"></div>
                    <div className="absolute w-56 h-56 bg-white/10 rounded-full -bottom-10 -right-10"></div>

                    <img
                        src={loginImg}
                        alt="Login Illustration"
                        className="w-80 relative z-10 "
                    />
                </div>

                {/* Right Side */}
                <div className="relative p-8 md:p-12">

                    {/* Decorative Blur */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-violet-200 rounded-full blur-3xl opacity-40"></div>
                    <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-200 rounded-full blur-3xl opacity-40"></div>

                    <div className="relative z-10">

                        <h2 className="text-4xl font-bold text-center text-gray-800">
                            Welcome Back
                        </h2>

                        <p className="text-center text-gray-500 mt-2 mb-8">
                            Login to access your dashboard
                        </p>

                        {/* Google Login */}
                        <button
                            onClick={handleGoogleSignIn}
                            className="btn btn-outline w-full h-14 rounded-xl hover:scale-[1.02] transition-all duration-300"
                        >
                            <FcGoogle className="text-2xl" />
                            Continue with Google
                        </button>

                        <div className="divider my-6">OR</div>

                        <form
                            onSubmit={handleSubmit(handleLogin)}
                            className="space-y-5"
                        >
                            {/* Email */}
                            <div>
                                <div className="relative group">
                                    <MdEmail className="absolute left-4 top-1/2 -translate-y-1/2 text-violet-500 text-xl group-focus-within:scale-110 transition-all duration-300" />

                                    <input
                                        {...register("email", {
                                            required: true,
                                        })}
                                        type="email"
                                        placeholder=" "
                                        className="peer w-full h-14 pl-12 pr-4 border border-gray-300 rounded-xl bg-white focus:border-violet-500 focus:ring-4 focus:ring-violet-100 outline-none transition-all duration-300"
                                    />

                                    <label className="absolute left-12 top-4 text-gray-500 bg-white px-1 transition-all duration-300 peer-focus:-top-2 peer-focus:left-4 peer-focus:text-xs peer-focus:text-violet-600 peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:text-xs">
                                        Email Address
                                    </label>
                                </div>

                                {errors.email?.type === "required" && (
                                    <p className="text-red-500 text-sm mt-1">
                                        Email is required
                                    </p>
                                )}
                            </div>

                            {/* Password */}
                            <div>
                                <div className="relative group">
                                    <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-violet-500 text-lg group-focus-within:scale-110 transition-all duration-300" />

                                    <input
                                        {...register("password", {
                                            required: true,
                                            minLength: 6,
                                            pattern:
                                                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
                                        })}
                                        type="password"
                                        placeholder=" "
                                        className="peer w-full h-14 pl-12 pr-4 border border-gray-300 rounded-xl bg-white focus:border-violet-500 focus:ring-4 focus:ring-violet-100 outline-none transition-all duration-300"
                                    />

                                    <label className="absolute left-12 top-4 text-gray-500 bg-white px-1 transition-all duration-300 peer-focus:-top-2 peer-focus:left-4 peer-focus:text-xs peer-focus:text-violet-600 peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:text-xs">
                                        Password
                                    </label>
                                </div>

                                {errors.password?.type === "required" && (
                                    <p className="text-red-500 text-sm mt-1">
                                        Password is required
                                    </p>
                                )}

                                {errors.password?.type === "minLength" && (
                                    <p className="text-red-500 text-sm mt-1">
                                        Password must be at least 6 characters
                                    </p>
                                )}

                                {errors.password?.type === "pattern" && (
                                    <p className="text-red-500 text-sm mt-1">
                                        Must contain uppercase, lowercase, number and special character
                                    </p>
                                )}
                            </div>

                            {/* Remember + Forgot */}
                            <div className="flex justify-between items-center text-sm">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="checkbox checkbox-sm checkbox-primary"
                                    />
                                    Remember me
                                </label>

                                <button
                                    type="button"
                                    className="text-violet-600 hover:text-violet-800 transition"
                                >
                                    Forgot Password?
                                </button>
                            </div>

                            {/* Login Button */}
                            <button
                                type="submit"
                                className="w-full h-14 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-violet-300 hover:scale-[1.02] active:scale-95 transition-all duration-300"
                            >
                                Login
                            </button>
                        </form>

                        <p className="text-center mt-6 text-gray-600">
                            Don't have an account?
                            <Link
                                to="/register"
                                className="ml-2 text-violet-600 font-semibold hover:text-violet-800 transition"
                            >
                                Register
                            </Link>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Librarian;