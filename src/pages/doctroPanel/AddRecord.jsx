import React from "react";
import { IoClose } from "react-icons/io5";
import { MdWatchLater } from "react-icons/md";
import { MdOutlineSpeakerNotes } from "react-icons/md";

const AddRecord = () => {
  return (
    <>
    {/* add record model */}
      <div className="w-2/5 max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-4">
          <h2 className="text-xl font-bold mb-4 text-[#030229] border-b pb-2">
            Add Record
          </h2>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="file-upload"
                className="block text-sm font-medium text-[#202224] mb-2"
              >
                Upload File
              </label>
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="file-upload"
                  className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-10 h-10 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      ></path>
                    </svg>
                    <p className="mb-2 text-sm text-[#4F4F4F]">
                      <span className="font-semibold text-[#5678E9]">
                        Upload a file
                      </span>{" "}
                      or drag and drop
                    </p>
                    <p className="text-xs text-[#A7A7A7]">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                  <input id="file-upload" type="file" className="hidden" />
                </label>
              </div>
            </div>
            <div style={{ position: "relative", padding: "15px 0px 0px" }}>
              <div
                style={{
                  position: "absolute",
                  top: "4px",
                  left: "14px",
                  backgroundColor: "white",
                  color: "#030229",
                }}
              >
                Description
              </div>
              <input
                type="text"
                name="name"
                placeholder="Enter Description"
                className="w-full"
                style={{
                  padding: "12px 14px",
                  border: "1px solid #d9d9d9",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>
        </div>
        <div className="px-6 py-4 flex justify-between">
          <button className="py-2  me-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 w-[47%]">
            Cancel
          </button>
          <button className="py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-[#4F4F4F] bg-[#F6F8FB] hover:bg-[#0EABEB] hover:text-white w-[47%]">
            Save
          </button>
        </div>
      </div>

      {/* not Available model */}
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Not Available</h2>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            <span>Monday,18 June,2022 09:00 AM - 10:00 AM</span>
          </div>
          <div style={{ position: "relative", padding: "15px 0px 0px" }}>
              <div
                style={{
                  position: "absolute",
                  top: "4px",
                  left: "14px",
                  backgroundColor: "white",
                  color: "#030229",
                }}
              >
                Add Note
              </div>
              <input
                type="text"
                name="name"
                placeholder="Write a Note                                                                                          "
                className="w-full"
                style={{
                  padding: "20px 14px",
                  border: "1px solid #d9d9d9",
                  borderRadius: "10px",
                }}
              />
            </div>
          <div className="flex justify-between space-x-3">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md w-[47%]">
              Cancel
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 w-[47%]">
              Disable
            </button>
          </div>
        </div>
      </div>

      {/* not Available edit delete model */}
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4 border-b pb-2">
          <h2 className="text-[24px] font-bold text-[#030229]">Not Available</h2>
          <button className="text-white h-5 w-5 rounded-full bg-red-500 flex justify-center items-center">
          <IoClose />
          </button>
        </div>
        <div className="mb-4">
          <div className="flex items-center font-normal text-base text-[#030229]">
          <MdWatchLater className="mr-2 h-5 w-5 text-[#4F4F4F]"/>
            Monday,18 June,2022 09:00 AM - 10:00 AM
          </div>
        </div>
       
        <div className="font-normal text-base text-[#030229] mb-6">
          
          <p ><MdOutlineSpeakerNotes className="mr-2 h-5 w-5 inline text-[#4F4F4F]"/>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever</p>
        </div>
        
        <div className="flex space-x-2">
          <button className="flex-1 bg-[#39973D] text-white font-semibold py-2 px-4 rounded transition duration-300">
            Edit
          </button>
          <button className="flex-1 bg-[#E11D29] text-white font-semibold py-2 px-4 rounded transition duration-300">
            Delete
          </button>
        </div>
      </div>
    </div>

    <div class="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <h1 class="text-2xl font-bold mb-4">Edit Slot</h1>

        <div class="mb-4">
            <label for="select-time" class="block text-sm font-medium text-gray-700">Select Time</label>
            <select id="select-time" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
            </select>
        </div>

        <div class="mb-4">
            <label for="add-note" class="block text-sm font-medium text-gray-700">Add Note</label>
            <textarea id="add-note" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" rows="4" placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"></textarea>
        </div>

        <div class="flex items-center justify-between">
            <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Cancel</button>
            <button class="bg- amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Save</button>
        </div>
    </div>
    </>
  );
};

export default AddRecord;
