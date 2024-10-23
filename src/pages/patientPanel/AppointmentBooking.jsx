import React, { useEffect, useState } from "react";
// import AppointmentTimeSlot from "./AppointmentTimeSlot1";
// import AppointmentTimeSlot1 from "./AppointmentTimeSlot1";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useGlobal } from "../../hooks/useGlobal";
import { useDoctor } from "../../hooks/useDoctor";
import { useAuth } from "../../hooks/useAuth";

const localizer = momentLocalizer(moment);

const AppointmentBooking = () => {
  const { getAllHospitals, allHospitals, getAppointmetnsForPatient } =
    useGlobal();
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

  const [events, setEvents] = useState([
    {
      title: "Skin Treatment",
      start: new Date(2022, 5, 18, 15, 0), // 3:00 PM on June 18th, 2022
      end: new Date(2022, 5, 18, 16, 0), // 4:00 PM
      resource: "Dr. Andrew",
    },
    {
      title: "Hair Treatment",
      start: new Date(2022, 5, 18, 19, 0), // 7:00 PM
      end: new Date(2022, 5, 18, 20, 0), // 8:00 PM
      resource: "Dr. Andrew",
    },
    {
      title: "Brain Tumor",
      start: new Date(2022, 5, 23, 18, 0), // 6:00 PM on June 23rd, 2022
      end: new Date(2022, 5, 23, 19, 0), // 7:00 PM
      resource: "Dr. Andrew",
    },
  ]);

  const handleSelectEvent = (event) => {
    console.log(`Selected event: ${event.title} at ${event.start}`);
  };

  const [appointmentFee, setAppointmentFee] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState(null);

  useEffect(() => {
    getAllDoctors();
    getAllHospitals();
    getAppointmetnsForPatient(user.id);

    // Load Razorpay script
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
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
      console.log(data, "<<<<<<<<<<<<<<<<<<<<<<<<<<<< getting the fees here");
      setAppointmentFee(data.fee);
    } catch (error) {
      console.error("Error fetching appointment fee:", error);
    }
  };

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
        razorpaySignature: paymentResponse.razorpay_signature,
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
        <MdKeyboardArrowDown />
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
          <DoctorDetailItem
            title="Emergency Contact Number"
            value="123-456-7890"
          />
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

  return (
    <div className="p-2 bg-[#f6f8fb]">
      <div className="container ">
        <div
          className="p-2 m-2 border rounded-lg rounded-md bg-white"
          style={{ height: "auto" }}
        >
          <div className="mb-3">
            <div className="w-full px-3 py-2">
              <h1 className="text-xl font-semibold mb-5 md:mb-0">
                Appointment Booking
              </h1>
              <div className="flex flex-col m-2">
                {/* Label and Select Input Container */}
                <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 mb-4 border p-4 rounded-md">
                  <div className="relative border border-gray-300 rounded-md">
                    <label className="absolute left-3 -top-2.5 bg-white px-1 text-sm font-semibold text-gray-800">
                      Specialty
                    </label>
                    <select
                      value={specialty}
                      onChange={(e) => setSpecialty(e.target.value)}
                      className="block w-full px-3 py-3 text-gray-500 bg-white border-0 rounded-md  appearance-none"
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
                      <MdKeyboardArrowDown />
                    </span>
                  </div>

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
                      {
                        value: "children_hospital",
                        label: "Children's Hospital",
                      },
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
                <div className="w-full border py-1 rounded-md flex flex-col items-center justify-center">
                  {/* {!isAllSelected() ? (
                    <>
                      <div className="image">
                        <img src="/image/Invoice.png" alt="No data" />
                        <h1 className="text-center text-[#4f4f4f] font-medium pt-5">
                          No Doctor Found
                        </h1>
                      </div>
                    </>
                  ) : ( */}
                  <div className="w-full grid grid-cols-1 lg:grid-cols-10 gap-4 p-2">
                    {/* Calendar Section */}
                    <div className="w-full col-span-1 lg:col-span-7 p-2 min-w-[230px]">
                      <div className="overflow-x-auto">
                        <Calendar
                          localizer={localizer}
                          events={events}
                          startAccessor="start"
                          endAccessor="end"
                          style={{ minHeight: 400, maxHeight: 600 }}
                          views={["week", "day"]}
                          defaultView="week"
                          popup
                          eventPropGetter={(event) => ({
                            style: {
                              backgroundColor:
                                event.resource === "Dr. Andrew"
                                  ? "#3174ad"
                                  : "#3a87ad",
                            },
                          })}
                          onSelectEvent={handleSelectEvent}
                          className="min-w-[500px]" 
                        />
                      </div>
                    </div>

                    {/* Doctor Details Section */}
                    <div className="w-full col-span-1 lg:col-span-3 p-2 min-w-[230px]">
                      <div className="bg-white rounded-lg shadow-md overflow-hidden border">
                        <div className="p-3 border-b">
                          <h2 className="text-[#030229] text-base sm:text-lg font-bold">
                            Doctor Details
                          </h2>
                        </div>
                        <div className="bg-[#2522a6] p-2 sm:p-3 flex flex-col sm:flex-row items-center rounded-md m-2 sm:m-3">
                          <img
                            src="https://placehold.co/100x100"
                            alt="Doctor's photo"
                            className="rounded-full border-2 border-white mb-2 sm:mb-0 sm:mr-4 w-20 sm:w-[20%]"
                          />
                          <div className="text-white text-center sm:text-left">
                            <h2 className="text-base sm:text-lg font-semibold break-words">
                              Dr. Cristofer Pasquinades
                            </h2>
                            <span className="bg-[#718ebf] inline-flex items-center justify-center w-20 p-1 rounded-full text-sm mt-2">
                              <img
                                src="/image/vuesax.png"
                                alt="Gender icon"
                                className="w-4 h-4"
                              />
                              <h3 className="ms-2">Male</h3>
                            </span>
                          </div>
                        </div>
                        <div className="p-2 bg-[#f6f8fb] m-2 sm:m-3 rounded-md">
                          <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
                            <div className="min-w-[100px]">
                              <h3 className="text-[#A7A7A7] font-normal text-sm sm:text-md">
                                Qualification
                              </h3>
                              <p className="text-[#141414] font-medium text-xs sm:text-sm">
                                MBBS
                              </p>
                            </div>
                            <div className="min-w-[100px]">
                              <h3 className="text-[#A7A7A7] font-normal text-sm sm:text-md">
                                Years Of Experience
                              </h3>
                              <p className="text-[#141414] font-medium text-xs sm:text-sm">
                                6+ Year
                              </p>
                            </div>
                            <div className="min-w-[100px]">
                              <h3 className="text-[#A7A7A7] font-normal text-sm sm:text-md">
                                Specialty Type
                              </h3>
                              <p className="text-[#141414] font-medium text-xs sm:text-sm">
                                Obstetrics
                              </p>
                            </div>
                            <div className="min-w-[100px]">
                              <h3 className="text-[#A7A7A7] font-normal text-sm sm:text-md">
                                Working Time
                              </h3>
                              <p className="text-[#141414] font-medium text-xs sm:text-sm">
                                6 Hour
                              </p>
                            </div>
                            <div className="min-w-[100px]">
                              <h3 className="text-[#A7A7A7] font-normal text-sm sm:text-md">
                                Break Time
                              </h3>
                              <p className="text-[#141414] font-medium text-xs sm:text-sm">
                                1 Hour
                              </p>
                            </div>
                            <div className="min-w-[100px]">
                              <h3 className="text-[#A7A7A7] font-normal text-sm sm:text-md">
                                Emergency Contact Number
                              </h3>
                              <p className="text-[#141414] font-medium text-xs sm:text-sm">
                                48555-20103
                              </p>
                            </div>
                          </div>
                          <div className="mt-4">
                            <h3 className="text-[#A7A7A7] font-normal text-sm sm:text-md">
                              Description
                            </h3>
                            <p className="text-[#141414] font-medium text-xs sm:text-sm">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Lorem ipsum dolor sit amet, consectetur
                              adipiscing elit.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* )} */}
                </div>
              </div>
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

export default AppointmentBooking;
