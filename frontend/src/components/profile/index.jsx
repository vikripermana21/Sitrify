import React from "react";

const AvatarProfile = () => {
  return (
    <div className="content-end flex">
      <div className="flex justify-between ml-auto">
        <p className="text-white pr-2 pt-2">Taylor Swift</p>
        <img
          className="w-10 h-10 rounded-full border-2"
          src="/image/profile.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default AvatarProfile;
