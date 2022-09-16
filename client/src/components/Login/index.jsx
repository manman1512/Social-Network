import React, { useContext } from 'react';
import '../auth.css';
import { Input } from '../Register';
// import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axiosClient from '../../axiosClient';
import { useNavigate } from 'react-router-dom';
import { Context } from '../context/Context';
import { setUser } from '../context/Actions';


export default function Login() {

  const navigate = useNavigate();
  const [state, dispatch] = useContext(Context);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    try {
      const response = await axiosClient.post('/auth/login', {
        username,
        password,
      });
      console.log(response);
      const token = response.data.accessToken;
      const user = response.data.User;
      if(user){
        dispatch(setUser(user))
      }
      console.log("🚀 ~ file: index.jsx ~ line 25 ~ handleSubmit ~ user", user)
      localStorage.setItem('accessToken', token);
      console.log("🚀 ~ file: index.jsx ~ line 26 ~ handleSubmit ~ localStorage", localStorage)
      navigate('/', { replace: true });

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
          <h1 className="text-center pb-10 font-semibold text-3xl">
            ĐĂNG NHẬP
          </h1>
          <div className="">
            <Input
              placeholder="Tên đăng nhập..."
              id="username"
              name="username"
            />
            <Input
              placeholder="Mật khẩu..."
              id="password"
              name="password"
              className="inp"
            />

            <button
              className="border-2 wrap-input relative w-full h-12 outline-none py-0 px-6 mt-5 
                bg-slate-800 text-white hover:bg-slate-600"
              type="submit"
              // onClick= {handleClick}
            >
              Đăng nhập
            </button>
            <div className="pt-11 font-mono">
              <span>Bạn chưa có tài khoản?</span>
              <Link to="/register" className="hover:text-blue-500 ml-2">
                Đăng ký
              </Link>
            </div>
          </div>
        </form>
      </div>
      {/* </FormProvider> */}
    </div>
  );
}
