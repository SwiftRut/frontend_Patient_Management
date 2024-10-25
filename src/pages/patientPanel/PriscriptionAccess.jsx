import React, { useEffect, useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { FaDownload } from "react-icons/fa6";
import { FaRegImage } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import PrescriptionModal from "../../component/modals/PrescriptionModal.jsx";
import { useAuth } from "../../hooks/useAuth.jsx";
import { useGlobal } from "../../hooks/useGlobal.jsx";

export default function PriscriptionAccess() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { findPatientPrescriptions, patientPrescription } = useGlobal();
  const {user} = useAuth();
  useEffect(() => {
    findPatientPrescriptions(user.id);
  }, []);
  console.log(patientPrescription)
  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const prescriptionData = {
    patientName: "Albatrao Bhajirao",
    prescriptionDate: "2 Jan, 2022",
    gender: "Male",
    age: "36 Years",
    address: "B-105 Virat Bungalows Punagam Motavaracha Jamnagar.",
    medicines: [
      {
        name: "Calcium carbonate",
        strength: "100 Mg",
        dose: "1-0-1",
        duration: "2 Day",
        whenToTake: "Before Food",
      },
      {
        name: "Cyclobenzaprine",
        strength: "200 Mg",
        dose: "1-1-1",
        duration: "4 Day",
        whenToTake: "With Food",
      },
    ],
    additionalNote:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  };

  return (
    <>
      <div className="">
        <div className="container mt-5">
          <div className="bg-white shadow-lg h-auto p-4 rounded-xl m-3">
            {/* Tab content */}
            <div className="tab-content mt-3">
              <div>
                <div className="flex flex-col md:flex-row justify-between  sm:items-center mb-3 justify-start">
                  <h1 className="text-xl font-semibold mb-2 md:mb-0">
                    Prescription Access
                  </h1>

                  <div className="flex items-center space-x-3 ">
                    {/* Input group for date picker */}
                    <div className="flex items-center justify-between border rounded-md p-2 bg-white">
                      <span className=" pl-3 text-gray-500 me-1">
                        <FaCalendarAlt />
                      </span>
                      <input
                        type="text"
                        className="flex-1 focus:outline-none text-sm min-w-[189px] max-w-[300px] sm:min-w-[180px]"
                        value="2 Jan, 2022 - 13 Jan, 2022"
                        readOnly
                      />
                      <div className="h-5 w-5 rounded-full bg-red-500 flex items-center justify-center cursor-pointer text-white">
                        <IoCloseSharp />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="overflow-y-auto" style={{ height: "550px" }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="w-full mx-auto bg-white rounded-lg shadow-md">
                      <div className="bg-[#f6f8fb] p-2 flex items-center justify-between rounded-t-lg">
                        <h2 className="text-lg font-semibold text-foreground">
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
                        <div className="mt-1 flex items-center justify-between">
                          <span className="text-base font-normal text-[#818194]">
                            Hospital Name
                          </span>
                          <p className="text-sm font-medium text-[#4F4F4F]">
                            Artemis Hospital
                          </p>
                        </div>
                        <div className="mt-1 flex items-center justify-between">
                          <span className="text-base font-normal text-[#818194]">
                            Disease Name
                          </span>
                          <p className="text-sm font-medium text-[#4F4F4F]">
                            Viral Infection
                          </p>
                        </div>
                        <div className="mt-1 flex items-center justify-between">
                          <span className="text-base font-normal text-[#818194]">
                            Date
                          </span>
                          <p className="text-sm font-medium text-[#4F4F4F]">
                            2 Jan, 2022
                          </p>
                        </div>
                        <div className="mt-1 flex items-center justify-between">
                          <span className="text-base font-normal text-[#818194]">
                            Time
                          </span>
                          <p className="text-sm font-medium text-[#4F4F4F]">
                            10:10 AM
                          </p>
                        </div>
                        <div className="mt-4 flex items-center border rounded-md p-1">
                          <div className="bg-[#f6f8fb] rounded-lg text-[#5678e9] p-3">
                            <FaRegImage />
                          </div>

                          <div className="ml-2">
                            <span className="text-[#030229] block">
                              Prescription.JPG
                            </span>
                            <span className="text-[#A7A7A7] text-sm">
                              5.09 MB
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full mx-auto bg-white rounded-lg shadow-md">
                      <div className="bg-[#f6f8fb] p-2 flex items-center justify-between rounded-t-lg">
                        <h2 className="text-lg font-semibold text-foreground">
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
                        <div className="mt-1 flex items-center justify-between">
                          <span className="text-base font-normal text-[#818194]">
                            Hospital Name
                          </span>
                          <p className="text-sm font-medium text-[#4F4F4F]">
                            Artemis Hospital
                          </p>
                        </div>
                        <div className="mt-1 flex items-center justify-between">
                          <span className="text-base font-normal text-[#818194]">
                            Disease Name
                          </span>
                          <p className="text-sm font-medium text-[#4F4F4F]">
                            Viral Infection
                          </p>
                        </div>
                        <div className="mt-1 flex items-center justify-between">
                          <span className="text-base font-normal text-[#818194]">
                            Date
                          </span>
                          <p className="text-sm font-medium text-[#4F4F4F]">
                            2 Jan, 2022
                          </p>
                        </div>
                        <div className="mt-1 flex items-center justify-between">
                          <span className="text-base font-normal text-[#818194]">
                            Time
                          </span>
                          <p className="text-sm font-medium text-[#4F4F4F]">
                            10:10 AM
                          </p>
                        </div>
                        <div className="mt-4 flex items-center border rounded-md p-1">
                          <div className="bg-[#f6f8fb] rounded-lg text-[#5678e9] p-3">
                            <FaRegImage />
                          </div>

                          <div className="ml-2">
                            <span className="text-[#030229] block">
                              Prescription.JPG
                            </span>
                            <span className="text-[#A7A7A7] text-sm">
                              5.09 MB
                            </span>
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
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40">
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <PrescriptionModal
                open={isModalOpen}
                handleClose={handleModalClose}
                prescriptionData={prescriptionData}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
