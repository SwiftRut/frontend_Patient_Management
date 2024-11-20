import { useState, useEffect } from "react";
import {
  TextField,
  Button,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { FieldArray, Formik, Form } from "formik";
import * as Yup from "yup";
import DeleteIcon from "@mui/icons-material/Delete";
import "./doctorPanel.css";
import { usePatient } from "../../hooks/usePatient";
import { useGlobal } from "../../hooks/useGlobal";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const CreatePrescriptionForm = () => {
  const { getPatientById, patientDetails } = usePatient();
  const { createPrescription, prescription, getAppointmentById, userData } =
    useGlobal();
  const [prescriptionData, setPrescriptionData] = useState([]);
  const navigate = useNavigate();
  const [appointmentData, setAppointmentData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const fetchAppointmentData = async () => {
      try {
        const appointment = await getAppointmentById(id);
        setAppointmentData(appointment);
      } catch (error) {
        console.error("Error fetching appointment data:", error);
      }
    };
    fetchAppointmentData();
  }, [id, getAppointmentById]);

  const doseOptions = ["1-1-1", "1-1-0", "1-0-1", "1-0-0", "0-1-1", "0-0-1"];
  const whenToTakeOptions = ["Before Food", "After Food", "With Food"];

  // Initial values now use patientDetails from context
  const initialValues = {
    patientName: appointmentData?.patientId
      ? `${appointmentData.patientId.firstName || ""} ${
          appointmentData.patientId.lastName || ""
        }`
      : "",
    age: appointmentData?.patientId?.age || "",
    gender: appointmentData?.patientId?.gender || "",
    medicines: [
      {
        medicineName: "",
        strength: "",
        dose: "",
        duration: "",
        whenToTake: "",
      },
    ],
    additionalNote: "",
  };

  // Validation schema remains the same
  const validationSchema = Yup.object().shape({
    patientName: Yup.string().required("Required"),
    age: Yup.number()
      .required("Required")
      .positive("Must be positive")
      .integer("Must be an integer"),
    gender: Yup.string().required("Required"),
    medicines: Yup.array().of(
      Yup.object().shape({
        medicineName: Yup.string().required("Required"),
        strength: Yup.string().required("Required"),
        dose: Yup.string().required("Required"),
        duration: Yup.string().required("Required"),
        whenToTake: Yup.string().required("Required"),
      })
    ),
    additionalNote: Yup.string(),
  });

  const handleSubmit = (values) => {
    const prescriptionPayload = {
      patientId: appointmentData.patientId._id,
      medicines: values.medicines,
      additionalNote: values.additionalNote,
      appointmentId: id,
      date: new Date().toISOString(),
    };
    createPrescription(prescriptionPayload, id);
    setPrescriptionData(values);
    navigate("/doctor/managePrescriptionTools");
  };

  // Update form values when patientDetails changes
  useEffect(() => {
    if (patientDetails) {
      setPrescriptionData({
        ...prescriptionData,
        patientName: patientDetails.name,
        age: patientDetails.age,
        gender: patientDetails.gender,
      });
    }
  }, [patientDetails]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      enableReinitialize={true}
    >
      {({ values, handleChange, handleBlur, errors, touched }) => (
        <div>
          <Form className="h-screen overflow-y-hidden">
            <div className="flex justify-between p-8 bg-gray-100 shadow-lg rounded-lg">
              {/* Left Side - Form */}
              <div className="w-[59%] bg-white p-4 rounded-lg overflow-auto">
                <h2 className="text-2xl font-bold mb-4">Create Prescription</h2>
                <div className="flex justify-between mb-6">
                  <div className="input-box w-1/3">
                    <div className="label">Patient Name</div>
                    <input
                      type="text"
                      name="patientName"
                      value={values.patientName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`border p-2 rounded w-full ${
                        errors.patientName && touched.patientName
                          ? "border-red-500"
                          : ""
                      }`}
                      disabled
                    />
                    {errors.patientName && touched.patientName && (
                      <p className="text-red-500 text-sm">
                        {errors.patientName}
                      </p>
                    )}
                  </div>
                  <div className="input-box w-1/3">
                    <div className="label">Age</div>
                    <input
                      name="age"
                      type="number"
                      value={values.age}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`border p-2 rounded w-full ${
                        errors.age && touched.age ? "border-red-500" : ""
                      }`}
                      disabled
                    />
                    {errors.age && touched.age && (
                      <p className="text-red-500 text-sm">{errors.age}</p>
                    )}
                  </div>
                  <div className="input-box w-1/3">
                    <div className="label">Gender</div>
                    <input
                      name="gender"
                      value={values.gender}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`border p-2 rounded w-full ${
                        errors.gender && touched.gender ? "border-red-500" : ""
                      }`}
                      disabled
                    />
                    {errors.gender && touched.gender && (
                      <p className="text-red-500 text-sm">{errors.gender}</p>
                    )}
                  </div>
                </div>

                {/* Medicines Table */}
                <h2 className="text-xl font-bold mb-4">Drug Prescription</h2>
                <FieldArray name="medicines">
                  {({ push, remove }) => (
                    <>
                      {values?.medicines?.map((medicine, index) => (
                        <div
                          key={index}
                          className="drug grid grid-cols-6 gap-4 mb-4"
                        >
                          <TextField
                            label="Medicine Name"
                            name={`medicines[${index}].medicineName`}
                            value={medicine?.medicineName || ""}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`border p-2 rounded w-full ${
                              errors.medicines?.[index]?.medicineName &&
                              touched.medicines?.[index]?.medicineName
                                ? "border-red-500"
                                : ""
                            }`}
                          />
                          <TextField
                            label="Strength"
                            name={`medicines[${index}].strength`}
                            value={medicine?.strength || ""}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`border p-2 rounded w-full ${
                              errors.medicines?.[index]?.strength &&
                              touched.medicines?.[index]?.strength
                                ? "border-red-500"
                                : ""
                            }`}
                          />
                          <FormControl fullWidth className="select">
                            <InputLabel id={`dose-label-${index}`}>
                              Dose
                            </InputLabel>
                            <Select
                              labelId={`dose-label-${index}`}
                              name={`medicines[${index}].dose`}
                              value={medicine?.dose || ""}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              label="Dose"
                            >
                              {doseOptions.map((option) => (
                                <MenuItem key={option} value={option}>
                                  {option}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                          <TextField
                            label="Duration"
                            name={`medicines[${index}].duration`}
                            value={medicine?.duration || ""}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`border p-2 rounded w-full ${
                              errors.medicines?.[index]?.duration &&
                              touched.medicines?.[index]?.duration
                                ? "border-red-500"
                                : ""
                            }`}
                          />
                          <FormControl fullWidth className="select">
                            <InputLabel id={`whenToTake-label-${index}`}>
                              When to Take
                            </InputLabel>
                            <Select
                              labelId={`whenToTake-label-${index}`}
                              name={`medicines[${index}].whenToTake`}
                              value={medicine?.whenToTake || ""}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              label="When to Take"
                            >
                              {whenToTakeOptions.map((option) => (
                                <MenuItem key={option} value={option}>
                                  {option}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                          <IconButton
                            onClick={() => remove(index)}
                            className="text-red-600"
                          >
                            <DeleteIcon />
                          </IconButton>
                        </div>
                      ))}

                      <div className="add-medicine">
                        <Button
                          variant="contained"
                          onClick={() =>
                            push({
                              medicineName: "",
                              strength: "",
                              dose: "",
                              duration: "",
                              whenToTake: "",
                            })
                          }
                          className="mt-4"
                        >
                          Add Medicine
                        </Button>
                      </div>
                    </>
                  )}
                </FieldArray>

                {/* Additional Notes */}
                <div className="addition-note">
                  <TextField
                    label="Additional Note"
                    name="additionalNote"
                    value={values.additionalNote}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="border p-2 rounded w-full mt-6"
                    multiline
                    rows={4}
                  />
                </div>
                <div className="save-btn">
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className="mt-6"
                  >
                    Submit
                  </Button>
                </div>
              </div>

              {/* Right Side - Prescription Preview */}
              <div className="Prescription-bill w-[39%] bg-white p-4 rounded-lg overflow-auto">
                <div className="p-4 rounded-lg bg-[#F6F8FB]">
                  <div className="head flex justify-between align-center">
                    <div className="logo">
                      <img src="/image/bill-logo.png" alt="" />
                    </div>
                    <div className="name">
                      <p>Dr. {userData.name}</p>
                      <span>Obstetrics and Gynecology</span>
                    </div>
                  </div>
                  <div className="dr-details">
                    <div className="flex justify-between align-center">
                      <p>
                        Hospital Name: <span>Medical Center</span>
                      </p>
                      <p>
                        Prescription Date:{" "}
                        <span>{new Date().toLocaleDateString()}</span>
                      </p>
                    </div>
                    <div className="flex justify-between align-center">
                      <p>
                        Patient Name: <span>{values.patientName}</span>
                      </p>
                      <p>
                        Age: <span>{values.age}</span>
                      </p>
                    </div>
                    <div>
                      <p>
                        Gender: <span>{values.gender}</span>
                      </p>
                      <p className="add">
                        Address:{" "}
                        <span>
                          B-105 Virat Bungalows, Punagam, Motavaracha, Jamnagar.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <table className="w-full rounded-lg mt-4">
                    <thead className="bg-[#F6F8FB]">
                      <tr>
                        <th className="border-b-[1px] p-2">Medicine Name</th>
                        <th className="border-b-[1px] p-2">Strength</th>
                        <th className="border-b-[1px] p-2">Dose</th>
                        <th className="border-b-[1px] p-2">Duration</th>
                        <th className="border-b-[1px] p-2">When to Take</th>
                      </tr>
                    </thead>
                    <tbody>
                      {values?.medicines?.map((medicine, index) => (
                        <tr key={index}>
                          <td className="border-b-[1px] p-2">
                            {medicine?.medicineName}
                          </td>
                          <td className="border-b-[1px] text-center p-2">
                            {medicine?.strength}
                          </td>
                          <td className="border-b-[1px] text-center p-2">
                            {medicine?.dose}
                          </td>
                          <td className="border-b-[1px] text-center p-2">
                            {medicine?.duration}
                          </td>
                          <td className="border-b-[1px] text-center p-2">
                            {medicine?.whenToTake}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="note">
                    <h3 className="mt-4 font-bold">Additional Note:</h3>
                    <p>{values.additionalNote}</p>
                  </div>
                  <div className="condition flex justify-between align-center">
                    <div className="sign">
                      <span>Doctor Signature</span>
                    </div>
                    <div className="btn">
                      <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default CreatePrescriptionForm;
