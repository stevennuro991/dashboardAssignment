import React from 'react';


const Main = () => {

    return (
      <div className="lg:h-[838px] w-full shadow-lg rounded-md bg-white p-8">
        <div className="flex flex-col lg:flex-row w-full">
          <div className="border rounded p-6">
            <div className="flex justify-between items-center">
              <h1 className="">Sales</h1>
              <p className="text-sm text-textGrey">Monthly Goal</p>
            </div>
            <div className="flex justify-between items-center my-3">
              <h1 className="text-3xl">98.1%</h1>
              <p className="text-buttonGreen">+6.9%</p>
            </div>
            <img src={require(`../../assets/icons/Progress Bar.png`)} alt="" />
            <p className="text-sm text-textGrey text-gray-400 mt-3">
              Yearly Goal
            </p>
          </div>
          <div className="border my-6 lg:mx-6 lg:my-0 rounded p-6">
            <div className="flex justify-between items-center">
              <h1 className="">Revenue</h1>
              <p className="text-sm text-textGrey">Total Profit</p>
            </div>
            <div className="flex justify-between items-center mt-3 mb-5">
              <h1 className="text-3xl">$13,893</h1>
              <p className="text-barOrange">+11.3%</p>
            </div>
            <img src={require(`../../assets/icons/Graph-3.png`)} alt="" />
          </div>
          <div className="border rounded p-6">
            <div className="flex justify-between items-center">
              <h1 className="">Clients</h1>
              <p className="text-sm text-textGrey">Subscribed</p>
            </div>
            <div className="flex justify-between items-center my-3">
              <h1 className="text-3xl">1,232</h1>
              <p className="text-buttonGreen">+3.2%</p>
            </div>
            <img src={require(`../../assets/icons/Progress Bar.png`)} alt="" />
            <p className="text-sm text-gray-400 mt-3">Yearly Goal</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row my-6">
          <div className="border rounded lg:mr-6">
            <div className="flex p-6 border-b justify-between items-center">
              <div className="flex mr-16">
                <img src={require(`../../assets/icons/Icon.png`)} alt="" />
                <div className="ml-4">
                  <p>Total Sales</p>
                  <p className="text-[#34aa44] text-xs">+$985.56</p>
                </div>
              </div>
              <div>
                <img src={require(`../../assets/icons/More.png`)} alt="" />
              </div>
            </div>
            <div className="p-6 flex justify-between items-center">
              <img src={require(`../../assets/icons/Pie Chart.png`)} alt="" />
              <div className="flex flex-col  items-end">
                <p className="pr-5">$2,595</p>
                <p className="text-[10px] text-gray-400 pr-5">Invoiced</p>
                <img
                  className="my-3"
                  src={require(`../../assets/icons/Divider.png`)}
                  alt=""
                />
                <p className="pr-5">23</p>
                <p className="text-[10px] text-gray-400 pr-5">Invoices</p>
              </div>
            </div>
          </div>
          <div className="lg:w-4/6 mt-6 md:mt-0 border rounded">
            <div className="flex p-6 border-b justify-between lg:justify-start items-center">
              <p>Daily Profit</p>
              <img src={require(`../../assets/icons/More.png`)} alt="" />
            </div>
            <div className="relative mt-10 p-6 ">
              <img
                width="450"
                className="absolute top-4"
                src={require(`../../assets/icons/Graph Base.png`)}
                alt=""
              />
              <img
                className="absolute top-4 right-2"
                src={require(`../../assets/icons/Graph Legend.png`)}
                alt=""
              />
              <img
                width="430"
                src={require(`../../assets/icons/Graph.png`)}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row my-6 ">
          <div className="lg:w-4/6 border lg:mr-6 rounded">
            <div className="border-b p-6 flex justify-between items-center">
              <p>Daily Actice Clients</p>
              <img src={require(`../../assets/icons/More.png`)} alt="" />
            </div>
            <div className="relative mt-10 p-6 ">
              <img
                width="450"
                className="absolute top-4"
                src={require(`../../assets/icons/Graph Base.png`)}
                alt=""
              />
              <img
                className="absolute top-4 right-2"
                src={require(`../../assets/icons/Graph Legend.png`)}
                alt=""
              />
              <img
                width="430"
                src={require(`../../assets/icons/Graph-2.png`)}
                alt=""
              />
            </div>
          </div>
          <div className="border rounded mt-6 md:mt-0">
            <div className="flex p-6 border-b justify-between items-center">
              <div className="flex">
                <img src={require(`../../assets/icons/Icon-1.png`)} alt="" />
                <div className="ml-4">
                  <p>User Onboarding</p>
                  <p className="text-[10px] text-gray-400 pr-5">
                    Q3 Goal: 8,000 User
                  </p>
                </div>
              </div>
              <div>
                <img src={require(`../../assets/icons/More.png`)} alt="" />
              </div>
            </div>
            <div className="p-6 flex items-center">
              <img src={require(`../../assets/icons/Pie Chart-2.png`)} alt="" />
              <div className="flex flex-col  items-end">
                <p className="pr-4">2,452</p>
                <p className="text-[10px] text-gray-400 pr-4">Onboarded</p>
                <img
                  className="my-3"
                  src={require(`../../assets/icons/Divider.png`)}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );

}

export default Main;