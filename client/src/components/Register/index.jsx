import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import '../auth.css';
// import { useForm, FormProvider } from 'react-hook-form';
import axiosClient from '../../axiosClient';
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
import { useNavigate } from "react-router-dom";


export function Input(props) {
  const { name, id, placeholder } = props;

  return (
    <input
      name={name}
      id={id}
      placeholder={placeholder}
      className="wrap-input relative w-full h-12 outline-none py-0 px-6"
      type={
        name === 'password' || name === 'passwordConfirm' ? 'password' : 'text'
      }
    />
  );
}

export default function Register() {
  // const methods = useForm();
  // const onSubmit = (data) => console.log(data);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    const passwordConfirm = e.target.passwordConfirm.value;

    console.log(username, password, passwordConfirm);

    try {
      const response = await axiosClient.post('/auth/register', {
        username,
        password,
        passwordConfirm,

      });
      navigate("/login", { replace: true });
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
        <form onSubmit={handleSubmit}>
          <h1 className="text-center pb-10 font-semibold text-3xl">ĐĂNG KÝ</h1>
          <div className="">
            <Input placeholder="Tên đăng nhập..." id="username" name="username" />
            <Input
              placeholder="Mật khẩu..."
              id="password"
              name="password"
              className="inp"
            />
            <Input
              placeholder="Nhập lại mật khẩu..."
              id="passwordConfirm"
              name="passwordConfirm"
              className="inp"
            />
            <button
              className="border-2 wrap-input relative w-full h-12 outline-none py-0 px-6 mt-5 
                bg-slate-800 text-white hover:bg-slate-600"
              type="submit"
            >
              Đăng ký
            </button>
            <div className="pt-11 font-mono">
              <span>Bạn đã có tài khoản?</span>
              <Link to="/login" className="hover:text-blue-500 ml-2">
                Đăng nhập
              </Link>
            </div>
          </div>
        </form>
      </div>
      {/* </FormProvider> */}
    </div>
  );
}
