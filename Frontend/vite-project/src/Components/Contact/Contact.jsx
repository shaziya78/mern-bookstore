import React from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className='bg-white min-h-screen flex items-center justify-center text-black'>
      <div className='p-6 bg-white shadow-md rounded-md'>
        <h1 className='text-2xl font-bold mb-4'>Contact Us</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mt-4 space-y-2'>
            <div>
              <label htmlFor='name' className='block'>
                Name:
              </label>
              <input
                type='text'
                id='name'
                placeholder='Enter your Name'
                className='w-80 px-3 py-2 border rounded-md outline-none bg-white'
                {...register('name', { required: true })}
              />
              {errors.name && <p className='text-red-500 text-sm'>Name is required</p>}
            </div>
            <div>
              <label htmlFor='email' className='block'>
                Email:
              </label>
              <input
                type='email'
                id='email'
                placeholder='Email Address'
                className='w-80 px-3 py-2 border rounded-md outline-none bg-white'
                {...register('email', { required: true })}
              />
              {errors.email && <p className='text-red-500 text-sm'>Email is required</p>}
            </div>
            <div>
              <label htmlFor='password' className='block'>
               Message:
              </label>
           <textarea id='bio' placeholder='Type your message' className='w-80 px-3 py-2 border rounded-md outline-none bg-white'
           {...register('email', { required: true })}
           />
            </div>
          </div>
          <div className='flex justify-between items-center mt-4'>
            <button
              type='submit'
              className='bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200'
            >
              Submit
            </button>
           
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
