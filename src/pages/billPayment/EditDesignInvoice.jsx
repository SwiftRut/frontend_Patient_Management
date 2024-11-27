import { useState } from "react";
import Bill2 from "../invoice/Bill2";
import Bill3 from "../invoice/Bill3";
import Bill from "../invoice/Bill";

export default function EditDesignInvoice() {
  const [selectedInvoice, setSelectedInvoice] = useState(localStorage.getItem('adminPrefrence')||"Bill");

  const handleSelectInvoice = (invoiceName) => {
    setSelectedInvoice(invoiceName);
    console.log(`Selected invoice: ${invoiceName}`);
    localStorage.setItem("adminPrefrence", invoiceName);
  };

  return (
    <div className="bg-[#F6F8FB] p-3 h-[93%]">
      <div className="bill-box bg-white p-4 h-[100%] rounded-lg m-2">
        <div className="title mb-5">
          <h1 className="text-2xl font-bold text-gray-900">
            Select Invoice Theme
          </h1>
        </div>
        <div className="theme-selector flex">
          <div className="invoice-samples flex justify-between">
            <div
              className={`invoice w-[30%] bg-transparent relative cursor-pointer ${
                selectedInvoice === "Bill" ? "border-2 border-blue-500" : ""
              }`}
              onClick={() => handleSelectInvoice("Bill")}
            >
              <Bill />
              {selectedInvoice === "Bill" && (
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              )}
            </div>
            <div
              className={`invoice w-2/6 bg-transparent relative cursor-pointer ${
                selectedInvoice === "Bill3" ? "border-2 border-blue-500" : ""
              }`}
              onClick={() => handleSelectInvoice("Bill3")}
            >
              <Bill3 />
              {selectedInvoice === "Bill3" && (
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              )}
            </div>
            <div
              className={`invoice w-2/6 bg-transparent relative cursor-pointer ${
                selectedInvoice === "Bill2" ? "border-2 border-blue-500" : ""
              }`}
              onClick={() => handleSelectInvoice("Bill2")}
            >
              <Bill2 />
              {selectedInvoice === "Bill2" && (
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
