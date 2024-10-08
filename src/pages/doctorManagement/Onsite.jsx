/* eslint-disable no-unused-vars */
import React from "react";
import "../doctorManagement/Onsite.css";
import { IoIosArrowBack } from "react-icons/io";

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
              <img src="/img/box.png" width="100%"/>
            </div>
            <div className="deatils">
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
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                </table>
                <table>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Onsite;
