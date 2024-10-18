import React, { useEffect, useState } from "react";
import Calendar from "./Calendar";
import { useDoctor } from "../../hooks/useDoctor";
import { useAuth } from "../../hooks/useAuth";
import { useGlobal } from "../../hooks/useGlobal";
import DoctorDetails from "./DoctorDetails";

const AppointmentBooking = () => {
  const { getAllHospitals, allHospitals } = useGlobal();
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
    getAllHospitals();
  }, []);

  // Get unique values for each filter based on allDoctors data
  const getUniqueValues = (key, filterKey, filterValue) => {
    const data = filterKey ? allDoctors.filter(doctor => doctor[filterKey] === filterValue) : allDoctors;
    return [...new Set(data.map(doctor => doctor[key]))];
  };

  const filteredHospitals = allHospitals.filter(hospital => {
    return (
      (!country || hospital.country === country) &&
      (!state || hospital.state === state) &&
      (!city || hospital.city === city)
    );
  });

  const filteredDoctors = allDoctors.filter(doctor => {
    return (
      (!specialty || doctor.speciality === specialty) &&
      (!country || doctor.country === country) &&
      (!state || doctor.state === state) &&
      (!city || doctor.city === city) &&
      (!hospital || doctor.hospitalName === hospital)
    );
  });

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
      // specialty &&
      // country &&
      // state &&
      // city &&
      // hospital &&
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
                options={filteredHospitals.map(hospital => hospital.name)}
              />

              {/* Doctor Select */}
              <SelectInput
                label="Doctor"
                value={doctor}
                onChange={(e) => setDoctor(e.target.value)}
                options={filteredDoctors.map(doc => ({
                  value: doc._id,
                  label: `Dr. ${doc.name}`,
                }))}
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
                  { value: "Online", label:"Online"}
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
                    <Calendar filterData={
                      {hospital, doctor, state, city, country,appointmentType}
                    }/>
                  </div>
                  <DoctorDetails doctorId={doctor} allDoctors={allDoctors} />
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

export default AppointmentBooking;
