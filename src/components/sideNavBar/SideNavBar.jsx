import React from 'react';
import './SideNavBar.css';
import { NavLink, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// icons
import { GoHome } from 'react-icons/go';
import { GrContactInfo } from 'react-icons/gr';
import { FiInfo } from 'react-icons/fi';
import { RiCustomerService2Fill } from 'react-icons/ri'


const SideNavBar = () => {

  // const Data = [
  //   {
  //     id: 1,
  //     navTitle: 'Home',
  //     navIcon: <GoHome />,
  //     path: '/'
  //   },
  //   {
  //     id: 2,
  //     navTitle: 'Contact',
  //     navIcon: <GrContactInfo />,
  //     path: 'contact'
  //   },
  //   {
  //     id: 3,
  //     navTitle: 'About',
  //     navIcon: <FiInfo />,
  //     path: 'about'
  //   },
  //   {
  //     id: 4,
  //     navTitle: 'Help',
  //     navIcon: <RiCustomerService2Fill />,
  //     path:'help'
  //   }
  // ]
  return (
    <>
      <div className="sidebar">
        <div className="sidebar__logo">
          <h2>Selva</h2>
        </div>
        <div className="sidebar__menu">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </>
  )
}

export default SideNavBar