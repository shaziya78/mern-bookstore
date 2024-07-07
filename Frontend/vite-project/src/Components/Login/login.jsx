import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate=useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

    const onSubmit = async (data) => {
      const userInfo = {
        email: data.email,
        password: data.password,
      };
  
      try {
        const res = await axios.post('http://localhost:4001/users/login', userInfo);
        console.log(res.data);
        if (res.data) {
           setTimeout(()=>{
            toast.success('Loggedin Successfully');
            document.getElementById("my_modal_3").close();
            window.location.reload();
           },3000);
       

         navigate('/')
        }
        localStorage.setItem("Users",JSON.stringify(res.data));
      } catch (err) {
        if(err.response){
          console.log(err)
          toast.error("Error:"+err.response.data.message);
          setTimeout(() => {
            
          }, 3000);
        }
      }
    };


  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-white text-black">
          <form onSubmit={handleSubmit((data, e) => {
            e.preventDefault();
            onSubmit(data);
          })} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById("my_modal_3").close()}>✕</button>
            <h3 className="font-bold text-lg">Login</h3>
            <div className='mt-4 space-y-2'>
              <span>Email:</span>
              <br/>
              <input
                type='email'
                placeholder='Enter your Email'
                className='w-80 px-3 border rounded-md outline-none bg-white'
                {...register("email", { required: true })}
              />
              {errors.email && <p className ="text-red-500 text-sm">Email is required</p>}
              <br/>
              <span>Password:</span>
              <br/>
              <input
                type='password'
                placeholder='Enter your Password'
                className='w-80 px-3 border rounded-md outline-none bg-white'
                {...register("password", { required: true })}
              />
              {errors.password && <p className ="text-red-500 text-sm">Password is required</p>}
            </div>
            <div className='flex justify-around mt-4'>
              <button type="submit" className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Login</button>
              <p>Not Registered?
                <Link to="/signup" className='underline text-blue-700 cursor-pointer'> Sign Up</Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
