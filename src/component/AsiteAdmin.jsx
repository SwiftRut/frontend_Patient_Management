import React from 'react'
import "./Header.css"
import { IoIosArrowForward } from "react-icons/io";
import { MdNotificationImportant } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";

const AsiteAdmin = () => {
    return (
        <>
            <div className='dashboard'>
                <div className="asite">
                    <div className="logo">
                        <img src="/img/logo.png" alt="Logo" />
                    </div>
                    <ul class="menu">
                        <li><img src='/img/Dashboard.png' /><a href="#">Dashboard</a></li>
                        <li><img src='/img/Doctor-Management.png' /><a href="#">Doctor Management</a></li>
                        <li><img src='/img/Patient-Management.png' /><a href="#">Patient Management</a></li>
                        <li><img src='/img/BillingAndPayments.png' /><a href="#">Billing and Payments</a></li>
                        <li><img src='/img/ReportingAndAnalytics.png' /><a href="#">Reporting and Analytics</a></li>
                    </ul>
                    <div className="logout-btn">
                        <button>Logout</button>
                    </div>
                </div>

                <div className="content">
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
                </div>
            </div>
        </>
    )
}

export default AsiteAdmin
