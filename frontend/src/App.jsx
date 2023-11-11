import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen flex">
      <div className="w-7/12 flex flex-col gap-3 items-center p-5 content-center">
        <div className="w-full ml-0 items-start flex content-start">
          <img src="/image/logo.svg" alt="" className="" />
        </div>

        <div className="h-full flex justify-center items-center mb-28">
          <img src="/image/Saly-10.png" alt="" className="" />
        </div>
      </div>
      <div className="w-5/12 flex flex-col gap-3 items-center">
        <div className="h-full flex justify-center items-center">
          <div className="card max-w-md w-screen shadow-2xl bg-base-100">
            <form className="card-body p-0 mt-7 mb-7">
              <p className="text-left">Welcome!</p>
              <p className="text-left font-bold text-3xl pt-5 pb-5">Login</p>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="username"
                  placeholder="Masukan username"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Masukan password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button
                  onClick={() => navigate(`/prediksi`)}
                  className="btn btn-primary"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
