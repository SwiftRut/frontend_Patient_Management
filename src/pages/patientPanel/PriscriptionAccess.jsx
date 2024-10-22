import React, { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { FaDownload } from "react-icons/fa6";
import { FaRegImage } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

export default function PriscriptionAccess() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="bg-[#f6f8fb] p-3">
        <div className="container mt-5">
          <div className="bg-white shadow-lg  h-auto p-4 rounded-xl">
            {/* Tab content */}
            <div className="tab-content mt-3">
              <div>
                <div className="flex flex-col md:flex-row justify-between items-center mb-3">
                  <h1 className="text-xl font-semibold mb-2 md:mb-0">
                    Prescription Access
                  </h1>

                  <div className="flex items-center space-x-3 ">
                    {/* Input group for date picker */}
                    <div className="border rounded-md flex p-2 items-center">
                      {/* Calendar icon positioned to the left */}
                      <span className=" pl-3 text-gray-500 me-1">
                        <FaCalendarAlt />
                      </span>

                      {/* Input field with proper padding for icons */}
                      <input
                        type="text"
                        className="form-control"
                        style={{ width: "270px" }} // pl-10 for left icon, pr-10 for right icon
                        value="2 Jan, 2022 - 13 Jan, 2022"
                        readOnly
                      />

                      {/* Close icon with rounded background */}
                      <div className="h-5 w-5 rounded-full text-white bg-[#E11D29] flex items-center justify-center text-xs">
                        <IoCloseSharp />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="overflow-y-auto" style={{ height: "550px" }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div class="w-full mx-auto bg-white rounded-lg shadow-md">
                      <div className="bg-[#f6f8fb] p-2 flex items-center justify-between rounded-t-lg">
                        <h2 class="text-lg font-semibold text-foreground">
                          Dr. Ryan Vetrovs
                        </h2>
                        <div className="flex">
                          <div className="bg-white rounded-lg border text-[#A7A7A7] hover:text-[#0EABEB] transition duration:300 p-2 me-2">
                            <FaDownload />
                          </div>
                          <div
                            onClick={() => openModal()}
                            className="bg-white rounded-lg border text-[#A7A7A7] hover:text-[#0EABEB] transition duration:300 p-2"
                          >
                            <IoEyeSharp />
                          </div>
                        </div>
                      </div>
                      <div className="p-3 border rounded-b-lg">
                        <div class="mt-1 flex items-center justify-between">
                          <span class="text-base font-normal text-[#818194]">
                            Hospital Name
                          </span>
                          <p class="text-sm font-medium text-[#4F4F4F]">
                            Artemis Hospital
                          </p>
                        </div>
                        <div class="mt-1 flex items-center justify-between">
                          <span class="text-base font-normal text-[#818194]">
                            Disease Name
                          </span>
                          <p class="text-sm font-medium text-[#4F4F4F]">
                            Viral Infection
                          </p>
                        </div>
                        <div class="mt-1 flex items-center justify-between">
                          <span class="text-base font-normal text-[#818194]">
                            Date
                          </span>
                          <p class="text-sm font-medium text-[#4F4F4F]">
                            2 Jan, 2022
                          </p>
                        </div>
                        <div class="mt-1 flex items-center justify-between">
                          <span class="text-base font-normal text-[#818194]">
                            Time
                          </span>
                          <p class="text-sm font-medium text-[#4F4F4F]">
                            10:10 AM
                          </p>
                        </div>
                        <div class="mt-4 flex items-center border rounded-md p-1">
                          <div className="bg-[#f6f8fb] rounded-lg text-[#5678e9] p-3">
                            <FaRegImage />
                          </div>

                          <div className="ml-2">
                            <span class="text-[#030229] block">
                              Prescription.JPG
                            </span>
                            <span class="text-[#A7A7A7] text-sm">5.09 MB</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <div className=" w-[200px] h-[200px] bg-white">
                <h1>hii</h1>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
