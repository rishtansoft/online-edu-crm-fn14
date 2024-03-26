import React from 'react';
import logo from '../assets/logo.svg';
import { GiTeacher } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import { TiGroup } from "react-icons/ti";
import { FaReact } from "react-icons/fa";
import { FaUser } from "react-icons/fa";




const Sidebar = ({ role }) => {
  const sidebarItems = {
    admin: [
      { label: <><GiTeacher className='sidebar-icon' /> Ustozlar</>, link: '/' },
      { label: <><TiGroup className='sidebar-icon'/>Guruhlar</>, link: '/guruhlar' },
      { label: <><FaReact className='sidebar-icon'/> Yo'nalishlar</>, link: '/yonalishlar' }
    ],
    teacher: [
      { label: <><TiGroup className='sidebar-icon'/>Guruhlar</>, link: '/' },
      { label: <><FaUser className='sidebar-icon'/>Profile</>, link: '/teacherprofile' },
    ],
    // student: [
    //   { label: 'Dashboard', link: '/dashboard' },
    //   { label: 'Profile', link: '/profile' },
    //   { label: 'Settings', link: '/settings' }
    // ]
  };

  return (
    <div className="sidebar">
      <img className='sidebar-img' src={logo} alt="Logo" />
      <ul>
        {sidebarItems[role].map((item, index) => (
          <li key={index}>
            <NavLink to={item.link}>{item.label}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
