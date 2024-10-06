import React from "react";
import "../doctorManagement/Onsite.css";
import { IoIosArrowBack } from "react-icons/io";
import { TbBuildingHospital } from "react-icons/tb";
import { IoLinkSharp } from "react-icons/io5";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoLocation } from "react-icons/io5";

const Onsite = () => {
  return (
    <>
      <div className="onsite-section">
        <div className="row">
          <div className="main">
            <div className="top flex align-center">
              <div className="icon">
                <IoIosArrowBack />
              </div>
              <h3>Doctor Management</h3>
            </div>
            <div className="box">
              <img src="/img/box.png" width="100%" />
            </div>
            {/* onsite */}
            {/* <div className="deatils">
              <div className="table">
                <table>
                  <tr>
                    <td>
                      <h3>Doctor Qualification</h3>
                      <p>MBBS</p>
                    </td>
                    <td>
                      <h3>Years Of Experience</h3>
                      <p>6+ Year</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h3>Specialty Type</h3>
                      <p>Obstetrics and genecology</p>
                    </td>
                    <td>
                      <h3>Working Time</h3>
                      <p>6 Hour</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h3>Patient Check Up Time</h3>
                      <p>2 Hour</p>
                    </td>
                    <td>
                      <h3>Break Time</h3>
                      <p>1 Hour</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <h3>Description</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <h3>Signature</h3>
                      <img src="/img/sign.png" width="100%" />
                    </td>
                  </tr>
                </table>
              </div>

              <div className="table" style={{ marginTop: "20px" }}>
                <table>
                  <tr>
                    <td>
                      <h3>Age</h3>
                      <p>36 Years</p>
                    </td>
                    <td>
                      <h3>Email</h3>
                      <p>kenzi.lawson@example.com</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h3>Phone</h3>
                      <p>89564 25462</p>
                    </td>
                    <td>
                      <h3>Online Consultation Rate</h3>
                      <p>₹ 1,000</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h3>Country</h3>
                      <p>India</p>
                    </td>
                    <td>
                      <h3>State</h3>
                      <p>Gujarat</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h3>Zip Code</h3>
                      <p>382002</p>
                    </td>
                    <td>
                      <h3>City</h3>
                      <p>Gandhinagar</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <h3>Address</h3>
                      <p>B-105 Virat Bungalows Punagam Motavaracha Jamnagar.</p>
                    </td>
                  </tr>
                </table>
              </div>
            </div> */}

            {/* online */}
            <div className="working-details">
              <div className="title flex">
                <h3>Working On Online</h3>
                <p>Hospital</p>
              </div>
              <ul>
                <li className="hospital-data flex align-center">
                  <div className="icon">
                    <TbBuildingHospital />
                  </div>
                  <div className="text">
                    <h2>Hospital Name</h2>
                    <p>Artemis Hospital</p>
                  </div>
                </li>
                <li className="hospital-data flex align-center">
                  <div className="icon">
                    <IoLinkSharp />
                  </div>
                  <div className="text">
                    <h2>Hospital Website Link</h2>
                    <p>https://sample.edu/railway</p>
                  </div>
                </li>
                <li className="hospital-data flex align-center">
                  <div className="icon">
                    <BiSolidPhoneCall />
                  </div>
                  <div className="text">
                    <h2>Emergency Contact Number</h2>
                    <p>48555-20103</p>
                  </div>
                </li>
                <li className="hospital-data flex align-center">
                  <div className="icon">
                    <IoLocation />
                  </div>
                  <div className="text">
                    <h2>Hospital Address</h2>
                    <p>
                      151-152 ,gopinath doc, manik chowk, Satelight road, Mota
                      varacha Jamnagar.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Onsite;
