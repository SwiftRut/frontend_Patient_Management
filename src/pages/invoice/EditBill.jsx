import { useEffect, useState } from "react";
import "./invoice.css";
import FormInput from '../../component/common/FormInput';
import { formDataObject, PatientBillFields } from './Contants';
import { useNavigate, useParams } from 'react-router-dom';
import { useGlobal } from '../../hooks/useGlobal';
import { useDoctor } from '../../hooks/useDoctor';
import toast from "react-hot-toast";

const EditBill = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { updateBill, getBillById } = useGlobal();
  const { getAllDoctors, allDoctors } = useDoctor();
  const [formData, setFormData] = useState(formDataObject);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getBillById(id);
        console.log("Fetched data:", data);
        if (data) {
          setFormData({
            billNumber: data.billNumber,
            patientName: `${data.patientId.firstName} ${data.patientId.lastName}`,
            phone: data.phone,
            gender: data.gender,
            age: data.age,
            doctorId: data.doctorId._id,
            doctorName: data.doctorId.name,
            diseaseName: data.diseaseName,
            description: data.description,
            paymentType: data.paymentType,
            billDate: data.date.split('T')[0],
            billTime: data.time,
            discount: data.discount,
            tax: data.tax,
            amount: data.amount,
            totalAmount: data.totalAmount,
            address: data.address,
          });
        } else {
          setError("No data returned from server");
        }
        await getAllDoctors();
        toast.success("Bill updated successfully.");
      } catch (error) {
        console.error("Error fetching bill data:", error);
        setError("Error fetching bill data. Please try again.");
        toast.error("Error fetching bill data.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateBill(formData, id);
      navigate("/");
      toast.success("Bill updated successfully.");
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("Error updating bill. Please try again.");
      toast.error("Error updating bill. Please try again.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const HospitalBillFields = [  
    { label: "Patient Name", name: "patientName", type: "text", disabled: true, readOnly: true },
    { label: "Phone Number", name: "phone", type: "text",disabled: true },
    { label: "Gender", name: "gender", type: "select",disabled: true, options: [
      { label: "Select Gender", value: "" },
      { label: "Male", value: "male" },
      { label: "Female", value: "female" },
      { label: "Other", value: "other" }
    ]},
    { label: "Age", name: "age", type: "text",disabled: true },
    {
      label: "Doctor Name",
      name: "doctorId",
      type: "select",
      options: [
        { label: "Select Doctor", value: "" },
        ...allDoctors.map((doctor) => ({ label: doctor.name, value: doctor._id }))
      ],
    },
    { label: "Disease Name", name: "diseaseName", type: "text"},
    { label: "Description", name: "description", type: "text" },
    { label: "Payment Type", name: "paymentType", type: "select", options: [
      { label: "Select Payment Type", value: "" },
      { label: "Cash", value: "Cash" },
      { label: "Insurance", value: "Insurance" },
      { label: "Credit Card", value: "Credit Card" }
    ]},
    { label: "Bill Date", name: "billDate", type: "date" },
    { label: "Bill Time", name: "billTime", type: "text" },
    { label: "Bill Number", name: "billNumber", type: "text",disabled: true },
    { label: "Discount (%)", name: "discount", type: "text" },
    { label: "Tax", name: "tax", type: "text" },
    { label: "Amount", name: "amount", type: "text" },
    { label: "Total Amount", name: "totalAmount", type: "text" },
    { label: "Address", name: "address", type: "text" },
  ];

  return (
    <div>
      <div className="bill-insurance-section">
        <div className="row">
          <div className="main">
            <div className="title">
              <p>Edit Bill</p>
            </div>

            <div className="patient-details">
              <div className="content">
                <div className="details flex">
                  <div className="form-box">
                    <form onSubmit={handleSubmit} className="flex" id="edit-bill-form">
                      {HospitalBillFields.map((field) => (
                        <FormInput
                          key={field.name}
                          label={field.label}
                          type={field.type}
                          value={formData[field.name] || ''}
                          onChange={(e) => handleChange({
                            target: {
                              name: field.name,
                              value: e.target.value
                            }
                          })}
                          placeholder={field.placeholder}
                          disabled={field.disabled}
                          readOnly={field.readOnly || false}
                        />
                      ))}
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {formData.paymentType === "Insurance" && (
              <div className="insurance-details">
                <div className="content">
                  <div className="head">
                    <p>Insurance Details</p>
                  </div>

                  <div className="details flex">
                    <div className="form-box">
                      <form className="flex">
                        {PatientBillFields.map((field, index) => (
                          <FormInput
                            key={index}
                            {...field}
                            value={formData[field.name] || ''}
                            onChange={handleChange}
                          />
                        ))}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="save-btn flex">
              <button type="submit" form="edit-bill-form">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBill;
