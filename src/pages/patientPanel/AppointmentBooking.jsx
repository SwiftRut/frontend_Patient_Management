import React, { useEffect, useState } from "react";
import Calendar from "./Calendar";
import { useDoctor } from "../../hooks/useDoctor";
import { useAuth } from "../../hooks/useAuth";
import { useGlobal } from "../../hooks/useGlobal";

const AppointmentBooking = () => {
  const { getAllDoctors, allDoctors } = useDoctor();
  const { createAppointment } = useGlobal();
  const { user } = useAuth();

  const [specialty, setSpecialty] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [hospital, setHospital] = useState("");
  const [doctor, setDoctor] = useState("");
  const [appointmentType, setAppointmentType] = useState("");

  useEffect(() => {
    getAllDoctors();
  
  }, []);

  // Get unique values for each filter based on allDoctors data
  const getUniqueValues = (key, filterKey, filterValue) => {
    return [...new Set(allDoctors
      .filter(doctor => !filterKey || doctor[filterKey] === filterValue)
      .map(doctor => doctor[key])
    )];
  };

  const handleSubmit = async () => {
    try {
      createAppointment(user.id, formData);
    } catch (err) {
      console.error(err);
      throw err;
    }
  };
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
                options={[...new Set(allDoctors.map(doc => doc.speciality))]}
              />

              {/* Country Select */}
              <SelectInput
                label="Country"
                value={country}
                onChange={(e) => {
                  setCountry(e.target.value);
                  setState("");
                  setCity("");
                  setHospital("");
                  setDoctor("");
                }}
                options={getUniqueValues("country")}
              />

              {/* State Select */}
              <SelectInput
                label="State"
                value={state}
                onChange={(e) => {
                  setState(e.target.value);
                  setCity("");
                  setHospital("");
                  setDoctor("");
                }}
                options={getUniqueValues("state", "country", country)}
              />

              {/* City Select */}
              <SelectInput
                label="City"
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                  setHospital("");
                  setDoctor("");
                }}
                options={getUniqueValues("city", "state", state)}
              />

              {/* Hospital Select */}
              <SelectInput
                label="Hospital"
                value={hospital}
                onChange={(e) => {
                  setHospital(e.target.value);
                  setDoctor("");
                }}
                options={getUniqueValues("hospitalName", "city", city)}
              />

              {/* Doctor Select */}
              <SelectInput
                label="Doctor"
                value={doctor}
                onChange={(e) => setDoctor(e.target.value)}
                options={allDoctors
                  .filter(doc => doc.hospitalName === hospital)
                  .map(doc => ({ value: doc._id, label: `Dr. ${doc.name}` }))}
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
                    <Calendar/>
                  </div>

                  <DoctorDetails doctorId={doctor, allDoctors} />
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
      {options?.map(option => (
        <option key={option?.value || option} value={option?.value || option}>
          {option?.label || option}
        </option>
      ))}
    </select>
    <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
      <i className="fa-solid fa-chevron-down text-gray-400"></i>
    </span>
  </div>
);

const DoctorDetails = ({ doctorId, allDoctors}) => {
  const doctor = allDoctors?.find(doc => doc._id === doctorId);
  console.log(doctor,"<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Doctor from doctor Details");
  if (!doctor) return null;

  return (
    <div className="col-span-3 px-2 py-3">
      <div className="bg-white w-full border-1 py-3 rounded-md">
        <h5 className="px-3">Doctor Details</h5>
        <hr />
        <div className="h-20 bg-custom-gradient m-2 rounded-md relative">
          <img
            src={doctor.avatar || "./image/Avatar.png"}
            alt="Doctor Avatar"
            className="w-16"
          />
          <div>
            <span className="text-white ms-1">{doctor.firstName} {doctor.lastName}</span>
            <button className="px-3 py-1 bg-btn-light rounded-full flex text-white">
              <img src="./image/vuesax.png" alt="" className="pe-1" /> {doctor.gender}
            </button>
          </div>
        </div>
        <div className="rounded-md bg-gray-100 p-3 mx-2">
          <DoctorDetailItem title="Qualification" value={doctor.qualification} />
          <DoctorDetailItem title="Specialty Type" value={doctor.specialty} />
          <DoctorDetailItem title="Years of Experience" value={`${doctor.experience} Years`} />
          <DoctorDetailItem title="Working Time" value="6 Hours" />
          <DoctorDetailItem title="Emergency Contact Number" value={doctor.contactNumber} />
        </div>
      </div>
    </div>
  );
};

const DoctorDetailItem = ({ title, value }) => (
  <div>
    <h6 className="text-gray-500 font-medium">{title}</h6>
    <p className="text-black font-medium">{value}</p>
  </div>
);

export default AppointmentBooking;
