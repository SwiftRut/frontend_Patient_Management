import { useParams } from "react-router-dom";
// import "./bill.css";
import { useGlobal } from "../../hooks/useGlobal";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Bill() {
  const { id } = useParams();
  const { getBillById, bill } = useGlobal();

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
  console.log(formData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBillById(id);
        setFormData(bill);
      } catch (error) {
        console.error("Error fetching billing data:", error);
        toast.error("Error fetching billing data.");
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div class="">
        <div class="invoice max-w-3xl bg-white rounded-lg shadow-lg overflow-hidden">
          <div class="head flex justify-between pb-5">
            <img src="/img/logo.png" class="w-2/5 h-auto" alt="Logo" />
            <img src="/img/invoice.png" class="w-[45%] h-auto" alt="Logo" />
          </div>
          <div class="wrapper px-5">
            <div class="billing-info flex justify-between mb-5 p-4">
              <div class="info w-3/5">
                <h3 class="text-lg font-bold text-gray-900">
                  Dr.{bill.doctorId?.name}
                </h3>
                <span class="text-base text-gray-500">
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
            <div class="invoice__patient bg-gray-100 p-4 rounded-lg flex justify-between">
              <div>
                <p class="text-sm font-semibold text-[#141414]">
                  Name:{" "}
                  <span className="text-sm text-[#818194] font-semibold ml-3">
                    {formData.patientId?.firstName || "N/A"}{" "}
                    {formData.patientId?.lastName || ""}
                  </span>
                </p>
                <p class="text-sm font-semibold text-[#141414]">
                  Gender:{" "}
                  <span className="text-sm text-[#818194] font-semibold ml-3">
                    {formData.patientId?.gender || "N/A"}
                  </span>
                </p>
                <p class="text-sm font-semibold text-[#141414]">
                  Age:{" "}
                  <span className="text-sm text-[#818194] font-semibold ml-3">
                    {formData.patientId?.age || "N/A"} Years
                  </span>
                </p>
                <p class="text-sm font-semibold text-[#141414]">
                  Address:{" "}
                  <span className="text-sm text-[#818194] font-semibold ml-3">
                    {formData.patientId?.address || "N/A"}
                  </span>
                </p>
              </div>
              <div>
                <p class="text-sm font-semibold text-[#141414]">
                  Disease Name:{" "}
                  <span className="text-sm text-[#818194] font-semibold ml-3">
                    {formData.diseaseName}
                  </span>
                </p>
                <p class="text-sm font-semibold text-[#141414]">
                  Phone Number:{" "}
                  <span className="text-sm text-[#818194] font-semibold ml-3">
                    {formData.patientId?.phone || "+1234567890"}
                  </span>
                </p>
                <p class="text-sm font-semibold text-[#141414]">
                  Payment Type:{" "}
                  <span className="text-sm text-[#818194] font-semibold ml-3">
                    {formData.paymentType}
                  </span>
                </p>
              </div>
            </div>
            <table class="invoice__table w-full my-3 border-collapse">
              <thead>
                <tr class="bg-[#0eabeb] text-white text-xs ">
                  <th class="p-2 rounded-tl-lg">Description</th>
                  <th class="p-2">Amount</th>
                  <th class="p-2">Qty</th>
                  <th class="p-2 rounded-tr-lg">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="p-2 text-[#4F4F4F] font-medium text-sm">
                    {formData.description}
                  </td>
                  <td class="p-2 text-[#4F4F4F] font-medium text-sm text-center">
                    ₹{(formData.amount || 0).toFixed(2)}
                  </td>
                  <td class="p-2 text-[#4F4F4F] font-medium text-sm text-center">
                    1
                  </td>
                  <td class="p-2 text-[#4F4F4F] font-medium text-sm text-center">
                    ₹{(formData.amount * 1 || 0).toFixed(2)}
                  </td>
                </tr>
                <tr>
                  <td class="p-2 text-[#4F4F4F] font-medium text-sm">
                    {formData.description}
                  </td>
                  <td class="p-2 text-[#4F4F4F] font-medium text-sm text-center">
                    ₹{(formData.amount || 0).toFixed(2)}
                  </td>
                  <td class="p-2 text-[#4F4F4F] font-medium text-sm text-center">
                    1
                  </td>
                  <td class="p-2 text-[#4F4F4F] font-medium text-sm text-center">
                    ₹{(formData.amount * 1 || 0).toFixed(2)}
                  </td>
                </tr>
                <tr>
                  <td class="p-2 text-[#4F4F4F] font-medium text-sm">
                    {formData.description}
                  </td>
                  <td class="p-2 text-[#4F4F4F] font-medium text-sm text-center">
                    ₹{(formData.amount || 0).toFixed(2)}
                  </td>
                  <td class="p-2 text-[#4F4F4F] font-medium text-sm text-center">
                    1
                  </td>
                  <td class="p-2 text-[#4F4F4F] font-medium text-sm text-center">
                    ₹{(formData.amount * 1 || 0).toFixed(2)}
                  </td>
                </tr>
                <tr>
                  <td class="p-2 text-[#4F4F4F] font-medium text-sm">
                    {formData.description}
                  </td>
                  <td class="p-2 text-[#4F4F4F] font-medium text-sm text-center">
                    ₹{(formData.amount || 0).toFixed(2)}
                  </td>
                  <td class="p-2 text-[#4F4F4F] font-medium text-sm text-center">
                    1
                  </td>
                  <td class="p-2 text-[#4F4F4F] font-medium text-sm text-center">
                    ₹{(formData.amount * 1 || 0).toFixed(2)}
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="invoice__total text-right font-bold text-lg">
              <table class="w-full max-w-xs ml-auto">
                <tr>
                  <td class="label text-sm font-semibold">Amount:</td>
                  <td class="value text-right text-sm font-semibold">
                    ₹{(formData.amount || 0).toFixed(2)}
                  </td>
                </tr>
                <tr>
                  <td class="label text-sm font-semibold">
                    Discount {formData.discount || 0}%:
                  </td>
                  <td class="value text-right text-sm font-semibold">
                    ₹
                    {(
                      ((formData.amount || 0) * (formData.discount || 0)) /
                      100
                    ).toFixed(2)}
                  </td>
                </tr>
                <tr>
                  <td class="label text-sm font-semibold">Tax:</td>
                  <td class="value text-right text-sm font-semibold">
                    ₹{(formData.tax || 0).toFixed(2)}
                  </td>
                </tr>
                <tr class="text-blue-500">
                  <td class="label text-sm font-semibold">Total:</td>
                  <td class="value text-right text-sm font-semibold">
                    ₹{(formData.totalAmount || 0).toFixed(2)}
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div class="footer bg-[#0eabeb] text-white text-center p-3 text-sm flex justify-between">
            <p>Call: +00854 22354</p>
            <p>Email: Hello@Gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
}
