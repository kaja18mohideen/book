import React, { useState } from "react";
import Menubar from "../Components/Menubar";
import MenuToggle from "../Components/MenuToggle";
import Navbar from "../Components/Navbar";

const UserManagement = () => {
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
        <Navbar pagename={"Task"} />
        <MenuToggle showMenu={showMenu} handleMenuToggle={handleMenuToggle} />
        <ol className="list-disc list-inside text-lg">
          <li>Complete the user management feature</li>
          <li>Review user access levels</li>
          <li>Update user information</li>
          <li>Add new users to the system</li>
          <li>Remove inactive users</li>
          <li>Monitor user activity</li>
          <li>Assign tasks to team members</li>
        </ol>
      </div>
    </div>
  );
};

export default UserManagement;
