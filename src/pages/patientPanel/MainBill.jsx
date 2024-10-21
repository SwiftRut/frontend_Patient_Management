import React from "react";

const MainBill = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-card rounded-lg shadow-lg">
      <div className="flex justify-between mb-2 ps-6">
        <img src="/img/logo.png" width="250px" />
        <div className="title">
          <img src="/img/invoice.png" />
        </div>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <p className="font-medium text-[24px] text-[#141414]">
              Dr. Bharat Patel
            </p>
            <p className="text-[#818194] text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              mattis turpis nulla, finibus sodales erat porta eu.
            </p>
          </div>
          <div className="text-right">
            <p className="text-[#818194]">
              <strong className="text-[#141414]">Bill No:</strong> 1234
            </p>
            <p className="text-[#818194]">
              <strong className="text-[#141414]">Bill Date:</strong> 20 June,
              2020
            </p>
            <p className="text-[#818194]">
              <strong className="text-[#141414]">Bill Time:</strong> 10:45 PM
            </p>
          </div>
        </div>

        <div className="mt-6 bg-[#f6f8fb] flex p-3 rounded-md">
          <div className="">
            <p className="text-[#818194] text-sm">
              <strong className="text-[#141414] text-base me-2">Name :</strong>{" "}
              Miracle Kenter
            </p>
            <p className="text-[#818194] text-sm">
              <strong className="text-[#141414] text-base me-2">
                Gender :
              </strong>{" "}
              Male
            </p>
            <p className="text-[#818194] text-sm">
              <strong className="text-[#141414] text-base me-2">Age :</strong>{" "}
              36 Years
            </p>
            <p className="text-[#818194] text-sm">
              <strong className="text-[#141414] text-base me-2">
                Address :
              </strong>{" "}
              B-105 Virat Bungalows Punagam Motavaracha Jamnagar.
            </p>
          </div>
          <div>
            <p className="text-[#818194] text-sm">
              <strong className="text-[#141414] text-base me-2">
                Disease Name :
              </strong>{" "}
              Stomach Ach
            </p>
            <p className="text-[#818194] text-sm">
              <strong className="text-[#141414] text-base me-2">
                Phone Number :
              </strong>{" "}
              9957 96557
            </p>
            <p className="text-[#818194] text-sm">
              <strong className="text-[#141414] text-base me-2">
                Payment Type :
              </strong>{" "}
              Insurance
            </p>
          </div>
        </div>

        <table className="min-w-full mt-4">
          <thead className="">
            <tr className="bg-[#0EABEB] text-white">
              <th className="px-4 py-2 text-base rounded-tl-lg">Description</th>
              <th className="px-4 py-2 text-base">Amount</th>
              <th className="px-4 py-2 text-base">Qty.</th>
              <th className="px-4 py-2 text-base rounded-tr-lg">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className=" px-4 py-2 text-[#4F4F4F]">
                Neuromuscular blockers
              </td>
              <td className=" px-4 py-2 text-[#4F4F4F]">₹ 12000.00</td>
              <td className=" px-4 py-2 text-[#4F4F4F]">2</td>
              <td className=" px-4 py-2 text-[#141414]">₹ 24000.00</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-[#4F4F4F]">
                Neuromuscular blockers
              </td>
              <td className="px-4 py-2 text-[#4F4F4F]">₹ 800.00</td>
              <td className="px-4 py-2 text-[#4F4F4F]">2</td>
              <td className="px-4 py-2 text-[#141414]">₹ 1600.00</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-[#4F4F4F]">
                Leucovorin with high dose methotrexate (HDMTX)
              </td>
              <td className="px-4 py-2 text-[#4F4F4F]">₹ 1000.00</td>
              <td className="px-4 py-2 text-[#4F4F4F]">2</td>
              <td className="px-4 py-2 text-[#141414]">₹ 2000.00</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-[#4F4F4F]">
                Hydroxyurea for sickle cell disease
              </td>
              <td className="px-4 py-2 text-[#4F4F4F]">₹ 20.00</td>
              <td className="px-4 py-2 text-[#4F4F4F]">2</td>
              <td className="px-4 py-2 text-[#141414]">₹ 40.00</td>
            </tr>
          </tbody>
        </table>

        <div class="flex justify-between my-3">
          <div class="mt-4">
            <p className="text-[#818194] text-sm font-semibold">
              <strong className="text-[#141414] text-base font-semibold">
                Insurance Company:
              </strong>{" "}
              HDFC Life Insurance
            </p>
            <p className="text-[#818194] text-sm font-semibold">
              <strong className="text-[#141414] text-base font-semibold">
                Insurance Plan:
              </strong>{" "}
              Health insurance
            </p>
            <p className="text-[#0EABEB] text-sm font-semibold">
              <strong className="text-[#141414] text-base font-semibold">
                Claim Amount:
              </strong>{" "}
              ₹ 2000.00
            </p>
            <p className="text-[#0EABEB] text-sm font-semibold">
              <strong className="text-[#141414] text-base font-semibold">
                Claimed Amount:
              </strong>{" "}
              ₹ 2500.00
            </p>
          </div>

          <div className="mt-4">
            <p className="text-[#818194] text-sm font-semibold">
              <strong className="text-[#141414] text-base font-semibold">
                Amount:
              </strong>{" "}
              ₹ 25,840.00
            </p>
            <p className="text-[#818194] text-sm font-semibold">
              <strong className="text-[#141414] text-base font-semibold">
                Discount 5%:
              </strong>{" "}
              ₹ 1,292.00
            </p>
            <p className="text-[#818194] text-sm font-semibold">
              <strong className="text-[#141414] text-base font-semibold">
                Tax:
              </strong>{" "}
              ₹ 120.00
            </p>
            <p className="text-[#0EABEB] text-sm font-semibold">
              Total Amount: ₹ 24,668.00
            </p>
          </div>
        </div>
      </div>
      <footer className="mt-6 text-center flex justify-between bg-[#0EABEB] p-3 text-white rounded-b-lg">
        <p>Call: +90854 22354</p>
        <p>
          Email:{" "}
          <a href="mailto:Hello@gmail.com" class="text-white">
            Hello@gmail.com
          </a>
        </p>
      </footer>
    </div>
  );
};

export default MainBill;
