import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import * as Yup from 'yup';
import background from '../Images/login.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Please Enter Your User Name...'),
  email: Yup.string().email('Invalid email').required('Please Enter Your Email...'),
  number: Yup.string().required('Please Enter Your Number...'),
  password: Yup.string()
    .required('Please Enter Your Password...')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])/,
      'Password must contain at least one lowercase and one uppercase letter'
    ),
});

export default function Signup() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  axios.defaults.withCredentials = true;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle the password visibility state
  }
  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await SignupSchema.validate(formData, { abortEarly: false });
      const response = await axios.post("http://localhost:5000/api/users/register", formData);
      console.log(response.data.message);
      navigate('/login'); // Redirect to login page after successful registration
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const yupErrors = {};
        error.inner.forEach(err => {
          yupErrors[err.path] = err.message;
        });
        setErrors(yupErrors);
      } else if (error.response && error.response.data && error.response.data.error) {
        console.error("Registration Error", error.response.data.error);
      } else {
        console.error("Registration Error", error.message);
      }
    }
  };
  
  
  return (
    <div>
      <div className="h-screen font-sans login bg-cover" style={{ backgroundImage: `url(${background})` }}>
        <div className="container mx-auto h-full flex flex-1 justify-center items-center xl:pt-10  ">
          <div className="w-full max-w-lg">
          <p className='bg-gradient-to-r from-gray-900 to-gray-400 text-transparent bg-clip-text  font-bold text-5xl mb-10 animate-pulse'> Journey Xtreme</p>
            <div className="leading-loose">
              <form onSubmit={handleSubmit} className="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl">
                <p className="xl:text-gray-500 text-white font-bold text-center text-4xl  font-bold">SIGN UP</p>

                <div className="">
                  <label className="block  text-xl xl:text-gray-500 font-medium text-white">User Name</label>
                  <input
                    className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter Your Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                   {errors.name && <p className="text-red-700">{errors.name}</p>}
                </div>

                <div className="">
                  <label className="block  text-xl xl:text-gray-500 font-medium text-white" htmlFor="email">E-mail</label>
                  <input
                    className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter Your Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p className="text-red-700">{errors.email}</p>}
                </div>

                <div className="">
                  <label className="block  text-xl xl:text-gray-500 font-medium text-white" htmlFor="number">Mobile Number</label>
                  <input
                    className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                    type="text"
                    id="number"
                    name="number"
                    placeholder="Enter Your Number"
                    value={formData.number}
                    onChange={handleChange}
                  />
                   {errors.number && <p className="text-red-700">{errors.number}</p>}
                </div>

                <div className="mt-2">
                  <label className="block  text-xl xl:text-gray-500 font-medium text-white">Password</label>
                  <div className="relative">
                  <input
                      className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                      type={showPassword ? "text" : "password"} // Use the state variable to conditionally render password visibility
                      id="password"
                      name="password"
                      placeholder="******"
                      aria-label="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <button
                      type="button"
                      className="absolute top-0 right-0 mt-2 mr-4 focus:outline-none"
                      onClick={togglePasswordVisibility} // Toggle the password visibility when the button is clicked
                    >
                      <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                    </button>
                  </div>
                   {errors.password && <p className="text-red-700">{errors.password}</p>}
                </div>

                <div className="mt-4 items-center flex justify-between">
                  <button
                    className="px-4 py-1 text-white font-light tracking-wider bg-gray-700 hover:bg-gray-800 rounded"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </div>
                <div className="text-center">
                  <Link
                    className="inline-block right-0 font-semibold align-baseline font-light text-lg text-gray-700 text-500 hover:text-red-400"
                    to="/login"
                  >
                    Login
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
