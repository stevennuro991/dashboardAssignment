import React, { useRef } from 'react';
import Menu from './Menu';

const Sidebar = () => {

  const menus = [
    { id: 1, title: "Profile", icon: "User.png", bold: true },
    { id: 2, title: "My listing", icon: "Listing.png", bold: false },
    { id: 3, title: "Saved homes", icon: "Saved-homes.png", bold: false },
    { id: 4, title: "Saved search", icon: "Saved-search.png", bold: true },
    { id: 5, title: "Messages", icon: "Messages.png", bold: false },
    { id: 6, title: "Notifications", icon: "Notifications.png", bold: false },
    { id: 7, title: "Billing", icon: "Billing.png", bold: false },
    { id: 8, title: "Analytics", icon: "Analytics.png", bold: false },
    { id: 9, title: "Blog", icon: "Blog.png", bold: false },
  ];

  const inputLink = useRef(null)

  const saveLink = () => {
    navigator.clipboard.writeText(inputLink.current.value);
  }

  return (
    <div className={`h-[838px] hidden lg:block absolute lg:static bg-white flex flex-col p-5 rounded-lg shadow-lg lg:mr-[27px]`}>
      <div className="relative flex flex-col justify-center items-center">
        <div className="bg-buttonGreen flex justify-center items-center absolute top-14 right-[82px] rounded-full h-4 w-4">
          <img src={require (`../../../assets/icons/bx-camera 1.png`)} alt="" />
        </div>
        <img src={require(`../../../assets/imgs/avatar.jpeg`)} height="78" width="78" alt="avatar" />
        <h5 className="mt-4 font-bold text-lg">Alex Assenmacher</h5>
        <p className="text-textGrey text-sm my-3">Home Buyer</p>
        <button className="bg-buttonGreen rounded-md mb-4 p-1 px-6 text-white">
          Edit Profile
        </button>
      </div>
      {menus.map((menu) => {
        return (
          <div key={menu.id}>
            <Menu title={menu.title} icon={menu.icon} bold={menu.bold} />
          </div>
        );
      })}
      <hr />
      <div>
        <p className="text-sm mt-5">Profile link</p>
        <div className="flex items-center justify-start">
          <input
            ref={inputLink}
            className="text-xs text-blue-500 p-3 border rounded-l-md"
            type="text"
            value="https://www.udwell.com/p."
            readOnly
          />
          <button
            onClick={saveLink}
            className="border rounded-r-md text-textGrey p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;