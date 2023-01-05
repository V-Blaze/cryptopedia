import React from 'react';
import { useNavigate } from 'react-router';
import { BsFillGearFill, BsMicFill } from 'react-icons/bs';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className=" w-full py-4">
      <div className="flex p-1 justify-between text-white">
        <button
          type="button"
          onClick={() => navigate('/')}
          className=" text-xl font-bold  text-green-400 hover:text-white"
        >
          Home
        </button>
        <span className=" font-semibold text-2xl">CryptoPedia</span>
        <span className="flex gap-2">
          <BsMicFill />
          <BsFillGearFill />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
