import React, {useRef} from 'react';
import { Link } from 'react-router-dom';
import '../auth.css';
import { useForm, FormProvider } from 'react-hook-form';
// import axiosClient from "../../axiosClient"
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

export function Input(props) {
  const { name, id, placeholder } = props;

  return (
    <input
      name={name}
      id={id}
      placeholder={placeholder}
      className="wrap-input relative w-full h-12 outline-none py-0 px-6"
      type={name==='password' || name === "passwordConfirm" ? "password" : "text"} 
    />
  );
}

export default function Register() {
  const methods = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div
      className="container-register p-5 w-full min-h-screen flex flex-wrap 
    justify-center items-center"
    >
      <FormProvider {...methods}>
        <div className="border-2 bg-white rounded-xl pr-14 pl-14 pb-14 pt-10">
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <h1 className="text-center pb-10 font-semibold text-3xl">
              Register
            </h1>
            <div className="">
              <Input placeholder="Username" id="username" name="username" />
              <Input
                placeholder="Password"
                id="password"
                name="password"
                className="inp"
              />
              <Input
                placeholder="Password Confirm"
                id="passwordConfirm"
                name="passwordConfirm"
                className="inp"
              />
              <button 
                className="border-2 wrap-input relative w-full h-12 outline-none py-0 px-6 mt-5 
                bg-slate-800 text-white hover:bg-slate-600">
                REGISTER
              </button>
              <div className="pt-11 font-mono">
                <span>Already have an account?</span>
                <Link to="/login" className="hover:text-blue-500"> Login </Link>
              </div>
            </div>
          </form>
        </div>
      </FormProvider>
    </div>
  );
}
