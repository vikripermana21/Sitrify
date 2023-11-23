import React, { useEffect, useState } from "react";
import SideBar from "../components/sidebar";
import AvatarProfile from "../components/profile";
import "simple-datatables";

const DaftarArtisPage = () => {
  const [artistData, setArtistData] = useState([]);
  const [follPopDifference, setFollPopDifferenceData] = useState([]);

  const GetDataArtist = async () => {
    try {
      const chartResponse = await fetch(`http://localhost:5000/api/artist`);
      const artistData = await chartResponse.json();
      setArtistData(artistData.artist);

      const follPopDifferenceResponse = await fetch(
        `http://localhost:5000/api/artist/followers-popularity-difference/all`
      );
      const follPopDifferenceData = await follPopDifferenceResponse.json();
      setFollPopDifferenceData(follPopDifferenceData);

      console.log(artistData.artists);
      console.log(follPopDifferenceData);
    } catch (error) {
      console.error("Error fetching artist data:", error.message);
    }
  };

  useEffect(() => {
    new simpleDatatables.DataTable("#myTable", {
      pagination: true,
    });
    GetDataArtist();
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
        <div className="pl-4 ">
          {" "}
          {/* add h-screen overflow-y-auto buat bisa scrolling */}
          <div className="card bg-base-100 shadow-xl ">
            <div className="card-body p-0">
              <div className="bg-white overflow-x-auto ">
                <table id="myTable" className="table">
                  {/* head */}
                  <thead className="text-black bg-base-200 text-sm">
                    <tr>
                      <th>#</th>
                      <th>Artis</th>
                      <th>Pengikut</th>
                      <th>Popularitas</th>
                    </tr>
                  </thead>
                  <tbody style={{ color: "#29163A" }}>
                    {artistData.map((artist, index) => (
                      <tr>
                        <td></td>
                        <td>
                          <div className="flex items-center space-x-3">
                            <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                <img
                                  src="/image/profile.jpg"
                                  alt="Avatar Tailwind CSS Component"
                                />
                              </div>
                            </div>
                            <div>{artist.name}</div>
                          </div>
                        </td>
                        <td>
                          <p>899.876.999</p>
                          <span className="text-green-600">+41.500</span>
                        </td>
                        <td>
                          <p>95</p>
                          <span className="text-red-600">-2</span>
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

export default DaftarArtisPage;
