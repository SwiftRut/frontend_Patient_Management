import { useEffect, useState } from "react";
import Calendar from "./Calendar";
import { useDoctor } from "../../hooks/useDoctor";
import { useGlobal } from "../../hooks/useGlobal";
import DoctorDetails from "./DoctorDetails";
import {toast} from "react-hot-toast";
import { all } from "axios";
const AppointmentBooking = () => {
  const { getAllDoctors, allDoctors } = useDoctor();
  const { getAllHospitals, allHospitals, getAllAppointments, onClickNotification } = useGlobal();
  const [specialty, setSpecialty] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [hospital, setHospital] = useState("");
  const [doctor, setDoctor] = useState("");
  const [appointmentType, setAppointmentType] = useState("");
  useEffect(() => {
    toast.success("hospital might not work due to data inefficiency !!  You can continue without it!");
    getAllDoctors();
    getAllHospitals();
    getAllAppointments();
    loadRazorpayScript(); // Call the loadRazorpayScript function first

  }, []);

  // Get unique values for each filter based on allDoctors data
  const getUniqueValues = (key, filterKey, filterValue) => {
    const data = filterKey
      ? allDoctors.filter((doctor) => doctor[filterKey] === filterValue)
      : allDoctors;
    return [...new Set(data.map((doctor) => doctor[key]))];
  };

  const filteredHospitals = allHospitals.filter((hospital) => {
    return (
      (!country || hospital.country === country) &&
      (!state || hospital.state === state) &&
      (!city || hospital.city === city)
    );
  });

  const filteredDoctors = allDoctors.filter((doctor) => {
    return (
      (!specialty || doctor.speciality === specialty) &&
      (!country || doctor.country === country) &&
      (!state || doctor.state === state) &&
      (!city || doctor.city === city) &&
      (!hospital || doctor.hospitalName === hospital)
    );
  });
// Load Razorpay script
const loadRazorpayScript = () => {
  const script = document.createElement("script");
  script.src = "https://checkout.razorpay.com/v1/checkout.js";
  script.async = true;
  document.body.appendChild(script);
};

// Handle Razorpay Payment
const handlePayment = () => {

  const options = {
    key: "rzp_test_bLAqvl1z0C0XkX", // Replace with your Razorpay Key ID
    amount: 1000 * 100, // Amount in paisa (e.g., 1000 = 10 INR)
    currency: "INR",
    name: "Doctor Appointment",
    description: "Consultation fee",
    handler: function (response) {
      alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
    },
    prefill: {
      name: "John Doe",
      email: "john.doe@example.com",
      contact: "9999999999",
    },
    theme: {
      color: "#3399cc",
    },
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
};
  const isAllSelected = () => {
    return (
      doctor && appointmentType
    );
  };

  return (
    <div className="container">
      <div className="p-4 shadow-lg m-3 rounded-lg" style={{ height: "auto" }}>
        <h1 className="text-xl font-semibold mb-2 md:mb-0">
          Appointment Booking
        </h1>
        <div className="w-full border-2 h-auto rounded-md px-3 py-2 bg-white">
          <div className="flex flex-col m-2">
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 mb-4">
              {/* Specialty Select */}
              <SelectInput
                label="Specialty"
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
                options={[...new Set(allDoctors.map((doc) => doc.speciality))]}
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
                options={filteredHospitals.map((hospital) => hospital.name)}
              />
              {/* Doctor Select */}
              <SelectInput
                label="Doctor"
                value={doctor}
                onChange={(e) => setDoctor(e.target.value)}
                options={filteredDoctors.map((doc) => ({
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
                  { value: "Online", label: "Online" },
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
                    <Calendar
                      filterData={{
                        hospital,
                        doctor,
                        state,
                        city,
                        country,
                        appointmentType,
                        
                      }}
                      selectedDoctor={allDoctors.find((doc) => doc._id === doctor)}
                    />
                  </div>
                  <div className="col-span-3 p-3">
                    <DoctorDetails doctorId={doctor} allDoctors={allDoctors} />
                  </div>
                </div>
              )}
            </div>
          </div>
          <button
                      onClick={handlePayment}
                      className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Pay with Razorpay
                    </button>
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
      {options?.map((option) => (
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
