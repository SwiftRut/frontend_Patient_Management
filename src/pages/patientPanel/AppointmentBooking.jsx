import React, { useState } from "react";
import AppointmentTimeSlot from "./AppointmentTimeSlot1";
import AppointmentTimeSlot1 from "./AppointmentTimeSlot1";

const AppointmentBooking = () => {
  const [specialty, setSpecialty] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [hospital, setHospital] = useState("");
  const [doctor, setDoctor] = useState("");
  const [appointmentType, setAppointmentType] = useState("");

  // Function to check if all selects are filled
  const isAllSelected = () => {
    return specialty && country && state && city && hospital && doctor && appointmentType;
  };

  return (
    <div className="p-4 bg-[#f6f8fb]">
      <div className="container ">
      <div className="p-4 m-3 rounded-lg" style={{ height: "auto" }}>
        <div className="mb-3">
          <h1 className="text-xl font-semibold mb-2 md:mb-0">Appointment Booking</h1>
          <div className="w-full border-2 h-auto rounded-md px-3 py-2 bg-white">
            <div className="flex flex-col m-2">
              {/* Label and Select Input Container */}
              <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 mb-4">
                <div className="relative border border-gray-300 rounded-md">
                  <label className="absolute left-3 -top-2.5 bg-white px-1 text-sm font-semibold text-gray-800">
                    Specialty
                  </label>
                  <select
                    value={specialty}
                    onChange={(e) => setSpecialty(e.target.value)}
                    className="block w-full px-3 py-3 text-gray-500 bg-white border-0 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                  >
                    <option value="" disabled>
                      Select Specialty
                    </option>
                    <option value="cardiology">Cardiology</option>
                    <option value="neurology">Neurology</option>
                    <option value="pediatrics">Pediatrics</option>
                    <option value="orthopedics">Orthopedics</option>
                    <option value="dermatology">Dermatology</option>
                  </select>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <i className="fa-solid fa-chevron-down text-gray-400"></i>
                  </span>
                </div>

                <div className="relative border border-gray-300 rounded-md">
                  <label className="absolute left-3 -top-2.5 bg-white px-1 text-sm font-semibold text-gray-800">
                    Country
                  </label>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="block w-full px-3 py-3 text-gray-500 bg-white border-0 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                  >
                    <option value="" disabled>
                      Select Country
                    </option>
                    <option value="usa">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="india">India</option>
                    <option value="canada">Canada</option>
                    <option value="australia">Australia</option>
                  </select>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <i className="fa-solid fa-chevron-down text-gray-400"></i>
                  </span>
                </div>

                <div className="relative border border-gray-300 rounded-md">
                  <label className="absolute left-3 -top-2.5 bg-white px-1 text-sm font-semibold text-gray-800">
                    State
                  </label>
                  <select
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="block w-full px-3 py-3 text-gray-500 bg-white border-0 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                  >
                    <option value="" disabled>
                      Select State
                    </option>
                    <option value="california">California</option>
                    <option value="texas">Texas</option>
                    <option value="florida">Florida</option>
                    <option value="new_york">New York</option>
                    <option value="illinois">Illinois</option>
                  </select>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <i className="fa-solid fa-chevron-down text-gray-400"></i>
                  </span>
                </div>

                <div className="relative border border-gray-300 rounded-md">
                  <label className="absolute left-3 -top-2.5 bg-white px-1 text-sm font-semibold text-gray-800">
                    City
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="block w-full px-3 py-3 text-gray-500 bg-white border-0 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                  >
                    <option value="" disabled>
                      Select City
                    </option>
                    <option value="los_angeles">Los Angeles</option>
                    <option value="new_york_city">New York City</option>
                    <option value="chicago">Chicago</option>
                    <option value="houston">Houston</option>
                    <option value="phoenix">Phoenix</option>
                  </select>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <i className="fa-solid fa-chevron-down text-gray-400"></i>
                  </span>
                </div>

                <div className="relative border border-gray-300 rounded-md">
                  <label className="absolute left-3 -top-2.5 bg-white px-1 text-sm font-semibold text-gray-800">
                    Hospital
                  </label>
                  <select
                    value={hospital}
                    onChange={(e) => setHospital(e.target.value)}
                    className="block w-full px-3 py-3 text-gray-500 bg-white border-0 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                  >
                    <option value="" disabled>
                      Select Hospital
                    </option>
                    <option value="general_hospital">General Hospital</option>
                    <option value="city_hospital">City Hospital</option>
                    <option value="county_hospital">County Hospital</option>
                    <option value="private_hospital">Private Hospital</option>
                    <option value="children_hospital">Children's Hospital</option>
                  </select>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <i className="fa-solid fa-chevron-down text-gray-400"></i>
                  </span>
                </div>

                <div className="relative border border-gray-300 rounded-md">
                  <label className="absolute left-3 -top-2.5 bg-white px-1 text-sm font-semibold text-gray-800">
                    Doctor
                  </label>
                  <select
                    value={doctor}
                    onChange={(e) => setDoctor(e.target.value)}
                    className="block w-full px-3 py-3 text-gray-500 bg-white border-0 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                  >
                    <option value="" disabled>
                      Select Doctor
                    </option>
                    <option value="dr_smith">Dr. Andrew</option>
                    <option value="dr_jones">Dr. Jones</option>
                    <option value="dr_brown">Dr. Brown</option>
                    <option value="dr_johnson">Dr. Johnson</option>
                    <option value="dr_davis">Dr. Davis</option>
                  </select>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <i className="fa-solid fa-chevron-down text-gray-400"></i>
                  </span>
                </div>

                <div className="relative border border-gray-300 rounded-md">
                  <label className="absolute left-3 -top-2.5 bg-white px-1 text-sm font-semibold text-gray-800">
                    Appointment Type
                  </label>
                  <select
                    value={appointmentType}
                    onChange={(e) => setAppointmentType(e.target.value)}
                    className="block w-full px-3 py-3 text-gray-500 bg-white border-0 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                  >
                    <option value="" disabled>
                      Select Appointment Type
                    </option>
                    <option value="consultation">Consultation</option>
                    <option value="follow_up">Follow-Up</option>
                    <option value="emergency">Emergency</option>
                    <option value="routine_checkup">Routine Checkup</option>
                  </select>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <i className="fa-solid fa-chevron-down text-gray-400"></i>
                  </span>
                </div>
              </div>

              {/* Conditionally Render Image and Paragraph */}
              <div className="w-full h-auto border my-2 py-5 rounded-md flex flex-col items-center justify-center">
                {!isAllSelected() ? (
                  <>
                    <img src="./image/Invoice.png" alt="" className="w-60" />
                    <div>
                      <p className="mt-2 text-center">No Appointment Found Yet</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-10 gap-4">
                      <div className="col-span-7 p-3">
                        <AppointmentTimeSlot1 />
                      </div>

                      <div className="col-span-3 px-2 py-3">
                        <div className="bg-white w-full border-1 py-3 rounded-md">
                          <h5 className="px-3">Doctor Details</h5>
                          <hr />
                          <div className="h-20 bg-custom-gradient m-2 rounded-md relative">
                            <img
                              src="./image/Patterns.png"
                              alt=""
                              className="w-28 absolute right-0 z-0"
                            />
                            <div className="flex py-2 z-0">
                              <img src="./image/Avatar.png" alt="" className="ps-2 w-16" />
                              <div>
                                <span className="text-white ms-1">Dr.Cristofor Pasquinades</span>
                                <button className="px-3 py-1 bg-btn-light rounded-full flex text-white">
                                  <img src="./image/vuesax.png" alt="" className="pe-1" /> Male
                                </button>
                              </div>
                            </div>
                          </div>

                          <div className=" rounded-md bg-gray-100 p-3 mx-2">
                            <div className="flex">
                              <div className="col-span-5 p-2">
                                <div>
                                  <h6 className="text-gray-500 font-medium">Qualification</h6>
                                  <p className="text-black font-medium">MBBS</p>
                                </div>
                                <div>
                                  <h6 className="text-gray-500 font-medium">Specialty Type</h6>
                                  <p className="text-black font-medium">Cardiology</p>
                                </div>{" "}
                                <div>
                                  <h6 className="text-gray-500 font-medium">Qualification</h6>
                                  <p className="text-black font-medium">1 Hours</p>
                                </div>
                              </div>
                              <div className="col-span-5 p-2 px-1">
                                <div>
                                  <h6
                                    className="text-gray-500 font-medium text"
                                    style={{ fontSize: "15px" }}
                                  >
                                    Years Of Experience
                                  </h6>
                                  <p className="text-black font-medium">6+ Years</p>
                                </div>
                                <div>
                                  <h6 className="text-gray-500 font-medium">Working Time</h6>
                                  <p className="text-black font-medium">6 Hours</p>
                                </div>{" "}
                                <div>
                                  <h6 className="text-gray-500 font-medium">
                                    Emergency Contact Number
                                  </h6>
                                  <p className="text-black font-medium">48852-45796</p>
                                </div>
                              </div>
                            </div>
                            <div>
                              <h6 className="text-gray-500font-medium">Description</h6>
                              <p className="text-black" style={{ fontSize: "15px" }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
                                dolor sit amet, consectetur adipiscin.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AppointmentBooking;
