import React from "react";
import { useNavigate, useParams, useMatch } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { IoBarChartSharp } from "react-icons/io5";
import { FiTrendingUp } from "react-icons/fi";
import { BiListUl } from "react-icons/bi";

const SideBar = ({ contentType }) => {
  const navigate = useNavigate();
  const prediksiMatch = useMatch(`/prediksi`);
  const chartsMatch = useMatch(`/charts`);
  const daftarArtisMatch = useMatch(`/daftar-artis`);

  return (
    <div className="h-screen w-full flex">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex items-center justify-center">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            <FiMenu />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul
            className="menu p-4 w-80 h-screen text-base-content"
            style={{ backgroundColor: "#29163A" }}
          >
            <li className="mb-2">
              <img src="/image/logo.svg" alt="" className="" />
            </li>
            <li
              className="mb-2 text-base"
              style={
                prediksiMatch
                  ? { backgroundColor: "#453158", color: "#fff" }
                  : { color: "#ffffff" }
              }
            >
              <a
                href="/prediksi"
                style={prediksiMatch ? { color: "#fff" } : { color: "#ffffff" }}
              >
                <FiTrendingUp />
                Prediksi Lagu
              </a>
            </li>

            <li
              className="mb-2 text-base"
              style={
                chartsMatch
                  ? { backgroundColor: "#453158", color: "#fff" }
                  : { color: "#ffffff" }
              }
            >
              <a
                href="/charts"
                style={chartsMatch ? { color: "#fff" } : { color: "#ffffff" }}
              >
                <IoBarChartSharp />
                Charts
              </a>
            </li>
            <li
              className="mb-2 text-base"
              style={
                daftarArtisMatch
                  ? { backgroundColor: "#453158", color: "#fff" }
                  : { color: "#ffffff" }
              }
            >
              <a
                href="/daftar-artis"
                style={
                  daftarArtisMatch ? { color: "#fff" } : { color: "#ffffff" }
                }
              >
                <BiListUl />
                Daftar Artis
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
