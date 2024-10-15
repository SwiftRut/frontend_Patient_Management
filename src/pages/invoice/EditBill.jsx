import { useEffect, useState } from "react";
import "./invoice.css";
import InputField from "./InputField";
import { formDataObject, HospitalBillFields, PatientBillFields } from "./Contants";
import { useAuth } from "../../hooks/useAuth";
import { useParams } from "react-router-dom";
import { useGlobal } from "../../hooks/useGlobal";

const EditBill = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const { updateBill, bill, getBillById } = useGlobal();
  const [formData, setFormData] = useState(formDataObject);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData, "<<<<<<<<<<<<<< formdata");
    try {
      await updateBill(formData, bill.id);
      // navigate("/");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBillById(id);
        console.log(data, "data");
        setFormData({
          ...data,
        });
      } catch (error) {
        console.error("Error fetching admin profile:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="bill-insurance-section">
        <div className="row">
          <div className="main">
            <div className="title">
              <p>Create Bill</p>
            </div>

            <div className="patient-details">
              <div className="content">
                <div className="details flex">
                  <div className="form-box">
                    <form onSubmit={handleSubmit} className="flex">
                      {HospitalBillFields.map((field, index) => (
                        <InputField
                          key={index}
                          {...field}
                          value={formData[field.name]}
                          onChange={handleChange}
                        />
                      ))}
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="insurance-details">
              <div className="content">
                <div className="head">
                  <p>Insurance Details</p>
                </div>

                <div className="details flex">
                  <div className="form-box">
                    <form className="flex">
                      {PatientBillFields.map((field, index) => (
                        <InputField
                          key={index}
                          {...field}
                          value={formData[field.name]}
                          onChange={handleChange}
                        />
                      ))}
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="save-btn flex">
              <button type="submit" form="create-bill-form" onClick={handleSubmit}>
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
