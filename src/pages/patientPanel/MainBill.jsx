import React from "react";

const MainBill = () => {
  return (
    // <div className="max-w-3xl mx-auto bg-white dark:bg-card rounded-lg shadow-lg">
    //   <div className="flex justify-between mb-2 ps-6">
    //     <img src="/img/logo.png" width="250px" />
    //     <div className="title">
    //       <img src="/img/invoice.png" />
    //     </div>
    //   </div>
    //   <div className="p-6">
    //     <div className="grid grid-cols-2 gap-4 mt-4">
    //       <div>
    //         <p className="font-medium text-[24px] text-[#141414]">
    //           Dr. Bharat Patel
    //         </p>
    //         <p className="text-[#818194] text-sm">
    //           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
    //           mattis turpis nulla, finibus sodales erat porta eu.
    //         </p>
    //       </div>
    //       <div className="text-right">
    //         <p className="text-[#818194]">
    //           <strong className="text-[#141414]">Bill No:</strong> 1234
    //         </p>
    //         <p className="text-[#818194]">
    //           <strong className="text-[#141414]">Bill Date:</strong> 20 June,
    //           2020
    //         </p>
    //         <p className="text-[#818194]">
    //           <strong className="text-[#141414]">Bill Time:</strong> 10:45 PM
    //         </p>
    //       </div>
    //     </div>

    //     <div className="mt-6 bg-[#f6f8fb] flex p-3 rounded-md">
    //       <div className="">
    //         <p className="text-[#818194] text-sm">
    //           <strong className="text-[#141414] text-base me-2">Name :</strong>{" "}
    //           Miracle Kenter
    //         </p>
    //         <p className="text-[#818194] text-sm">
    //           <strong className="text-[#141414] text-base me-2">
    //             Gender :
    //           </strong>{" "}
    //           Male
    //         </p>
    //         <p className="text-[#818194] text-sm">
    //           <strong className="text-[#141414] text-base me-2">Age :</strong>{" "}
    //           36 Years
    //         </p>
    //         <p className="text-[#818194] text-sm">
    //           <strong className="text-[#141414] text-base me-2">
    //             Address :
    //           </strong>{" "}
    //           B-105 Virat Bungalows Punagam Motavaracha Jamnagar.
    //         </p>
    //       </div>
    //       <div>
    //         <p className="text-[#818194] text-sm">
    //           <strong className="text-[#141414] text-base me-2">
    //             Disease Name :
    //           </strong>{" "}
    //           Stomach Ach
    //         </p>
    //         <p className="text-[#818194] text-sm">
    //           <strong className="text-[#141414] text-base me-2">
    //             Phone Number :
    //           </strong>{" "}
    //           9957 96557
    //         </p>
    //         <p className="text-[#818194] text-sm">
    //           <strong className="text-[#141414] text-base me-2">
    //             Payment Type :
    //           </strong>{" "}
    //           Insurance
    //         </p>
    //       </div>
    //     </div>

    //     <table className="min-w-full mt-4">
    //       <thead className="">
    //         <tr className="bg-[#0EABEB] text-white">
    //           <th className="px-4 py-2 text-base rounded-tl-lg">Description</th>
    //           <th className="px-4 py-2 text-base">Amount</th>
    //           <th className="px-4 py-2 text-base">Qty.</th>
    //           <th className="px-4 py-2 text-base rounded-tr-lg">Total</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         <tr>
    //           <td className=" px-4 py-2 text-[#4F4F4F]">
    //             Neuromuscular blockers
    //           </td>
    //           <td className=" px-4 py-2 text-[#4F4F4F]">₹ 12000.00</td>
    //           <td className=" px-4 py-2 text-[#4F4F4F]">2</td>
    //           <td className=" px-4 py-2 text-[#141414]">₹ 24000.00</td>
    //         </tr>
    //         <tr>
    //           <td className="px-4 py-2 text-[#4F4F4F]">
    //             Neuromuscular blockers
    //           </td>
    //           <td className="px-4 py-2 text-[#4F4F4F]">₹ 800.00</td>
    //           <td className="px-4 py-2 text-[#4F4F4F]">2</td>
    //           <td className="px-4 py-2 text-[#141414]">₹ 1600.00</td>
    //         </tr>
    //         <tr>
    //           <td className="px-4 py-2 text-[#4F4F4F]">
    //             Leucovorin with high dose methotrexate (HDMTX)
    //           </td>
    //           <td className="px-4 py-2 text-[#4F4F4F]">₹ 1000.00</td>
    //           <td className="px-4 py-2 text-[#4F4F4F]">2</td>
    //           <td className="px-4 py-2 text-[#141414]">₹ 2000.00</td>
    //         </tr>
    //         <tr>
    //           <td className="px-4 py-2 text-[#4F4F4F]">
    //             Hydroxyurea for sickle cell disease
    //           </td>
    //           <td className="px-4 py-2 text-[#4F4F4F]">₹ 20.00</td>
    //           <td className="px-4 py-2 text-[#4F4F4F]">2</td>
    //           <td className="px-4 py-2 text-[#141414]">₹ 40.00</td>
    //         </tr>
    //       </tbody>
    //     </table>

    //     <div class="flex justify-between my-3">
    //       <div class="mt-4">
    //         <p className="text-[#818194] text-sm font-semibold">
    //           <strong className="text-[#141414] text-base font-semibold">
    //             Insurance Company:
    //           </strong>{" "}
    //           HDFC Life Insurance
    //         </p>
    //         <p className="text-[#818194] text-sm font-semibold">
    //           <strong className="text-[#141414] text-base font-semibold">
    //             Insurance Plan:
    //           </strong>{" "}
    //           Health insurance
    //         </p>
    //         <p className="text-[#0EABEB] text-sm font-semibold">
    //           <strong className="text-[#141414] text-base font-semibold">
    //             Claim Amount:
    //           </strong>{" "}
    //           ₹ 2000.00
    //         </p>
    //         <p className="text-[#0EABEB] text-sm font-semibold">
    //           <strong className="text-[#141414] text-base font-semibold">
    //             Claimed Amount:
    //           </strong>{" "}
    //           ₹ 2500.00
    //         </p>
    //       </div>

    //       <div className="mt-4">
    //         <p className="text-[#818194] text-sm font-semibold">
    //           <strong className="text-[#141414] text-base font-semibold">
    //             Amount:
    //           </strong>{" "}
    //           ₹ 25,840.00
    //         </p>
    //         <p className="text-[#818194] text-sm font-semibold">
    //           <strong className="text-[#141414] text-base font-semibold">
    //             Discount 5%:
    //           </strong>{" "}
    //           ₹ 1,292.00
    //         </p>
    //         <p className="text-[#818194] text-sm font-semibold">
    //           <strong className="text-[#141414] text-base font-semibold">
    //             Tax:
    //           </strong>{" "}
    //           ₹ 120.00
    //         </p>
    //         <p className="text-[#0EABEB] text-sm font-semibold">
    //           Total Amount: ₹ 24,668.00
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    //   <footer className="mt-6 text-center flex justify-between bg-[#0EABEB] p-3 text-white rounded-b-lg">
    //     <p>Call: +90854 22354</p>
    //     <p>
    //       Email:{" "}
    //       <a href="mailto:Hello@gmail.com" class="text-white">
    //         Hello@gmail.com
    //       </a>
    //     </p>
    //   </footer>
    // </div>
    <div className="max-w-3xl mx-auto bg-white dark:bg-card rounded-lg shadow-lg">
      {/* Header - Adjusted image sizes and spacing */}
      <div className="flex flex-row justify-between items-center mb-2 p-4 sm:ps-6 gap-4">
        <div className="w-1/2 sm:w-[250px]">
          <img 
            src="/img/logo.png" 
            className="w-full h-auto object-contain" 
            alt="Logo" 
          />
        </div>
        <div className="w-1/2 sm:w-[200px]">
          <img 
            src="/img/invoice.png" 
            className="w-full h-auto object-contain" 
            alt="Invoice" 
          />
        </div>
      </div>

      <div className="p-4 sm:p-6">
        {/* Doctor and Bill Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div>
            <p className="font-medium text-lg sm:text-2xl text-[#141414]">
              Dr. Bharat Patel
            </p>
            <p className="text-[#818194] text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              mattis turpis nulla, finibus sodales erat porta eu.
            </p>
          </div>
          <div className="text-left sm:text-right mt-4 sm:mt-0">
            <p className="text-[#818194] mb-1">
              <strong className="text-[#141414]">Bill No:</strong> 1234
            </p>
            <p className="text-[#818194] mb-1">
              <strong className="text-[#141414]">Bill Date:</strong> 20 June,
              2020
            </p>
            <p className="text-[#818194]">
              <strong className="text-[#141414]">Bill Time:</strong> 10:45 PM
            </p>
          </div>
        </div>

        {/* Patient Info */}
        <div className="mt-6 bg-[#f6f8fb] p-3 rounded-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-[#818194] text-sm">
                <strong className="text-[#141414] text-base me-2">Name:</strong>
                Miracle Kenter
              </p>
              <p className="text-[#818194] text-sm">
                <strong className="text-[#141414] text-base me-2">
                  Gender:
                </strong>
                Male
              </p>
              <p className="text-[#818194] text-sm">
                <strong className="text-[#141414] text-base me-2">Age:</strong>
                36 Years
              </p>
              <p className="text-[#818194] text-sm">
                <strong className="text-[#141414] text-base me-2">
                  Address:
                </strong>
                B-105 Virat Bungalows Punagam Motavaracha Jamnagar.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-[#818194] text-sm">
                <strong className="text-[#141414] text-base me-2">
                  Disease:
                </strong>
                Stomach Ache
              </p>
              <p className="text-[#818194] text-sm">
                <strong className="text-[#141414] text-base me-2">
                  Phone:
                </strong>
                9957 96557
              </p>
              <p className="text-[#818194] text-sm">
                <strong className="text-[#141414] text-base me-2">
                  Payment:
                </strong>
                Insurance
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
                <th className="px-2 sm:px-4 py-2 text-sm sm:text-base">
                  Amount
                </th>
                <th className="px-2 sm:px-4 py-2 text-sm sm:text-base">Qty.</th>
                <th className="px-2 sm:px-4 py-2 text-sm sm:text-base rounded-tr-lg">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-2 sm:px-4 py-2 text-[#4F4F4F] text-sm">
                  Neuromuscular blockers
                </td>
                <td className="px-2 sm:px-4 py-2 text-[#4F4F4F] text-sm">
                  ₹12,000.00
                </td>
                <td className="px-2 sm:px-4 py-2 text-[#4F4F4F] text-sm">2</td>
                <td className="px-2 sm:px-4 py-2 text-[#141414] text-sm">
                  ₹24,000.00
                </td>
              </tr>
              {/* Additional rows similar to above */}
            </tbody>
          </table>
        </div>

        {/* Summary Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-6">
          <div className="space-y-2">
            <p className="text-[#818194] text-sm font-semibold">
              <strong className="text-[#141414] text-base">
                Insurance Company:
              </strong>{" "}
              HDFC Life Insurance
            </p>
            <p className="text-[#818194] text-sm font-semibold">
              <strong className="text-[#141414] text-base">
                Insurance Plan:
              </strong>{" "}
              Health insurance
            </p>
            <p className="text-[#0EABEB] text-sm font-semibold">
              <strong className="text-[#141414] text-base">
                Claim Amount:
              </strong>{" "}
              ₹2,000.00
            </p>
            <p className="text-[#0EABEB] text-sm font-semibold">
              <strong className="text-[#141414] text-base">
                Claimed Amount:
              </strong>{" "}
              ₹2,500.00
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-[#818194] text-sm font-semibold">
              <strong className="text-[#141414] text-base">Amount:</strong>{" "}
              ₹25,840.00
            </p>
            <p className="text-[#818194] text-sm font-semibold">
              <strong className="text-[#141414] text-base">Discount 5%:</strong>{" "}
              ₹1,292.00
            </p>
            <p className="text-[#818194] text-sm font-semibold">
              <strong className="text-[#141414] text-base">Tax:</strong> ₹120.00
            </p>
            <p className="text-[#0EABEB] text-sm font-semibold">
              <strong>Total Amount:</strong> ₹24,668.00
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
