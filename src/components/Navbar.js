import React, { useState, useRef, useEffect } from "react";
import { Link } from 'react-router-dom'
import nigeria from '../assets/ng.png'
import logo from '../assets/gtb.png'
import {  IoChevronDownSharp, IoChevronForward, IoClose, IoCloseOutline, IoHomeSharp, IoLockClosedOutline, IoSearchOutline } from "react-icons/io5";
import { HiHome, HiOutlineBars3 } from "react-icons/hi2";

const Navbar = ( { items, branch, account, menu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOut, setIsOut] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSearchOpenMobile, setIsSearchOpenMobile] = useState(false);
  const [menuBar, setMenuBar] = useState(false)
  const [login, setLogin] = useState(false);
  // const [searchBar, setSearchBar] = useState(false);

  // const searchChange = () => {
  //   setSearchBar(!searchBar);
  // }

  const buttonChange = () => {
    setLogin(!login);
  };

  const handleChange = () => {
    setMenuBar(!menuBar);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearchMobile = () => {
    setIsSearchOpenMobile(!isSearchOpenMobile);
  };

  const toggleMenu2 = () => {
    setIsOut(!isOut);
  };


  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  // Close the menu if a click occurs outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current && !menuRef.current.contains(event.target) && 
        buttonRef.current && !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false); // Close the menu if clicked outside
      }
    };

    // Attach event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const buttonRef2 = useRef(null);
  const menuRef2 = useRef(null);

  // Close the menu if a click occurs outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef2.current && !menuRef2.current.contains(event.target) && 
        buttonRef2.current && !buttonRef2.current.contains(event.target)
      ) {
        setIsOut(false); // Close the menu if clicked outside
      }
    };

    // Attach event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

 
  return (
    <>
    <div className="w-full">
      <div className="h-[20vh] md:h-[20vh] flex justify-center items-center w-full">
        <div className=" w-[90%] mt-5 md:mt-0"  >
        <h3 className="font-bold">Important Notice:</h3>
        <p className="text-gray-400 text-sm md:text-[16px] md:mt-2  "> Please be mindful of fake sites run by fraudulent
      parties posing as Guaranty Trust Bank Ltd or its affiliates. Do not
      disclose your personal information and financial details to anyone online
      or anywhere else.</p>
        </div>
      </div>
      <div className="md:h-[25vh] h-[14vh]  relative  w-full bg-white ">
      <div className="border-t border-[#DD4F05]"></div>
      <div className="flex">
      <div className="h-[10vh] hidden md:block w-[45%] relative custom-shape ">
        <div className="text-white text-[12px] flex gap-5 ml-28 mt-5 justify-center font-semibold">
          <Link to='/media'>Media</Link>
          <Link to='/media'>Help Center</Link>
          <Link to='/media'>Security</Link>
        </div>
      </div>
      <div className="absolute hidden md:block top-3 left-16 text-left">
      {/* Dropdown Button */}
      <button
        ref={buttonRef}
        onClick={toggleMenu}
        className="inline-flex justify-center rounded-full border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <img src={nigeria} alt="nigeria" className="h-5 object-cover rounded-full" />
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="absolute transition-all p-5 duration-300 ease-out left-0 top-[-8rem] mt-2 w-56 shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-3 flex flex-col gap-2" role="none">
            {items.map((item, index) => (
              <Link
                key={item.id}
                to={`/country/${item.id}`}
                className={`text-black flex gap-4 px-4 py-2 text-sm hover:bg-gray-100 ${index === 5 ? ' font-bold text-[#848484]' : ''}`} // Apply bg-blue-100 to the first item
                role="menuitem"
              >
                <img src={item.logo} alt={item.name} className="h-4 w-6 object-cover rounded-full" />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
    <div className="absolute hidden md:block top-3 left-36 text-left">
      {/* Dropdown Button */}
      <div
        ref={buttonRef2}
        onClick={toggleMenu2}
        className="flex justify-center text-white cursor-pointer items-center gap-1 px-4 py-2 text-sm font-medium focus:outline-none"
        aria-expanded={isOut}
        aria-haspopup="true"
      >
        <p className="text-[12px] font-semibold">Locate</p>
        <IoChevronDownSharp size={10} />
      </div>

      {/* Dropdown Menu */}
      {isOut && (
        <div
          ref={menuRef2}
          className="absolute transition-all duration-300 ease-out left-0 pt-2 pb-2 w-52 shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            {branch.map((item, index) => (
              <Link
                key={item.id}
                to={`/`}
                className={`text-gray-500 font-semibold flex gap-4 px-4 py-2 text-sm hover:bg-gray-100 ${index === 4 ? ' font-bold text-gray-500' : ''}`} // Apply bg-blue-100 to the first item
                role="menuitem"
              >
                <img src={item.logo} alt={item.name} className="h-5 " />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
    <div className="h-[10vh] hidden  justify-center w-[22%] text-[#FDf6f2] gap-2 md:flex items-center custom-shape-2 cursor-pointer transition-all duration-300 ease-in-out transform hover:bg-[#7a2e08] group">
  <IoLockClosedOutline  />
  <p className="text-[14px] font-semibold">Online Banking Login</p>
  <span className="inline-block transition-transform duration-300 ease-in-out transform group-hover:translate-x-2">
    <IoChevronForward className="text-lg" size={14} />
  </span>
</div>
    <div className="absolute hidden md:block">
      {/* Search Icon */}
      {!isSearchOpen && (
        <div
          className="text-[#FDf6f2] top-4 absolute left-[29rem] cursor-pointer"
          onClick={toggleSearch}
        >
          <IoSearchOutline size={25} />
        </div>
      )}

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="absolute top-0 transition-all duration-300 ease-in-out custom-shape w-[49.2rem] h-[10vh] left-[] flex items-center p-4 shadow-md">
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-transparent placeholder-[#FDf6f2] focus:ring-0 focus:ring-blue-500 border-none text-[#FDf6f2] px-20"
          />
          <button
            onClick={toggleSearch}
            className="text-[#FDf6f2] hover:text-gray-600 mr-[10rem]"
          >
            <IoClose size={30} />
          </button>
        </div>
      )}
    </div>
      </div>

      <div className="md:flex hidden gap-5 font-semibold text-[#464646] mt-10 ml-20">
      <IoHomeSharp />
      <div className="relative group">
      <Link to='/personal' className="group-hover:border-b-2 focus:border pb-6 transition-all duration-300 ease-in-out  group-hover:border-[#DD4F05]">Personal</Link>
      <div className="absolute top-[3.1rem] shadow-lg w-[50rem] border transition-all duration-300 ease-in-out  border-[#f7f4f4] hidden group-hover:block h-[80vh] bg-[#e6e6e6]">
      <div className="absolute top-[] hidden space-y-2 w-[18rem] transition-all duration-300 ease-in-out  group-hover:block bg-[#faf9f9] flex-row p-5 h-[80vh] ">
      <div className="flex flex-col justify-between items-center">
  {account.map((account, index) => (
    <div key={account.id} className="border-b flex justify-between w-full p-4">
      <Link
        to="dishes"
        spy={true}
        smooth={true}
        duration={500}
        className="hover:text-[#DD4F05] transition-all duration-300 ease-in-out cursor-pointer flex items-center justify-between w-full"
      >
        <span>{account.name}</span>
        <account.icon className={`text-gray-500 ${index === 5 ? ' opacity-0 text-gray-500' : ''}`} size={15}  />
      </Link>
      
    </div>
  ))}
</div>

                
      </div>
                
      </div>
      </div>

      <Link to='/business' className="hover:border-b-2 pb-6 hover:border-[#DD4F05]">Business</Link>
      <Link to='/aboutus' className="hover:border-b-2 pb-6 hover:border-[#DD4F05]">About Us</Link>
      <Link to='/investor-relations' className="hover:border-b-2 pb-6 hover:border-[#DD4F05]">Investor Relations</Link>
      <Link to='/open-an-account' className="hover:border-b-2 pb-6 hover:border-[#DD4F05]">Open an Account</Link>
      </div>
      <div className="absolute md:top-8 top-5 gap-1 right-0 flex flex-col text-[#464646] items-end md:mr-[8rem] mr-[2rem]  logo">
        <img src={logo} alt="" className="h-16" />
        <div className="text-right">
        <p className="text-[10px] hidden md:block font-semibold">Guaranty Trust Bank Ltd</p>
        <p className="text-[8px] hidden md:block">RC 152321</p>
        </div>
      </div>
       {/* Mobile Menu Section Bar-Close Button */}
    <div className="md:hidden absolute flex gap-3 top-[2rem] left-0 ml-5">
        <div className=" ">
        {menuBar ? (
          <button className="bg-[#DD4F05] p-2 rounded-full text-[#FDf6f2] transition-all duration-300 ease-in-out transform">
           <IoCloseOutline size={25} onClick={handleChange} />
          </button>
        ) : (
          <button className="bg-gray-100 border border-gray-300 p-2 rounded-full text-[#464646] transition-all duration-300 ease-in-out transform">
            <HiOutlineBars3 size={25} onClick={handleChange} />
          </button>
        )}
      </div>
      <div className="">
      {/* Search Icon */}
     {isSearchOpenMobile ? (
        <button
        onClick={toggleSearchMobile}
        className="bg-[#DD4F05]  p-2 rounded-full text-[#FDf6f2] transition-all duration-300 ease-in-out transform ]"
      >
        <IoClose size={25} />
      </button>
     ) : (
      <button
        onClick={toggleSearchMobile}
        className="bg-gray-100 border border-gray-300 p-2 rounded-full text-[#464646] transition-all duration-300 ease-in-out transform"
      >
        <IoSearchOutline  size={25} />
      </button>
     )}
      {/* Search Bar */}
      
    </div>
      {/* Login - Lock Button */}
      <div className="">
        {login ? (
          <button onClick={buttonChange} className="bg-[#DD4F05]  p-2 rounded-full text-[#FDf6f2] transition-all duration-300 ease-in-out transform">
           <IoCloseOutline size={25}  />
          </button>
        ) : (
          <button onClick={buttonChange} className="bg-[#DD4F05] px-4 flex  items-center gap-1 py-2 rounded-full  text-[#FDf6f2] transition-all duration-300 ease-in-out transform">
            <IoLockClosedOutline size={15}  />
            Login
          </button>
        )}
      </div>
    </div>
    {/* Search Input */}
    {isSearchOpenMobile && (
        <div className="absolute md:hidden flex top-[6.54rem] transition-all custom-shape-3 duration-300 ease-in-out w-full h-[20vh] bg-white  shadow-md">
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-transparent placeholder-[#c2c1c1] focus:ring-0 focus:ring-blue-500 border-none text-[gray] p-4"
          />
          
        </div>
      )}
      
      </div>
  
      <div className="border-t md:hidden block border-[#c2c1c1]"></div>
    <div className={`${
      menuBar ? "translate-x-0" : "-translate-x-full"
    } md:hidden absolute top-[19.6rem] bg-white text-2xl font-semibold text-[#464646] w-full h-[30vh] overflow-y-auto p-4 scrollbar scrollbar-thumb-[#DD4F05] scrollbar-track-[#DD4F05] `}>
      
      <div className="flex items-center border-b pb-3 gap-4">
          <HiHome className="ml-4" />
          <p>Home</p>
        </div>
  {menu.map((menu, index) => (
    <div key={menu.id} className="border-b flex justify-between w-full p-4">
      <Link
        to="dishes"
        spy={true}
        smooth={true}
        duration={500}
        className="hover:text-[#DD4F05] transition-all duration-300 ease-in-out cursor-pointer flex items-center justify-between w-full"
      >
        
        <span className="ml-2">{menu.name}</span>
        <menu.icon />
      </Link>
      
    </div>
  ))}
</div>
    
    </div>
      
    </>
  );
};

export default Navbar;
