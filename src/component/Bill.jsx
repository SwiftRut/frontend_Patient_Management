import { useParams } from "react-router-dom";
import "../component/bill.css";
import { useGlobal } from "../hooks/useGlobal";
import { useEffect, useState } from "react";

export default function Bill() {
  const { id } = useParams();
  const { getBillById } = useGlobal();
  
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBillById(id);
        setFormData({
          ...data,
        });
      } catch (error) {
        console.error("Error fetching billing data:", error);
      }
    };
    fetchData();
  }, [id, getBillById]);

  return (
    <>
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
              <h3> Dr. Bharat Patel</h3>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis turpis nulla, finibus sodales erat porta eu.
              </span>
            </div>
            <div>
              <p>
                <strong>Bill No :</strong> <span>{formData.billNumber}</span>
              </p>
              <p>
                <strong>Date :</strong> <span>{new Date(formData.date).toLocaleDateString()}</span>
              </p>
              <p>
                <strong>Bill Time :</strong> <span>{formData.time}</span>
              </p>
            </div>
          </div>
          <div className="invoice__patient flex">
            <div>
              <p>
                Name : <span>{formData.patientId?.name || "N/A"}</span>
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
                Disease Name : <span>{formData.description}</span>
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
                <td className="amount">₹{formData.amount.toFixed(2)}</td>
                <td>1</td>
                <td className="amount">₹{(formData.amount * 1).toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
          <div className="invoice__total">
            <table>
              <tr>
                <td className="label">Amount :</td>
                <td className="value">₹{formData.amount.toFixed(2)}</td>
              </tr>
              <tr>
                <td className="label">Discount {formData.discount}% :</td>
                <td className="value">₹{((formData.amount * formData.discount) / 100).toFixed(2)}</td>
              </tr>
              <tr>
                <td className="label">Tax :</td>
                <td className="value">₹{formData.tax.toFixed(2)}</td>
              </tr>
              <tr>
                <td className="label color">Total :</td>
                <td className="value color">₹{formData.totalAmount.toFixed(2)}</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="footer flex justify-between">
          <p>Call: +00854 22354</p> <p>Email: Hello@Gmail.com</p>
        </div>
      </div>
    </>
  );
}
