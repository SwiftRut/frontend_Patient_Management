import { useParams } from "react-router-dom";
import "../component/bill.css";
import { useGlobal } from "../hooks/useGlobal";
import { useEffect } from "react";
export default function Bill() {
  const { id } = useParams();
  const { getBillById } = useGlobal();
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
    <>
      <div className="invoice">
        <div className="head">
          <img src="/img/logo.png" width="200px" />
          <div className="title">
            <img src="/img/invoice.png" />
          </div>
        </div>
        <div className="wrapper">
          <div className="billing-info">
            <div className="info">
              <h3> Dr. Bharat Patel</h3>
              <span>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis turpis nulla,
                finibus sodales erat porta eu.
              </span>
            </div>
            <div>
              <p>
                <strong>Bill No :</strong> <span>1234</span>
              </p>
              <p>
                <strong>Date :</strong> <span>20 June, 2020</span>
              </p>
              <p>
                <strong>Bill Time :</strong> <span>10:45 PM</span>
              </p>
            </div>
          </div>
          <div className="invoice__patient flex">
            <div>
              <p>
                Name : <span>Miracle Kenter</span>
              </p>
              <p>
                Gender : <span>Male</span>
              </p>
              <p>
                Age : <span>36 Years</span>
              </p>
              <p>
                Address : <span>B-105 Virat Bungalows Punagam Motavaracha Jamnagar.</span>
              </p>
            </div>
            <div>
              <p>
                Disease Name : <span>Stomach Ach</span>{" "}
              </p>
              <p>
                Phone Number : <span> +1234567890</span>
              </p>
              <p>
                Payment Type : <span> Online</span>
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
                <td>Neuromuscular blockers</td>
                <td className="amount">₹12000.00</td>
                <td>1</td>
                <td className="amount">₹2400.00</td>
              </tr>
              <tr>
                <td>Neuromuscular blockers</td>
                <td className="amount">₹ 800.00</td>
                <td>1</td>
                <td className="amount">₹1600.00</td>
              </tr>
              <tr>
                <td>Leucovorin with high dose methotrexate (HDMTX)</td>
                <td className="amount">₹ 1000.00</td>
                <td>1</td>
                <td className="amount">₹2000.00</td>
              </tr>
              <tr>
                <td>Hydroxyurea for sickle cell disease</td>
                <td className="amount">₹ 20.00</td>
                <td>1</td>
                <td className="amount">₹ 40.00</td>
              </tr>
            </tbody>
          </table>
          <div className="invoice__total">
            <table>
              <tr>
                <td className="label">Amount :</td>
                <td className="value">₹ 25,840.00</td>
              </tr>
              <tr>
                <td className="label">Discount 5% :</td>
                <td className="value">₹ 1,292.00</td>
              </tr>
              <tr>
                <td className="label">Tax :</td>
                <td className="value">₹ 120.00</td>
              </tr>
              <tr>
                <td className="label color">Total :</td>
                <td className="value color">₹ 24,668.00</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="footer flex justify-between">
          <p>Call: +00854 22354 </p> <p>Email: Hello@Gmail.com</p>
        </div>
      </div>
    </>
  );
}
