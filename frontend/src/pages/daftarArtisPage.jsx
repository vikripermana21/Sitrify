import React from "react";
import SideBar from "../components/sidebar";
import AvatarProfile from "../components/profile";

const DaftarArtisPage = () => {
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
                      <th>#</th>
                      <th>Artis</th>
                      <th>Pengikut</th>
                      <th>Popularitas</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody style={{ color: "#29163A" }}>
                    {/* row 1 */}
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
                          <div>Drake</div>
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
