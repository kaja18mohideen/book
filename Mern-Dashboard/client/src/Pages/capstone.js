import React, { useState } from "react";
import Menubar from "../Components/Menubar";
import MenuToggle from "../Components/MenuToggle";
import Navbar from "../Components/Navbar";

const ContentManagement = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex">
      <div
        className={`w-1/4 h-auto bg-gray-200 text-gray-500 ${
          showMenu ? "" : "hidden"
        } lg:block`}
      >
        <Menubar />
      </div>
      <div className="w-full h-screen">
        <Navbar pagename={"Capstone"} />
        <MenuToggle showMenu={showMenu} handleMenuToggle={handleMenuToggle} />
        <p className="task">
          <span className="task-details">
            <b>Create a responsive web application using React.js submit the url in this form.</b>
          </span>
        </p>
        <br></br>
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContentManagement;
