import { useParams } from "react-router-dom";
import { useGlobal } from "../../hooks/useGlobal";
import { useEffect, useState } from "react";

const MainBill = (modelId) => {
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

  const dataId = id || modelId;

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getBillById(dataId);
        setFormData(bill);
      } catch (error) {
        console.error("Error fetching billing data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-card rounded-lg shadow-lg">
      {/* Header - Adjusted image sizes and spacing */}
      <div className="flex flex-row justify-between items-center mb-2 p-4 sm:ps-6 gap-4">
        <div className="w-1/2 sm:w-[250px]">
          <img src="/img/logo.png" className="w-full h-auto object-contain" alt="Logo" />
        </div>
        <div className="w-1/2 sm:w-[200px]">
          <img src="/img/invoice.png" className="w-full h-auto object-contain" alt="Invoice" />
        </div>
      </div>

      <div className="p-4 sm:p-6">
        {/* Doctor and Bill Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div>
            <p className="font-medium text-lg sm:text-2xl text-[#141414]">
              Dr.{bill.doctorId?.name}
            </p>
            <p className="text-[#818194] text-sm mt-2">{bill.doctorId?.description}</p>
          </div>
          <div className="text-left sm:text-right mt-4 sm:mt-0">
            <p className="text-[#818194] mb-1">
              <strong className="text-[#141414]">Bill No:</strong> {formData.billNumber}
            </p>
            <p className="text-[#818194] mb-1">
              <strong className="text-[#141414]">Bill Date:</strong>{" "}
              {new Date(formData.date).toLocaleDateString()}
            </p>
            <p className="text-[#818194]">
              <strong className="text-[#141414]">Bill Time:</strong> {formData.time}
            </p>
          </div>
        </div>

        {/* Patient Info */}
        <div className="mt-6 bg-[#f6f8fb] p-3 rounded-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-[#818194] text-sm">
                <strong className="text-[#141414] text-base me-2">Name:</strong>
                {`${formData.patientId?.firstName || "N/A"} ${formData.patientId?.lastName || ""}`}
              </p>
              <p className="text-[#818194] text-sm">
                <strong className="text-[#141414] text-base me-2">Gender:</strong>
                {formData.patientId?.gender || "N/A"}
              </p>
              <p className="text-[#818194] text-sm">
                <strong className="text-[#141414] text-base me-2">Age:</strong>
                {formData.patientId?.age || "N/A"}Years
              </p>
              <p className="text-[#818194] text-sm">
                <strong className="text-[#141414] text-base me-2">Address:</strong>
                {formData.patientId?.address || "N/A"}
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-[#818194] text-sm">
                <strong className="text-[#141414] text-base me-2">Disease:</strong>
                {formData?.diseaseName}
              </p>
              <p className="text-[#818194] text-sm">
                <strong className="text-[#141414] text-base me-2">Phone:</strong>
                {formData.patientId?.phone || "+1234567890"}
              </p>
              <p className="text-[#818194] text-sm">
                <strong className="text-[#141414] text-base me-2">Payment:</strong>
                {formData.paymentType}
              </p>
            </div>
          </div>
        </div>

        {/* Items Table */}
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full">
            <thead>
              <tr className="bg-[#0EABEB] text-white">
                <th className="px-2 sm:px-4 py-2 text-sm sm:text-base rounded-tl-lg">
                  Description
                </th>
                <th className="px-2 sm:px-4 py-2 text-sm sm:text-base">Amount</th>
                <th className="px-2 sm:px-4 py-2 text-sm sm:text-base">Qty.</th>
                <th className="px-2 sm:px-4 py-2 text-sm sm:text-base rounded-tr-lg">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-2 sm:px-4 py-2 text-[#4F4F4F] text-sm">{formData.description}</td>
                <td className="px-2 sm:px-4 py-2 text-[#4F4F4F] text-sm">
                  ₹{(formData.amount || 0).toFixed(2)}
                </td>
                <td className="px-2 sm:px-4 py-2 text-[#4F4F4F] text-sm">2</td>
                <td className="px-2 sm:px-4 py-2 text-[#141414] text-sm">
                  ₹{(formData.amount * 1 || 0).toFixed(2)}
                </td>
              </tr>
              {/* Additional rows similar to above */}
            </tbody>
          </table>
        </div>

        {/* Summary Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-6">
          <div className="space-y-2">
            {formData.paymentType == "Insurance" ? (
              <p className="text-[#818194] text-sm font-semibold">
                <strong className="text-[#141414] text-base">Insurance Company:</strong>{" "}
                {formData.insuranceId?.insuranceCompany}
              </p>
            ) : (
              ""
            )}
            {formData.paymentType == "Insurance" ? (
              <p className="text-[#818194] text-sm font-semibold">
                <strong className="text-[#141414] text-base">Insurance Plan:</strong>{" "}
                {formData.insuranceId?.insurancePlan}
              </p>
            ) : (
              ""
            )}
            {formData.paymentType == "Insurance" ? (
              <p className="text-[#0EABEB] text-sm font-semibold">
                <strong className="text-[#141414] text-base">Claim Amount:</strong>{" "}
                {formData.insuranceId?.claimAmount}
              </p>
            ) : (
              ""
            )}
            {formData.paymentType == "Insurance" ? (
              <p className="text-[#0EABEB] text-sm font-semibold">
                <strong className="text-[#141414] text-base">
                  {formData.insuranceId?.claimedAmount}
                </strong>{" "}
                ₹2,500.00
              </p>
            ) : (
              ""
            )}
          </div>

          <div className="space-y-2">
            <p className="text-[#818194] text-sm font-semibold">
              <strong className="text-[#141414] text-base">Amount:</strong> ₹
              {(formData.amount * 1 || 0).toFixed(2)}
            </p>
            <p className="text-[#818194] text-sm font-semibold">
              <strong className="text-[#141414] text-base">
                Discount {formData?.discount || 0} % :{" "}
              </strong>{" "}
              ₹{((formData?.amount * formData?.discount) / 100).toFixed(2)}
            </p>
            <p className="text-[#818194] text-sm font-semibold">
              <strong className="text-[#141414] text-base">Tax {formData?.tax || 0} % : </strong> ₹
              {((formData?.amount * formData?.tax) / 100).toFixed(2)}
            </p>
            <p className="text-[#0EABEB] text-sm font-semibold">
              <strong>Total Amount:</strong> ₹
              {(
                formData?.amount -
                (formData?.amount * formData?.discount) / 100 +
                (formData?.amount * formData?.tax) / 100
              ).toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center flex flex-col sm:flex-row justify-between bg-[#0EABEB] p-3 text-white rounded-b-lg gap-2">
        <p className="text-sm sm:text-base">Call: +90854 22354</p>
        <p className="text-sm sm:text-base">
          Email:{" "}
          <a href="mailto:Hello@gmail.com" className="text-white">
            Hello@gmail.com
          </a>
        </p>
      </footer>
    </div>
  );
};

export default MainBill;
