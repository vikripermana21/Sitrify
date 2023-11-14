import React from "react";
import SideBar from "../components/sidebar";
import AvatarProfile from "../components/profile";

const ChartsPage = () => {
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
                      <th>Perubahan</th>
                      <th>Judul Lagu</th>
                      <th>Artis</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody style={{ color: "#29163A" }}>
                    {/* row 1 */}
                    <tr>
                      <td className="pl-2">1</td>

                      <td>
                        <p className="text-green-600">+2</p>
                      </td>
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
                          <div>
                            How can I love the heartbreak, you're the one I love
                          </div>
                        </div>
                      </td>
                      <td>
                        <p>AKMU</p>
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

export default ChartsPage;
