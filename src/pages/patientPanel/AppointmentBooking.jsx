import React, { useEffect, useState } from "react";
import Calendar from "./Calendar";
import { useDoctor } from "../../hooks/useDoctor";
import { useAuth } from "../../hooks/useAuth";
import { useGlobal } from "../../hooks/useGlobal";
import DoctorDetails from "./DoctorDetails";
import apiService from "../../services/api";

const AppointmentBooking = () => {
  const { getAllHospitals, allHospitals, getAppointmetnsForPatient } = useGlobal();
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
  const [appointmentFee, setAppointmentFee] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState(null);

  useEffect(() => {
    getAllDoctors();
    getAllHospitals();
    getAppointmetnsForPatient(user.id);

    // Load Razorpay script
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);



  useEffect(() => {
    if (doctor && appointmentType) {
      fetchAppointmentFee();
    }
  }, [doctor, appointmentType]);
  console.log(doctor, appointmentType, appointmentFee);
  const fetchAppointmentFee = async () => {
    try {
      const response = await apiService.AppointmentFee(doctor, appointmentType);
      const data = response.data;
      console.log(data,"<<<<<<<<<<<<<<<<<<<<<<<<<<<< getting the fees here");
      setAppointmentFee(data.fee);
    } catch (error) {
      console.error("Error fetching appointment fee:", error);
    }
  };

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

  const handlePayment = async () => {
    try {
      // Create Razorpay order
      const orderResponse = await apiService.createRazorpayOrder({
        amount: appointmentFee * 100, // Razorpay expects amount in paise
      });
      const { id: orderId, amount } = orderResponse.data;

      const options = {
        key: import.meta.env.REACT_APP_RAZORPAY_KEY_ID, // Replace with your actual Razorpay key
        amount: amount,
        currency: "INR",
        name: "Your Hospital Name",
        description: "Appointment Booking",
        order_id: orderId,
        handler: function (response) {
          handleSubmit(response);
        },
        prefill: {
          name: user.name,
          email: user.email,
          contact: user.phone,
        },
        theme: {
          color: "#3399cc",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Error initiating payment:", error);
      alert("Failed to initiate payment. Please try again.");
    }
  };

  const handleSubmit = async (paymentResponse) => {
    try {
      const appointmentData = {
        doctorId: doctor,
        date: selectedSlot.start,
        appointmentTime: selectedSlot.start,
        type: appointmentType,
        country,
        state,
        city,
        hospitalId: hospital,
        razorpayPaymentId: paymentResponse.razorpay_payment_id,
        razorpayOrderId: paymentResponse.razorpay_order_id,
        razorpaySignature: paymentResponse.razorpay_signature
      };

      await createAppointment(user.id, appointmentData);
      // Handle success (e.g., show a success message, redirect, etc.)
      alert("Appointment booked successfully!");
    } catch (err) {
      console.error(err);
      alert("Error booking appointment. Please try again.");
    }
  };

  const isAllSelected = () => {
    return doctor && appointmentType;
  };

  const handleSlotSelect = (slotInfo) => {
    setSelectedSlot(slotInfo);
  };

  return (
    <div className="container">
      <div className="p-4 shadow-lg m-3 rounded-lg" style={{ height: "auto" }}>
        <h1 className="text-xl font-semibold mb-2 md:mb-0">Appointment Booking</h1>
        <div className="w-full border-2 h-auto rounded-md px-3 py-2 bg-white">
          <div className="flex flex-col m-2">
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 mb-4">
              <SelectInput
                label="Specialty"
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
                options={[...new Set(allDoctors.map(doc => doc.speciality))]}
              />
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
              <SelectInput
                label="Hospital"
                value={hospital}
                onChange={(e) => {
                  setHospital(e.target.value);
                  setDoctor("");
                }}
                options={filteredHospitals.map(hospital => hospital.name)}
              />
              <SelectInput
                label="Doctor"
                value={doctor}
                onChange={(e) => setDoctor(e.target.value)}
                options={filteredDoctors.map(doc => ({
                  value: doc._id,
                  label: `Dr. ${doc.name}`,
                }))}
              />
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

            <div className="w-full h-auto border my-2 py-5 rounded-md flex flex-col items-center justify-center">
              {!isAllSelected() ? (
                <>
                  <img src="./image/Invoice.png" alt="" className="w-60" />
                  <p className="mt-2 text-center">No Appointment Selected Yet</p>
                </>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-10 gap-4">
                  <div className="col-span-7 p-3">
                    <Calendar 
                      filterData={{hospital, doctor, state, city, country, appointmentType}}
                      onSelectSlot={handleSlotSelect}
                    />
                  </div>
                  <DoctorDetails doctorId={doctor} allDoctors={allDoctors} />
                </div>
              )}
            </div>

            {isAllSelected() && (
              <div className="mt-4">
                <p className="mb-2">Appointment Fee: ₹{appointmentFee}</p>
                <button
                  onClick={handlePayment}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Proceed to Payment
                </button>
              </div>
            )}
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