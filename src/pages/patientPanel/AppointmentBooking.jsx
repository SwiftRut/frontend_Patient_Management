import React, { useState } from "react";
import AppointmentTimeSlot from "./AppointmentTimeSlot1";
import AppointmentTimeSlot1 from "./AppointmentTimeSlot1";
import Calendar from "./Calendar";

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
    return (
      specialty &&
      country &&
      state &&
      city &&
      hospital &&
      doctor &&
      appointmentType
    );
  };

  return (
    <div className="container">
      <div className="p-4 shadow-lg m-3 rounded-lg" style={{ height: "auto" }}>
        <h1 className="text-xl font-semibold mb-2 md:mb-0">Appointment Booking</h1>
        <div className="w-full border-2 h-auto rounded-md px-3 py-2 bg-white">
          <div className="flex flex-col m-2">
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 mb-4">
              {/* Specialty Select */}
              <SelectInput
                label="Specialty"
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
                options={[
                  { value: "cardiology", label: "Cardiology" },
                  { value: "neurology", label: "Neurology" },
                  { value: "pediatrics", label: "Pediatrics" },
                  { value: "orthopedics", label: "Orthopedics" },
                  { value: "dermatology", label: "Dermatology" },
                ]}
              />

              {/* Country Select */}
              <SelectInput
                label="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                options={[
                  { value: "usa", label: "United States" },
                  { value: "uk", label: "United Kingdom" },
                  { value: "india", label: "India" },
                  { value: "canada", label: "Canada" },
                  { value: "australia", label: "Australia" },
                ]}
              />

              {/* State Select */}
              <SelectInput
                label="State"
                value={state}
                onChange={(e) => setState(e.target.value)}
                options={[
                  { value: "california", label: "California" },
                  { value: "texas", label: "Texas" },
                  { value: "florida", label: "Florida" },
                  { value: "new_york", label: "New York" },
                  { value: "illinois", label: "Illinois" },
                ]}
              />

              {/* City Select */}
              <SelectInput
                label="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                options={[
                  { value: "los_angeles", label: "Los Angeles" },
                  { value: "new_york_city", label: "New York City" },
                  { value: "chicago", label: "Chicago" },
                  { value: "houston", label: "Houston" },
                  { value: "phoenix", label: "Phoenix" },
                ]}
              />

              {/* Hospital Select */}
              <SelectInput
                label="Hospital"
                value={hospital}
                onChange={(e) => setHospital(e.target.value)}
                options={[
                  { value: "general_hospital", label: "General Hospital" },
                  { value: "city_hospital", label: "City Hospital" },
                  { value: "county_hospital", label: "County Hospital" },
                  { value: "private_hospital", label: "Private Hospital" },
                  { value: "children_hospital", label: "Children's Hospital" },
                ]}
              />

              {/* Doctor Select */}
              <SelectInput
                label="Doctor"
                value={doctor}
                onChange={(e) => setDoctor(e.target.value)}
                options={[
                  { value: "dr_smith", label: "Dr. Smith" },
                  { value: "dr_jones", label: "Dr. Jones" },
                  { value: "dr_brown", label: "Dr. Brown" },
                  { value: "dr_johnson", label: "Dr. Johnson" },
                  { value: "dr_davis", label: "Dr. Davis" },
                ]}
              />

              {/* Appointment Type Select */}
              <SelectInput
                label="Appointment Type"
                value={appointmentType}
                onChange={(e) => setAppointmentType(e.target.value)}
                options={[
                  { value: "consultation", label: "Consultation" },
                  { value: "follow_up", label: "Follow-Up" },
                  { value: "emergency", label: "Emergency" },
                  { value: "routine_checkup", label: "Routine Checkup" },
                ]}
              />
            </div>

            {/* Conditionally Render Image and Paragraph */}
            <div className="w-full h-auto border my-2 py-5 rounded-md flex flex-col items-center justify-center">
              {!isAllSelected() ? (
                <>
                  <img src="./image/Invoice.png" alt="" className="w-60" />
                  <p className="mt-2 text-center">No Appointment Found Yet</p>
                </>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-10 gap-4">
                  <div className="col-span-7 p-3">
                    <Calendar />
                  </div>

                  <DoctorDetails />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SelectInput = ({ label, value, onChange, options }) => (
  <div className="relative border border-gray-300 rounded-md">
    <label className="absolute left-3 -top-2.5 bg-white px-1 text-sm font-semibold text-gray-800">
      {label}
    </label>
    <select
      value={value}
      onChange={onChange}
      className="block w-full px-3 py-3 text-gray-500 bg-white border-0 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
    >
      <option value="" disabled>
        Select {label}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
      <i className="fa-solid fa-chevron-down text-gray-400"></i>
    </span>
  </div>
);

const DoctorDetails = () => (
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
            <span className="text-white ms-1">Dr. Cristofor Pasquinades</span>
            <button className="px-3 py-1 bg-btn-light rounded-full flex text-white">
              <img src="./image/vuesax.png" alt="" className="pe-1" /> Male
            </button>
          </div>
        </div>
      </div>
      <div className="rounded-md bg-gray-100 p-3 mx-2">
        <DoctorDetailItem title="Qualification" value="MBBS" />
        <DoctorDetailItem title="Specialty Type" value="Cardiology" />
        <DoctorDetailItem title="Years of Experience" value="6+ Years" />
        <DoctorDetailItem title="Working Time" value="6 Hours" />
        <DoctorDetailItem title="Emergency Contact Number" value="123-456-7890" />
      </div>
    </div>
  </div>
);

const DoctorDetailItem = ({ title, value }) => (
  <div>
    <h6 className="text-gray-500 font-medium">{title}</h6>
    <p className="text-black font-medium">{value}</p>
  </div>
);

export default AppointmentBooking;
