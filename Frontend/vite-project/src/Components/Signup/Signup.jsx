import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post('http://localhost:4001/users/signup', userInfo);
      console.log(res.data);
      if (res.data) {
        toast.success('Signup Successfully');
      navigate('/')
      }
      localStorage.setItem("Users",JSON.stringify(res.data));
    } catch (err) {
      if(err.response){
        console.log(err)
        toast.error("Error:"+err.response.data.message);

      }
    }
  };

  return (
    <div className='bg-white min-h-screen flex items-center justify-center text-black'>
      <div className='p-6 bg-white shadow-md rounded-md'>
        <h1 className='text-2xl font-bold mb-4'>Signup</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mt-4 space-y-2'>
            <div>
              <label htmlFor='fullname' className='block'>
                Name:
              </label>
              <input
                type='text'
                id='fullname'
                placeholder='Enter your FullName'
                className='w-80 px-3 py-2 border rounded-md outline-none bg-white'
                {...register('fullname', { required: true })}
              />
              {errors.fullname && <p className='text-red-500 text-sm'>Name is required</p>}
            </div>
            <div>
              <label htmlFor='email' className='block'>
                Email:
              </label>
              <input
                type='email'
                id='email'
                placeholder='Enter your Email'
                className='w-80 px-3 py-2 border rounded-md outline-none bg-white'
                {...register('email', { required: true })}
              />
              {errors.email && <p className='text-red-500 text-sm'>Email is required</p>}
            </div>
            <div>
              <label htmlFor='password' className='block'>
                Password:
              </label>
              <input
                type='password'
                id='password'
                placeholder='Enter your Password'
                className='w-80 px-3 py-2 border rounded-md outline-none bg-white'
                {...register('password', { required: true })}
              />
              {errors.password && <p className='text-red-500 text-sm'>Password is required</p>}
            </div>
          </div>
          <div className='flex justify-between items-center mt-4'>
            <button
              type='submit'
              className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'
            >
              Signup
            </button>
            <p>
              Already registered?
              <Link to='/login' className='underline text-blue-700 cursor-pointer ml-1'>
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
