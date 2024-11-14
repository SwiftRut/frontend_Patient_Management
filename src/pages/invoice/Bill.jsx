import { useParams } from "react-router-dom";
import "./bill.css";
import { useGlobal } from "../../hooks/useGlobal";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Bill() {
  const { id } = useParams();
  const { getBillById , bill} = useGlobal();

  const [formData, setFormData] = useState({
    billNumber: "",
    description: "",
    paymentType: "",
    date: "",
    time: "",
    amount: 0,
    discount: 0,
    tax: 0,
    totalAmount: 0,
    status: "",
    patientId: "",
    doctorId: "",
    insuranceId: "",
  });
  console.log(formData)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBillById(id);
        setFormData(bill)
      } catch (error) {
        console.error("Error fetching billing data:", error);
        toast.error("Error fetching billing data.");
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="flex justify-center items-center h-full">
        <div className="invoice">
          <div className="head">
            <img src="/img/logo.png" width="200px" alt="Logo" />
            <div className="title">
              <img src="/img/invoice.png" alt="Invoice" />
            </div>
          </div>
          <div className="wrapper">
            <div className="billing-info">
              <div className="info">
                <h3> Dr.{bill.doctorId?.name}</h3>
                <span>
                 {bill.doctorId?.description}
                </span>
              </div>
              <div>
                <p>
                  <strong>Bill No :</strong> <span>{formData.billNumber}</span>
                </p>
                <p>
                  <strong>Date :</strong>{" "}
                  <span>{new Date(formData.date).toLocaleDateString()}</span>
                </p>
                <p>
                  <strong>Bill Time :</strong> <span>{formData.time}</span>
                </p>
              </div>
            </div>
            <div className="invoice__patient flex">
              <div>
                <p>
                Name : <span>{`${formData.patientId?.firstName || "N/A"} ${formData.patientId?.lastName || ""}`}</span>
                </p>
                <p>
                  Gender : <span>{formData.patientId?.gender || "N/A"}</span>
                </p>
                <p>
                  Age : <span>{formData.patientId?.age || "N/A"} Years</span>
                </p>
                <p>
                  Address : <span>{formData.patientId?.address || "N/A"}</span>
                </p>
              </div>
              <div>
                <p>
                  Disease Name : <span>{formData.diseaseName}</span>
                </p>
                <p>
                  Phone Number : <span>{formData.patientId?.phone || "+1234567890"}</span>
                </p>
                <p>
                  Payment Type : <span>{formData.paymentType}</span>
                </p>
              </div>
            </div>
            <table className="invoice__table">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Qty</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{formData.description}</td>
                  <td className="amount">₹{(formData.amount || 0).toFixed(2)}</td>
                  <td>1</td>
                  <td className="amount">₹{(formData.amount * 1 || 0).toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
            <div className="invoice__total">
              <table>
                <tr>
                  <td className="label">Amount :</td>
                  <td className="value">₹{(formData.amount || 0).toFixed(2)}</td>
                </tr>
                <tr>
                  <td className="label">Discount {formData.discount || 0}% :</td>
                  <td className="value">
                    ₹{(((formData.amount || 0) * (formData.discount || 0)) / 100).toFixed(2)}
                  </td>
                </tr>
                <tr>
                  <td className="label">Tax :</td>
                  <td className="value">₹{(formData.tax || 0).toFixed(2)}</td>
                </tr>
                <tr>
                  <td className="label color">Total :</td>
                  <td className="value color">₹{(formData.totalAmount || 0).toFixed(2)}</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="footer flex justify-between">
            <p>Call: +00854 22354</p> <p>Email: Hello@Gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
}
