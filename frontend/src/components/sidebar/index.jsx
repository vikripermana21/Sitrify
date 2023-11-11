import React from "react";
import { useNavigate, useParams, useMatch } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

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
            <li className="mb-2">
              <a
                href="/prediksi"
                style={
                  prediksiMatch
                    ? { backgroundColor: "#453158", color: "#ffffff" }
                    : { color: "#ffffff" }
                }
              >
                Prediksi Lagu
              </a>
            </li>

            <li className="mb-2">
              <a
                href="/charts"
                style={
                  chartsMatch
                    ? { backgroundColor: "#453158", color: "#ffffff" }
                    : { color: "#ffffff" }
                }
              >
                Charts
              </a>
            </li>
            <li className="mb-2">
              <a
                href="/daftar-artis"
                style={
                  daftarArtisMatch
                    ? { backgroundColor: "#453158", color: "#ffffff" }
                    : { color: "#ffffff" }
                }
              >
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
