import React, { useState } from "react";
import Menubar from "../Components/Menubar";
import MenuToggle from "../Components/MenuToggle";
import Navbar from "../Components/Navbar";

const CustomerManagement = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex">
      <div
        className={`w-1/4 h-auto h-screen bg-gray-200 text-gray-500 ${
          showMenu ? "" : "hidden"
        } lg:block`}
      >
        <Menubar />
      </div>
      <div className="w-3/4 h-screen">
        <Navbar pagename={"web code"} />
        <MenuToggle showMenu={showMenu} handleMenuToggle={handleMenuToggle} />
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">Web code task complition list</h1>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border px-4 py-2">NAME</th>
                <th className="border px-4 py-2">URL</th>
                <th className="border px-4 py-2">MARK</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">John Doe</td>
                <td className="border px-4 py-2">http.......com</td>
                <td className="border px-4 py-2">8</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Jane Doe</td>
                <td className="border px-4 py-2">http......com</td>
                <td className="border px-4 py-2">5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomerManagement;
