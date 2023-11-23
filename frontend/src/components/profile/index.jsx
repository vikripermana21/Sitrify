import React from "react";

const AvatarProfile = () => {
  return (
    <div className="content-end flex">
      <div className="flex justify-between ml-auto">
        <p className="text-white pr-2 pt-2">Taylor Swift</p>
        <div className="dropdown dropdown-end">
          <img
            className="w-10 h-10 rounded-full border-2"
            src="/image/profile.jpg"
            alt=""
            tabIndex={0}
          />
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AvatarProfile;
