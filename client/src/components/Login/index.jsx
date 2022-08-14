import React from 'react';
import '../auth.css';
import { Input } from '../Register';
// import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axiosClient from '../../axiosClient';

export default function Login() {
  // const methods = useForm();
  // const onSubmit = (data) => console.log(data);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    console.log(username, password);

    try {
      const response = await axiosClient.post('/auth/login', {
        username,
        password,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="container-register p-5 w-full min-h-screen flex flex-wrap 
    justify-center items-center"
    >
      {/* <FormProvider {...methods}> */}
      <div className="border-2 bg-white rounded-xl pr-14 pl-14 pb-14 pt-10">
        <form onSubmit={handleSubmit} action="">
          <h1 className="text-center pb-10 font-semibold text-3xl">Login</h1>
          <div className="">
            <Input placeholder="Username" id="username" name="username" />
            <Input
              placeholder="Password"
              id="password"
              name="password"
              className="inp"
            />

            <button
              className="border-2 wrap-input relative w-full h-12 outline-none py-0 px-6 mt-5 
                bg-slate-800 text-white hover:bg-slate-600"
              type="submit"
            >
              LOGIN
            </button>
            <div className="pt-11 font-mono">
              <span>Already have an account?</span>
              <Link to="/register" className="hover:text-blue-500">
                {' '}
                Register{' '}
              </Link>
            </div>
          </div>
        </form>
      </div>
      {/* </FormProvider> */}
    </div>
  );
}
