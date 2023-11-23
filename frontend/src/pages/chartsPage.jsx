import React, { useState, useEffect } from "react";
import SideBar from "../components/sidebar";
import AvatarProfile from "../components/profile";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";

const ChartsPage = () => {
  const [chartData, setChartData] = useState([]);
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Tambah 1 karena bulan dimulai dari 0
  const day = String(today.getDate()).padStart(2, "0");

  const currentDate = `${year}-${month}-${day}`;
  console.log(currentDate);

  const GetDataChart = async () => {
    try {
      const chartResponse = await fetch(
        `http://localhost:5000/api/chart/${currentDate}`
      );
      const chartData = await chartResponse.json();
      setChartData(chartData.chart_songs);

      console.log(chartData.chart_songs);
    } catch (error) {
      console.error("Error fetching chart data:", error.message);
    }
  };

  useEffect(() => {
    GetDataChart();
  }, []);

  return (
    <div className="h-screen w-screen flex">
      <div className="w-1/4 flex flex-col gap-3 items-center">
        <SideBar />
      </div>
      <div className="w-3/4 flex flex-col gap-3 p-5">
        <AvatarProfile />
        <div className="content-start flex">
          <p className="font-bold text-3xl text-white pl-4 pb-4">
            Daftar Artis
          </p>
        </div>
        <div className="pl-4">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body p-0">
              <div className="bg-white overflow-x-auto ">
                <table className="table">
                  {/* head */}
                  <thead className="text-black bg-base-200 text-sm">
                    <tr>
                      <th>Ranking</th>
                      <th>Judul Lagu</th>
                      <th>Artis</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody style={{ color: "#29163A" }}>
                    {chartData.map((song, index) => (
                      <tr key={index}>
                        <td className="pl-2">
                          {song.ranking}
                          {(() => {
                            if (song.ranking_difference === "new") {
                              // "new" case
                              return (
                                <span className="badge badge-info badge-sm ml-1">
                                  New
                                </span>
                              );
                            } else if (song.ranking_difference === "0") {
                              // "0" case
                              return (
                                <span className="badge badge-ghost badge-sm ml-1">
                                  No Change
                                </span>
                              );
                            } else if (song.ranking_difference === "-") {
                              // "-" case
                              return (
                                <span className="badge badge-error badge-sm ml-1">
                                  <FaArrowDown />
                                </span>
                              );
                            } else {
                              // Numeric case
                              const isPositive =
                                parseInt(song.ranking_difference) > 0;
                              const badgeClass = isPositive
                                ? "badge-success"
                                : "badge-error";
                              const arrowIcon = isPositive ? (
                                <FaArrowUp />
                              ) : (
                                <FaArrowDown />
                              );
                              return (
                                <span
                                  className={`badge ${badgeClass} badge-sm ml-1`}
                                >
                                  {arrowIcon}
                                  {Math.abs(song.ranking_difference)}
                                </span>
                              );
                            }
                          })()}
                        </td>

                        <td>
                          <div className="flex items-center space-x-3">
                            <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                <img src={song.image} alt="Avatar" />
                              </div>
                            </div>
                            <div>{song.song_name}</div>
                          </div>
                        </td>
                        <td>
                          <p>{song.artist[0].name}</p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartsPage;
