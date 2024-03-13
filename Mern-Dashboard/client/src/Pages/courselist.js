import React, { useState } from "react";
import Menubar from "../Components/Menubar";
import MenuToggle from "../Components/MenuToggle";
import Navbar from "../Components/Navbar";

const MarketPlace = () => {
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
        <Navbar pagename={"Course list"} />
        <MenuToggle showMenu={showMenu} handleMenuToggle={handleMenuToggle} />
        <p>1. Introduction to Computer Science</p>
        <p>2. Data Structures and Algorithms</p>
        <p>3. Web Development with HTML, CSS, and JavaScript</p>
        <p>4. Machine Learning Fundamentals</p>
        <p>5. Mobile App Development with React Native</p>
        <p>6. Introduction to Artificial Intelligence</p>
        <p>7. Database Management Systems</p>
        <p>8. Software Engineering Principles</p>
        <p>9. Computer Networks</p>
        <p>10. Cybersecurity Fundamentals</p>
        <p>11. Operating Systems</p>
        <p>12. Introduction to Data Science</p>
        <p>13. Full-Stack Web Development</p>
        <p>14. Digital Marketing Strategies</p>
        <p>15. Game Development with Unity</p>
        <p>16. Cloud Computing Essentials</p>
        <p>17. Ethical Hacking and Penetration Testing</p>
        <p>18. Business Analysis and Management</p>
        <p>19. Internet of Things (IoT)</p>
        <p>20. Advanced Python Programming</p>
      </div>
    </div>
  );
};

export default MarketPlace;
