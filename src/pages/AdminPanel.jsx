import React, { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  Users,
  UserPlus,
  CreditCard,
  BarChart2,
  LogOut,
  ChevronDown,
  Bell,
  Search,
} from "lucide-react";
import Sidebar from "../component/Sidebar";
import Header from "../component/Header";
import Dashboard from "./dashboard/Dashboard";
import DoctorManagement from "./doctorManagement/DoctorManagement";
import Profile from "./profile/Profile";
import { Edit } from "./profile/Edit";
import PatientManagement from "./patientManagement/PatientManagement";
import ReportingAndAnalytics from "./ReportingAndAnalytics/ReportingAndAnalytics";
import MonitorBilling from "./billPayment/MonitorBilling";
import InsuranceClaims from "./billPayment/InsuranceClaims";
import PaymentMethod from "./billPayment/PaymentMethod";
import DoctorAdd from "./adminPanel/DoctorAdd";
import DoctorEdit from "./adminPanel/DoctorEdit";
import CreateBill from "./invoice/CreateBill";
import EditBill from "./invoice/EditBill";
import Bill from "./invoice/Bill";
import EditDesignInvoice from "./billPayment/EditDesignInvoice";

const AdminPanel = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`bg-white w-64 min-h-screen flex flex-col transition-all duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static fixed z-30`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <img src="/img/logo.png" alt="Logo" className="h-8" />
          <button onClick={toggleSidebar} className="md:hidden">
            <X size={24} />
          </button>
        </div>
        <nav className="flex-grow p-4">
          <ul className="space-y-2">
            <NavItem to="/" icon={<Home size={20} />} text="Dashboard" />
            <NavItem to="/doctorManagement" icon={<Users size={20} />} text="Doctor Management" />
            <NavItem
              to="/patientManagement"
              icon={<UserPlus size={20} />}
              text="Patient Management"
            />
            <li>
              <button
                onClick={toggleDropdown}
                className="flex items-center w-full p-2 text-gray-700 hover:bg-blue-50 rounded transition-colors"
              >
                <CreditCard size={20} className="mr-3" />
                <span>Billing and Payments</span>
                <ChevronDown size={16} className="ml-auto" />
              </button>
              {dropdownOpen && (
                <ul className="ml-6 mt-2 space-y-1">
                  <NavItem to="/monitorBilling" text="Monitor Billing" />
                  <NavItem to="/insuranceClaims" text="Insurance Claims" />
                  <NavItem to="/paymentMethod" text="Payment Methods" />
                </ul>
              )}
            </li>
            <NavItem
              to="/reportingAndAnalytics"
              icon={<BarChart2 size={20} />}
              text="Reporting and Analytics"
            />
          </ul>
        </nav>
        <div className="p-4 border-t">
          <button className="flex items-center justify-center w-full p-2 text-red-600 bg-red-50 rounded hover:bg-red-100 transition-colors">
            <LogOut size={20} className="mr-2" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm z-10">
          <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* <div className="flex justify-between items-center py-4">
              
              <button onClick={toggleSidebar} className="md:hidden">
                <Menu size={24} />
              </button>
              <div className="flex items-center">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Quick Search"
                    className="pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Search
                    size={20}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button className="relative">
                  <Bell size={24} />
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                    4
                  </span>
                </button>
                <NavLink to="/profile" className="flex items-center">
                  <img
                    src="/img/avtar.png"
                    alt="User"
                    className="h-8 w-8 rounded-full mr-2"
                  />
                  <div>
                    <p className="text-sm font-semibold">Lincoln Philips</p>
                    <p className="text-xs text-gray-500">Admin</p>
                  </div>
                </NavLink>
              </div>
            </div> */}
            <button onClick={toggleSidebar} className="md:hidden">
              <Menu size={24} />
            </button>
            <Header />
          </div>
        </header>

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/doctorManagement" element={<DoctorManagement />} />
              <Route path="/patientManagement" element={<PatientManagement />} />
              <Route path="/monitorBilling" element={<MonitorBilling />} />
              <Route path="/insuranceClaims" element={<InsuranceClaims />} />
              <Route path="/paymentMethod" element={<PaymentMethod />} />
              <Route path="/reportingAndAnalytics" element={<ReportingAndAnalytics />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/createbill" element={<CreateBill />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
};

const NavItem = ({ to, icon, text }) => (
  <li>
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center p-2 rounded transition-colors ${
          isActive ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-100"
        }`
      }
    >
      {icon && <span className="mr-3">{icon}</span>}
      <span>{text}</span>
    </NavLink>
  </li>
);

export default AdminPanel;
