import React from 'react'
import './sidebar.css'

const Sidebar = () => {
    return (
        <>
            <div className='sidebar'>
                <div className="asite">
                    <div className="logo">
                        <img src="/img/logo.png" alt="Logo" />
                    </div>
                    <div className="menu flex">
                        <ul>
                            <li><img src='/img/Dashboard.png' />
                                <a href="">Dashboard</a>
                            </li>
                            <li><img src='/img/Doctor-Management.png' /><a href="#">Doctor Management</a></li>
                            <li><img src='/img/Patient-Management.png' /><a href="#">Patient Management</a></li>
                            <li><img src='/img/BillingAndPayments.png' /><a href="#">Billing and Payments</a></li>
                            <li><img src='/img/ReportingAndAnalytics.png' /><a href="#">Reporting and Analytics</a></li>
                        </ul>
                        <div className="logout-btn">
                            <button className='flex'><img src="../img/logout.png" alt="" /> Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar
