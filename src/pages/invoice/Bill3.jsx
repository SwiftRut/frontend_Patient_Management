import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

export default function Bill3() {
  return (
    <>
      <div class="invoice2 bg-white rounded-lg shadow-lg overflow-hidden max-w-3xl mx-auto max-h-[950px]">
        <div class="border-b-4 border-[#0eabeb] rounded-b-[40px]">
          <header class="bg-[#0eabeb] text-white p-3 px-5 rounded-t-lg flex justify-between items-center mb-2 rounded-b-[40px]">
            <div class="logo flex items-center">
              <img src="/img/logo-white.png" class="w-[200px]" alt="Logo" />
            </div>
            <div class="invoice-title text-right">
              <h1 class="text-[34px] font-bold m-0">Invoice</h1>
              <p class="text-sm font-normal m-0">Invoice No: 1234</p>
            </div>
          </header>
        </div>
        <main class="p-5">
          <div class="flex justify-between mb-8">
            <section class="customer-info">
              <h2 class="text-[13px] font-semibold text-gray-400">
                Invoice To:
              </h2>
              <span class="text-base font-semibold text-[#030229]">
                PLK Madhuvan Bank
              </span>
              <p class="text-xs font-medium text-[#4F4F4F] flex items-center pt-1">
                <BiSolidPhoneCall class="inline text-xs mr-2" /> +123-456-7890
              </p>
              <p class="text-xs font-medium text-[#4F4F4F] flex items-center">
                <IoMdMail class="inline text-xs mr-2" /> www.gallery.com
              </p>
              <p class="text-xs font-medium text-[#4F4F4F] flex items-center">
                <FaLocationDot class="inline text-xs mr-2" /> 123 Anywhere
                Street, Any City
              </p>
            </section>

            <section class="invoice-details text-right">
              <p class="text-sm text-gray-500 font-medium">
                Invoice Date : 30 May, 2020
              </p>
              <p class="text-sm font-medium text-gray-500">
                <strong class="font-medium">Total Due:</strong>{" "}
                <span class="text-[#0eabeb] pt-2 block">$ 1,251</span>
              </p>
            </section>
          </div>

          <table class="w-full border-collapse mb-8">
            <thead>
              <tr>
                <th class="bg-[#0eabeb] text-xs p-2 text-left text-white  rounded-l-lg">
                  Description
                </th>
                <th class="bg-[#0eabeb] text-xs p-2 text-left text-white">
                  Qty.
                </th>
                <th class="bg-[#0eabeb] text-xs p-2 text-left text-white">
                  Price
                </th>
                <th class="bg-[#0eabeb] text-xs p-2 text-left text-white rounded-r-lg">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white text-sm text-[#4F4F4F] font-medium ">
                <td class="pt-5 px-2 pb-2">Payment transferred</td>
                <td class="pt-5 px-2 pb-2">2</td>
                <td class="pt-5 px-2 pb-2">$ 200</td>
                <td class="pt-5 px-2 pb-2">$ 3525</td>
              </tr>
              <tr class="bg-white text-sm text-[#4F4F4F] font-medium">
                <td class="p-2">Payment transferred</td>
                <td class="p-2">2</td>
                <td class="p-2">$ 200</td>
                <td class="p-2">$ 3525</td>
              </tr>
              <tr class="bg-white text-sm text-[#4F4F4F] font-medium">
                <td class="p-2">Payment transferred</td>
                <td class="p-2">2</td>
                <td class="p-2">$ 200</td>
                <td class="p-2">$ 3525</td>
              </tr>
              <tr class="bg-white text-sm text-[#4F4F4F] font-medium">
                <td class="p-2">Payment transferred</td>
                <td class="p-2">2</td>
                <td class="p-2">$ 200</td>
                <td class="p-2">$ 3525</td>
              </tr>
            </tbody>
          </table>

          <section class="totals text-right">
            <p class="text-[13px] font-medium">
              <strong class="mr-8 text-[#030229]">Sub Total:</strong>{" "}
              <span class="text-gray-400">$ 21100.00</span>
            </p>
            <p class="text-[13px] font-medium py-1">
              <strong class="mr-14 text-[#030229]">Tax:</strong>{" "}
              <span class="text-gray-400">$ 25.00</span>
            </p>
            <p class="text-[13px] font-medium text-[#0eabeb]">
              <strong class="mr-8">Total:</strong>{" "}
              <span class="text-[#0eabeb]">$ 22545.00</span>
            </p>
          </section>
        </main>

        <footer class="p-3 px-5 border-t border-gray-300 flex justify-between">
          <section class="terms w-2/3">
            <h3 class="text-lg font-semibold text-gray-900 pb-1">
              Terms and Conditions
            </h3>
            <p class="text-[14px] font-normal text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              malesuada lacus vel eros faucibus, et finibus nisi porta.
            </p>
          </section>
          <section class="signature p-5">
            <h3 class="border-b border-gray-900 text-gray-900 text-lg pb-3">
              Signature
            </h3>
          </section>
        </footer>
      </div>
    </>
  );
}
