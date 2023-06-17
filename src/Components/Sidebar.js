import React from "react";
import { Link } from "react-router-dom";
import * as ReactIcons from 'react-icons/fa';
import * as ReactIconbs from 'react-icons/bs';
export const Sidebar = () => {
  return (
    <div className="sidebar">
        <p className="m-0 text-3xl text-white text-center">Livecon</p>
      <ul className="sidebar-menu py-10 px-0">
        <li className='mb-4 p-1 sidebar-menulist'   tabIndex="0">
          <Link to="/" className='flex align-items-center'>
          <ReactIcons.FaHome className='text-3xl me-3' />
            <span>Dashboard</span>
          </Link>
        </li>

        <li className='mb-4 p-1 sidebar-menulist'   tabIndex="0">
          <Link to="/Manageusers" className='flex align-items-center'>
          <ReactIcons.FaUserAlt className='text-3xl me-3' />
            <span>Manage users</span>
          </Link>
        </li>
       
        <li className='mb-4 p-1 sidebar-menulist'   tabIndex="0">
          <Link to="/Managecoins" className='flex align-items-center'>
          <ReactIcons.FaCoins className='text-3xl me-3' />
            <span>Manage Coins</span>
          </Link>
        </li>


        <li className='mb-4 p-1 sidebar-menulist'   tabIndex="0">
          <Link to="/ManageGifts" className='flex align-items-center'>
          <ReactIcons.FaGift className='text-3xl me-3' />
            <span>Manage Gifts</span>
          </Link>
        </li>


        <li className='mb-4 p-1 sidebar-menulist'   tabIndex="0">
          <Link to="/Managebadges" className='flex align-items-center'>
          <ReactIconbs.BsFillAwardFill className='text-3xl me-3' />
            <span>Manage Badges</span>
          </Link>
        </li>


        <li className='mb-4 p-1 sidebar-menulist'   tabIndex="0">
          <Link to="/Managehashtags" className='flex align-items-center'>
          <ReactIcons.FaHashtag className='text-3xl me-3' />
            <span>Manage Hashtags</span>
          </Link>
        </li>

        <li className='mb-4 p-1 sidebar-menulist'   tabIndex="0">
          <Link to="/Managegroups" className='flex align-items-center'>
          <ReactIcons.FaUsers className='text-3xl me-3' />
            <span>Manage Groups</span>
          </Link>
        </li>

        <li className='mb-4 p-1 sidebar-menulist'   tabIndex="0">
          <Link to="/Notification" className='flex align-items-center'>
          <ReactIcons.FaBell className='text-3xl me-3' />
            <span>Notifications</span>
            
          </Link>
        </li>

        <li className='mb-4 p-1 sidebar-menulist'   tabIndex="0">
          <Link to="/Account" className='flex align-items-center'>
          <ReactIcons.FaWallet className='text-3xl me-3' />
            <span>My Accounts</span>
          </Link>
        </li>

        <li className='mb-4 p-1 sidebar-menulist'   tabIndex="0">
          <Link to="/Appsettings" className='flex align-items-center'>
          <ReactIcons.FaCog className='text-3xl me-3' />
            <span>App settings</span>
          </Link>
        </li>

        <li className='mb-4 p-1 sidebar-menulist'   tabIndex="0">
          <Link to="/Manageusers" className='flex align-items-center'>
          <ReactIcons.FaCaretSquareLeft className='text-3xl me-3' />
            <span>Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};
