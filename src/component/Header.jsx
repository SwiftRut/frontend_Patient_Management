import React from 'react'
import "./Header.css"
import { IoIosArrowForward } from "react-icons/io";
import { MdNotificationImportant } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";

const Header = () => {
  return (
    <div class="header">
      <div class="breadcrumbs"><img src="/img/home-2.png" /><IoIosArrowForward className='icon' />Profile Setting</div>
      <div className='user-search'>
        <div class="search">
          <div className="searching">
            <CiSearch className='serch-icon' />
            <input type="text" placeholder="Quick Search" />
          </div>
          <div class="search-filter">
            <span class="filter-text">All</span>
            <FaAngleDown />
          </div>
        </div>
        <div className='flex'>
          <div className='notifiction'>
            <MdNotificationImportant />
          </div>
          <div class="user">
            <img src="/img/avtar.png" />
            <div>
              <p>Lincoln Philips</p>
              <span>Admin</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
