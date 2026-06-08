import { Link, Navigate, useLocation, useNavigate } from "react-router";
import registerImg from "../../assets/registerImage.png";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure"; 
import Swal from "sweetalert2";


const Register = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { registerUser, signInGoogle, updateUserProfile } = useAuth()
  const password = watch('password');
  const location = useLocation();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const handleRegistration = (data) => {
    // console.log('after registration', data.photo[0])
    const profileImage = data.photo[0];


    registerUser(data.email, data.password)
      .then(result => {
        // console.log(result.user)

        // store the image in form data

        const formData = new FormData();
        formData.append('image', profileImage);

        // send the photo in the imgbb to store and get the url

        const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`
        axios.post(image_API_URL, formData)
          .then(res => {
            const photoURL = res.data.data.url

            // store user in the database
            const userInfo = {
              email: data.email,
              displayName: data.name,
              photoURL: photoURL
            }
            axiosSecure.post('/users', userInfo)
              .then(res => {
                if (res.data.insertedId) {
                  console.log('user created in the database')
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
                }
              })

            // update user profile to firebase auth
            const userProfile = {
              displayName: data.name,
              photoURL: photoURL
            }
            updateUserProfile(userProfile)
              .then(() => {
                console.log('user profile updated')
                navigate(location?.state || '/') // navigate to the page user wanted to access before registration, or to home page if no specific page
              })
              .catch(error => {
                console.log('error updating user profile', error.message)
              })
          })
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  const handleGoogleSignIn = () => {
    signInGoogle()
      .then(result => {
        console.log(result.user)

        const userInfo = {
          email: result.user.email,
          displayName: result.user.displayName,
          photoURL: result.user.photoURL
        }
        axiosSecure.post('/users', userInfo)
          .then(res => {
            console.log('user data has been stored')
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500
            });
            Navigate(location.state || '/')
          })
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f7ff] mt-10">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-[900px] grid md:grid-cols-2">

        {/* Left */}
        <div className="bg-gradient-to-br from-violet-700 to-violet-500 flex items-center justify-center">
          <img
            src={registerImg}
            alt=""
            className=""
          />
        </div>

        {/* Right */}
        <div className="p-10">
          <h2 className="text-3xl font-bold text-center mb-2">
            Create Your Account
          </h2>

          <p className="text-center text-gray-500 mb-6">
            Join BookCourier today
          </p>


          <button onClick={handleGoogleSignIn} className="btn btn-outline w-full mb-2">
            <span className="flex items-center gap-2 justify-center">
              <FcGoogle className='text-xl' />
              <p>Continue with Google</p>
            </span>
          </button>

          <div className="divider">OR</div>

          <form onSubmit={handleSubmit(handleRegistration)} className="space-y-4">



            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Name"
              className="input input-bordered w-full"
            />
            {errors.name?.type === 'required'
              &&
              <p className="text-red-500 text-sm">Name is required</p>}



            <input
              {...register("photo", { required: true })}
              type="file"
              placeholder="your photo"
              className=" file-input w-full"
            />
            {errors.photo?.type === 'required'
              &&
              <p className="text-red-500 text-sm">Photo is required</p>}




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



            <input
              {...register("confirmPassword", {
                required: true,
                minLength: 6,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
                validate: value => value === password || "Passwords do not match"
              })}
              type="password"
              placeholder="Confirm Password"
              className="input input-bordered w-full"
            />
            {errors.confirmPassword?.type === 'required'
              &&
              <p className="text-red-500 text-sm">Confirm Password is required</p>}
            {errors.confirmPassword?.type === 'minLength'
              &&
              <p className="text-red-500 text-sm">Confirm Password must be at least 6 characters</p>}
            {errors.confirmPassword?.type === 'pattern'
              &&
              <p className="text-red-500 text-sm">
                Confirm Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character
              </p>}
            {errors.confirmPassword?.type === 'validate'
              &&
              <p className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </p>}


            <select className="select select-bordered w-full">
              <option>Bangladesh</option>
              <option>India</option>
              <option>Pakistan</option>
            </select>

            <button className="btn bg-violet-600 hover:bg-violet-700 text-white w-full">
              Register
            </button>

            <p className="text-center text-sm">
              Already have an account?
              <span className="text-violet-600 ml-1">
                <Link state={location.state} to="/login">Login</Link>
              </span>
            </p>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;