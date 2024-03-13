import React, { useState } from "react";
import Menubar from "../Components/Menubar";
import MenuToggle from "../Components/MenuToggle";
import Navbar from "../Components/Navbar";

const HomeService = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex">
      <div
        className={`w-1/4 h-auto h-screen bg-gray-200 text-gray-500 ${
          showMenu ? "" : "hidden"
        } lg:block`}>
        <Menubar />
      </div>
      <div className="w-3/4 h-screen">
        <Navbar pagename={"Placements Board"} />
        <MenuToggle showMenu={showMenu} handleMenuToggle={handleMenuToggle} />
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2">COMPANY NAME</th>
              <th className="border px-4 py-2">POSITION</th>
              <th className="border px-4 py-2">CTC</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">HEXAWARE</td>
              <td className="border px-4 py-2">MERN</td>
              <td className="border px-4 py-2">3LPA</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">CTS</td>
              <td className="border px-4 py-2">WEB DEVELOPER</td>
              <td className="border px-4 py-2">4LPA</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">HCL</td>
              <td className="border px-4 py-2">FRONTEND</td>
              <td className="border px-4 py-2">3.5LPA</td>
            </tr>


          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomeService;
