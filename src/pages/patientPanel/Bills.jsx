import React, { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { HiCash } from "react-icons/hi";
import { FaRupeeSign } from "react-icons/fa";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import MainBill from "./MainBill";

const Bills = () => {
  const [activeTab, setActiveTab] = useState("Unpaid Bills");
  const [openModel, setOpenModel] = useState(false);
  const [paymentModel, setpaymentModel] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState("");
  const [showCashSuccessModal, setShowCashSuccessModal] = useState(false);
  const [showFirstModal, setShowFirstModal] = useState(true);
  const [showCardModal, setShowCardModal] = useState(false);
  const [showCardDetailsModal, setShowCardDetailsModal] = useState(false);

  const allAppointment = [
    {
      doctorName: "Dr. Smith",
      hospitalName: "City Hospital",
      billcreatedDate: "2024-10-01",
      billcreatedTime: "10:00 AM",
      totalamount: "₹ 24,668",
    },
    {
      doctorName: "Dr. Johnson",
      hospitalName: "Green Valley Clinic",
      billcreatedDate: "2024-09-28",
      billcreatedTime: "2:00 PM",
      totalamount: "₹ 2,520",
    },
    {
      doctorName: "Dr. Lee",
      hospitalName: "Health Center",
      billcreatedDate: "2024-10-03",
      billcreatedTime: "1:00 PM",
      totalamount: "₹ 2,500",
    },
    {
      doctorName: "Dr. Brown",
      hospitalName: "City Hospital",
      appointmentCancelDate: "2024-09-29",
      billcreatedTime: "9:00 AM",
      totalamount: "₹ 3,000",
    },
    {
      doctorName: "Dr. White",
      hospitalName: "Health Plus Clinic",
      billcreatedDate: "2024-10-02",
      billcreatedTime: "3:00 PM",
      totalamount: "₹ 2,540",
    },
  ];

  const handleViewDoctorDetails = () => {
    setOpenModel(true);
  };
  const handlePayment = () => {
    setShowFirstModal(true);
  };
  const handlePaymentMethod = (method) => {
    setSelectedPayment(method);
    if (method === "online") {
      setShowFirstModal(false);
      setShowCardModal(true);
    } else if (method === "cash") {
      setShowFirstModal(false);
      setShowCashSuccessModal(true);
    }
  };

  const handleCardSelection = (card) => {
    if (card === "mastercard") {
      setShowCardModal(false);
      setShowCardDetailsModal(true);
    }
  };
  return (
    <div>
      <div className="p-4 bg-[#f6f8fb]">
        <div className="container mt-5">
          <div className="bg-white shadow-lg  h-auto p-4 rounded-xl">
            <ul className="overflow-x-auto flex border-b border-gray-300">
              <li className="mr-4">
                <button
                  onClick={() => setActiveTab("Unpaid Bills")}
                  className={`py-2 px-4 font-semibold text-sm ${
                    activeTab === "Unpaid Bills"
                      ? "text-[#0EABEB] border-b-2 border-[#0EABEB]"
                      : "text-gray-500"
                  }`}
                >
                  Unpaid Bills
                </button>
              </li>
              <li className="mr-4">
                <button
                  onClick={() => setActiveTab("Paid Bills")}
                  className={`py-2 px-4 font-semibold text-sm ${
                    activeTab === "Paid Bills"
                      ? "text-[#0EABEB] border-b-2 border-[#0EABEB]"
                      : "text-gray-500"
                  }`}
                >
                  Paid Bills
                </button>
              </li>
            </ul>

            {/* Tab content */}
            <div className="tab-content mt-3">
              {activeTab === "Unpaid Bills" && (
                <div>
                  <div className="flex flex-col md:flex-row justify-between items-center mb-3">
                    <h1 className="text-[24px] font-bold mb-2 text-[#030229]">
                      Unpaid Bills
                    </h1>
                  </div>

                  <div className="overflow-y-auto" style={{ height: "550px" }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {allAppointment.map((val, index) => (
                        <div
                          key={index}
                          class="w-full mx-auto bg-white rounded-lg shadow-md"
                        >
                          <div className="bg-[#f6f8fb] p-3 flex items-center justify-between  ">
                            <h2 class="text-lg font-semibold text-foreground">
                              {val.doctorName}
                            </h2>
                            <div className="">
                              <div
                                onClick={() => {
                                  handleViewDoctorDetails(val);
                                }}
                                className="bg-white rounded-lg border text-[#A7A7A7] hover:text-[#0EABEB] transition duration:300 p-2"
                              >
                                <IoEyeSharp />
                              </div>
                            </div>
                          </div>
                          <div className="p-3 border">
                            <div class="mt-1 flex items-center justify-between">
                              <span class="text-base font-normal text-[#818194]">
                                Hospital Name
                              </span>
                              <p class="text-sm font-medium text-[#4F4F4F]">
                                {val.hospitalName}
                              </p>
                            </div>
                            <div class="mt-1 flex items-center justify-between">
                              <span class="text-base font-normal text-[#818194]">
                                Bill Created Date
                              </span>
                              <p class="text-sm font-medium text-[#4F4F4F]">
                                {val.billcreatedDate}
                              </p>
                            </div>
                            <div class="mt-1 flex items-center justify-between">
                              <span class="text-base font-normal text-[#818194]">
                                Bill Created Time
                              </span>
                              <p class="text-sm font-medium text-[#4F4F4F]">
                                {val.billcreatedTime}
                              </p>
                            </div>
                            <div class="mt-1 flex items-center justify-between">
                              <span class="text-base font-normal text-[#818194]">
                                Total Bill Amount
                              </span>
                              <p class="text-sm font-medium text-[#E11D29]">
                                {val.totalamount}
                              </p>
                            </div>
                            <div class="flex justify-between mt-4">
                              <button
                                class="border p-2 rounded-md w-full text-lg font-semibold text-[#4F4F4F] flex items-center justify-center hover:bg-[#0EABEB] hover:text-white transition duration:100"
                                onClick={() => {
                                  handlePayment(val);
                                }}
                              >
                                Pay Now
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "Paid Bills" && (
                <div className="p-4">
                  <div className="flex flex-col md:flex-row justify-between items-center mb-3">
                    <h1 className="text-[24px] font-bold mb-2 text-[#030229]">
                      Paid Bills
                    </h1>
                  </div>

                  <div className="overflow-y-auto" style={{ height: "550px" }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {allAppointment.map((val, index) => (
                        <div
                          key={index}
                          class="w-full mx-auto bg-white rounded-lg shadow-md"
                        >
                          <div className="bg-[#f6f8fb] p-3 flex items-center justify-between  ">
                            <h2 class="text-lg font-semibold text-foreground">
                              {val.doctorName}
                            </h2>
                            <div className="">
                              <div
                                onClick={() => {
                                  handleViewDoctorDetails(val);
                                }}
                                className="bg-white rounded-lg border text-[#A7A7A7] hover:text-[#0EABEB] transition duration:300 p-2"
                              >
                                <IoEyeSharp />
                              </div>
                            </div>
                          </div>
                          <div className="p-3 border">
                            <div class="mt-1 flex items-center justify-between">
                              <span class="text-base font-normal text-[#818194]">
                                Hospital Name
                              </span>
                              <p class="text-sm font-medium text-[#4F4F4F]">
                                {val.hospitalName}
                              </p>
                            </div>
                            <div class="mt-1 flex items-center justify-between">
                              <span class="text-base font-normal text-[#818194]">
                                Bill Created Date
                              </span>
                              <p class="text-sm font-medium text-[#4F4F4F]">
                                {val.billcreatedDate}
                              </p>
                            </div>
                            <div class="mt-1 flex items-center justify-between">
                              <span class="text-base font-normal text-[#818194]">
                                Bill Created Time
                              </span>
                              <p class="text-sm font-medium text-[#4F4F4F]">
                                {val.billcreatedTime}
                              </p>
                            </div>
                            <div class="mt-1 flex items-center justify-between">
                              <span class="text-base font-normal text-[#818194]">
                                Total Bill Amount
                              </span>
                              <p class="text-sm font-medium text-[#39973D]">
                                {val.totalamount}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* eye */}
      {openModel && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40">
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="onsite-modal-header">
              <MainBill />
              <button
                className="close-button"
                onClick={() => setOpenModel(false)}
              >
                &times;
              </button>
            </div>
            {/* <Onsite
              selectedDoctor={selectedDoctor}
              setOpenModel={setOpenModel}
            /> */}
          </div>
          <div
            className="onsite-modal-overlay"
            onClick={() => setOpenModel(false)}
          ></div>
        </div>
      )}
      {/* Payment Modal */}
      {showFirstModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40">
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="p-6 rounded-lg shadow-md bg-[#f4f4f4]">
              <h2 className="text-lg font-bold mb-4 text-[#030229] border-b pb-2">
                Payment Method
              </h2>

              {/* Online Payment Option */}
              <div className="flex items-center justify-between mb-4 bg-white p-2 rounded-md">
                <label htmlFor="online" className="flex items-center">
                  <div className="bg-[#F4F4F4] rounded-md p-2 me-2 text-[#4F4F4F] text-lg">
                    <HiCash />
                  </div>
                  <p className="text-[#141414] text-lg font-bold me-36">
                    Online
                  </p>
                </label>
                <input
                  type="radio"
                  id="online"
                  name="payment"
                  className="mr-2"
                  onClick={() => handlePaymentMethod("online")}
                />
              </div>

              {/* Cash Payment Option */}
              <div className="flex items-center justify-between mb-4 bg-white p-2 rounded-md">
                <label htmlFor="cash" className="flex items-center">
                  <div className="bg-[#F4F4F4] rounded-md p-2 me-2 text-[#4F4F4F] text-lg">
                    <FaRupeeSign />
                  </div>
                  <p className="text-[#A7A7A7] text-lg font-bold">Cash</p>
                </label>
                <input
                  type="radio"
                  id="cash"
                  name="payment"
                  className="mr-2"
                  onClick={() => handlePaymentMethod("cash")}
                />
              </div>

              <div className="flex justify-between space-x-3">
                <button
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md w-[47%]"
                  onClick={() => setShowFirstModal(false)} // Close modal when Cancel is clicked
                >
                  Cancel
                </button>
                <button className="px-4 py-2 text-sm font-medium text-white bg-[#0EABEB] rounded-md w-[47%]">
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* card Payment  */}
      {showCardModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40">
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="p-6 rounded-lg shadow-md bg-[#f4f4f4] mt-6">
              <h2 className="text-lg font-bold mb-4 text-[#030229] border-b pb-2">
                Choose Card
              </h2>
              <div className="flex items-center justify-between mb-4 bg-white p-2 rounded-md">
                <label htmlFor="mastercard" className="flex items-center me-36">
                  <img
                    src="/img/master.png"
                    className="bg-[#F4F4F4] rounded-md p-2 me-2"
                  />
                  <p className="text-[#141414] text-lg font-bold">
                    Master Card
                  </p>
                </label>
                <input
                  type="radio"
                  id="mastercard"
                  name="cardPayment"
                  className="mr-2"
                  onClick={() => handleCardSelection("mastercard")}
                />
              </div>
              <div className="flex items-center justify-between mb-4 bg-white p-2 rounded-md">
                <label htmlFor="visacard" className="flex items-center">
                  <img
                    src="/img/visa.png"
                    className="bg-[#F4F4F4] rounded-md p-2 me-2"
                  />
                  <p className="text-[#A7A7A7] text-lg font-bold">Visa Card</p>
                </label>
                <input
                  type="radio"
                  id="visacard"
                  name="cardPayment"
                  className="mr-2"
                />
              </div>

              <div className="flex justify-between space-x-3">
                <button
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md w-[47%]"
                  onClick={() => setShowCardModal(false)}
                >
                  No
                </button>
                <button className="px-4 py-2 text-sm font-medium text-white bg-[#0EABEB] rounded-md w-[47%]">
                  Payment Return
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* mastercard Model */}
      {showCardDetailsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40">
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="max-w-md mx-auto p-6 bg-[#f4f4f4] rounded-lg shadow-md">
              <h2 className="text-lg font-bold mb-4 text-[#030229] border-b pb-2">
                Payment Method
              </h2>

              <div className="bg-white rounded-lg p-4 mb-3">
                <div className="flex items-center justify-between mb-4 border-b pb-2">
                  <label htmlFor="master-card" className="flex items-center">
                    <img
                      src="/img/master.png"
                      className="bg-[#F4F4F4] rounded-md p-2 me-2"
                    />
                    <p className="text-[#141414] text-lg font-bold ">
                      Master Card
                    </p>
                  </label>
                  <input
                    type="radio"
                    id="master-card"
                    name="payment-method"
                    className="mr-2"
                    checked
                  />
                </div>
                <div className="relative">
                  <label
                    htmlFor="card-holder-name"
                    className="absolute top-[-8px] left-4 bg-white px-1 text-[#030229] text-sm"
                  >
                    Card Holder Name*
                  </label>
                  <input
                    id="card-holder-name"
                    type="text"
                    placeholder="Enter Name"
                    className="mt-4 block w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#0EABEB]"
                    required
                  />
                </div>
                <div className="relative my-2">
                  <label
                    htmlFor="card-number"
                    className="absolute top-[-8px] left-4 bg-white px-1 text-[#030229] text-sm"
                  >
                    Card Number*
                  </label>
                  <input
                    id="card-number"
                    type="text"
                    placeholder="Enter Number"
                    className="mt-4 block w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#0EABEB]"
                    required
                  />
                </div>

                <div className="flex mb-4">
                  <div className="relative pr-2 w-1/2">
                    <label
                      htmlFor="expiry-date"
                      className="absolute top-1 left-4 bg-white px-1 text-[#030229] text-sm"
                    >
                      Expiry Date*
                    </label>
                    <input
                      id="expiry-date"
                      type="date"
                      className="mt-4 block w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#0EABEB]"
                      required
                    />
                  </div>

                  {/* CVV */}
                  <div className="relative pl-2 w-1/2">
                    <label
                      htmlFor="cvv"
                      className="absolute top-1 left-4 bg-white px-1 text-[#030229] text-sm"
                    >
                      CVV*
                    </label>
                    <input
                      id="cvv"
                      type="text"
                      placeholder="Enter CVV"
                      className="mt-4 block w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#0EABEB]"
                      required
                    />
                  </div>
                </div>
              </div>

              <div class="flex items-center justify-between mb-4 bg-white p-4 rounded-lg">
                <label for="visacard" class="flex items-center">
                  <img
                    src="/img/visa.png"
                    className="bg-[#F4F4F4] rounded-md p-2 me-2"
                  />
                  <p className="text-[#A7A7A7] text-lg font-bold">Visa Card</p>
                </label>
                <input type="radio" id="visacard" name="payment" class="mr-2" />
              </div>

              <div className="flex justify-between space-x-3">
                <button
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md w-[47%]"
                  onClick={() => setShowCardDetailsModal(false)}
                >
                  Cancel
                </button>
                <button className="px-4 py-2 text-sm font-medium text-[#4F4F4F] hover:text-white bg-white hover:bg-[#0EABEB] transition duration:100 rounded-md w-[47%]">
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cash Payment Success Modal */}
      {showCashSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40">
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg px-3 py-3 max-w-xs mx-auto w-full border-t-[6px] border-[#39973D]">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-[#39973D] rounded-full p-3 text-white text-lg">
                  <RiMoneyRupeeCircleFill />
                </div>
              </div>
              <h2 className="text-[22px] text-[#030229] font-bold text-center">
                Payment
              </h2>
              <p className="text-[#4F4F4F] text-sm font-normal text-center mb-6 mt-1">
                Pay your bill at cash counter for confirm your bill.
              </p>
              <div className="">
                <button
                  className="px-4 py-2 text-sm font-medium text-white bg-[#39973D] rounded-md w-full"
                  onClick={() => setShowCashSuccessModal(false)}
                >
                  Okay
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bills;
