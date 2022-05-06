import React, { useState, useEffect } from "react";
import Menu from './Body/Sidebar/Menu';

const NavBar = () => {

	const menus = [
    { id: 1, title: "Profile", icon: "User.png", bold: false },
    { id: 2, title: "My listing", icon: "Listing.png", bold: false },
    { id: 3, title: "Saved homes", icon: "Saved-homes.png", bold: false },
    { id: 4, title: "Saved search", icon: "Saved-search.png", bold: false },
    { id: 5, title: "Messages", icon: "Messages.png", bold: false },
    { id: 6, title: "Notifications", icon: "Notifications.png", bold: false },
    { id: 7, title: "Billing", icon: "Billing.png", bold: false },
    { id: 8, title: "Analytics", icon: "Analytics.png", bold: false },
    { id: 9, title: "Blog", icon: "Blog.png", bold: false },
  ];

	const [mobile, setMobile] = useState(false);
	const [activeMenu, setActiveMenu] = useState(false);

	const screenSize = () => {
		if(window.innerWidth <= 900) {
			setMobile(true)
		}
	}

	const menuToggle = () => {
		setActiveMenu(!activeMenu)
	}

	useEffect(() => {
		screenSize();
	},[]);

	window.addEventListener('resize', screenSize);

  return (
    <nav className="bg-white flex justify-center items-center h-[80px] mb-[30px]">
      <div className="flex justify-center lg:justify-end items-center w-full py-3 px-5 lg:px-28">
        <div className="relative mr-10 lg:mr-44 flex justify-end items-center">
          <img
            className="absolute left-10 cursor-pointer"
            src={require(`../assets/icons/New Delhi.png`)}
            alt=""
          />
          <input
            className="hidden lg:block bg-bodyGrey rounded-l-md px-2 py-2 w-3/5 text-grey-700 outline-0"
            type="text"
            placeholder="Add More"
          />
          <button className="bg-buttonGreen text-white p-2 rounded-none lg:rounded-r-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
        <div className="flex items-center justify-end">
          <div className="flex w-full justify-end">
            <p className="mx-10 cursor-pointer text-center">Udwell Now</p>
            <p className="cursor-pointer text-center">Sell a property</p>
          </div>
          <img
            height="18"
            width="24"
            onClick={menuToggle}
            className="ml-24 cursor-pointer"
            src={require(`../assets/icons/${
              activeMenu ? "close.jpeg" : "menu-left-2-icon 1.png"
            }`)}
            alt=""
          />
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`${
          mobile && activeMenu ? "block" : "hidden"
        } shadow-lg p-5 rounded-md bg-white absolute z-50 top-24 w-[300px] mx-auto`}
      >
        {menus.map((menu) => {
          return (
            <div key={menu.id}>
              <div className="flex justify-between items-center px-2 py-3">
                <p
                  className={`${
                    menu.bold && "font-bold"
                  } cursor-pointer hover:font-bold`}
                >
                  {menu.title}
                </p>
                <img src={require(`../assets/icons/${menu.icon}`)} alt="" />
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default NavBar;
