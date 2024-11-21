export default function Bill2() {
  return (
    <>
      <div class="flex justify-center items-center">
        <div class="invoice bg-white rounded-lg shadow-md max-w-3xl mx-auto overflow-hidden">
          <div class="head flex justify-between">
            <img src="/img/logo.png" class="w-2/5 h-auto" alt="Logo" />
            <img src="/img/invoice.png" class="w-[45%] h-auto" alt="Logo" />
          </div>
          <div class="content px-5 py-4">
            <div class="billing-info flex justify-between mb-4">
              <div>
                <h3 class="text-base font-bold text-[#141414]">Billing To:</h3>
                <h3 class="text-base font-bold text-[#141414]">
                  Adeline Palmerston
                </h3>
                <span class="text-xs text-gray-500 block mt-2">
                  123 Anywhere St., Any City, ST 12345
                </span>
              </div>
              <div>
                <p class="text-sm">
                  <strong>Invoice No :</strong>
                  <span class="text-xs text-gray-500 ml-2">1234</span>
                </p>
                <p class="text-sm">
                  <strong>Invoice Date :</strong>
                  <span class="text-xs text-gray-500 ml-2">20 June, 2020</span>
                </p>
                <p class="text-sm">
                  <strong>Due Date :</strong>
                  <span class="text-xs text-gray-500 ml-2">30 June, 2020</span>
                </p>
              </div>
            </div>
            <table class="w-full border-collapse">
              <thead>
                <tr class="bg-[#0eabeb] text-white text-xs ">
                  <th class="p-2 rounded-l-lg text-left">Item</th>
                  <th class="p-2 text-left">Price</th>
                  <th class="p-2 text-left">Qty</th>
                  <th class="p-2  text-left rounded-r-lg">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="p-2 text-[#4F4F4F] font-medium text-sm">
                    Payment transferred
                  </td>
                  <td class="p-2 text-[#4F4F4F] font-medium text-sm">
                    $120.00
                  </td>
                  <td class="p-2 text-[#4F4F4F] font-medium text-sm">2</td>
                  <td class="p-2 text-[#4F4F4F] font-medium text-sm">
                    $240.00
                  </td>
                </tr>
                <tr class="bg-gray-100">
                  <td class="p-2 text-[#4F4F4F] font-medium text-sm rounded-l-lg">
                    Payment transferred
                  </td>
                  <td class="p-2 text-[#4F4F4F] font-medium text-sm">
                    $120.00
                  </td>
                  <td class="p-2 text-[#4F4F4F] font-medium text-sm">2</td>
                  <td class="p-2 text-[#4F4F4F] font-medium text-sm rounded-r-lg">
                    $240.00
                  </td>
                </tr>
                <tr>
                  <td class="p-2 text-[#4F4F4F] font-medium text-sm">
                    Payment transferred
                  </td>
                  <td class="p-2 text-[#4F4F4F] font-medium text-sm">
                    $120.00
                  </td>
                  <td class="p-2 text-[#4F4F4F] font-medium text-sm">2</td>
                  <td class="p-2 text-[#4F4F4F] font-medium text-sm">
                    $240.00
                  </td>
                </tr>
                <tr class="bg-gray-100">
                  <td class="p-2 text-[#4F4F4F] font-medium text-sm rounded-l-lg">
                    Payment transferred
                  </td>
                  <td class="p-2 text-[#4F4F4F] font-medium text-sm">
                    $120.00
                  </td>
                  <td class="p-2 text-[#4F4F4F] font-medium text-sm">2</td>
                  <td class="p-2 text-[#4F4F4F] font-medium text-sm rounded-r-lg">
                    $240.00
                  </td>
                </tr>
                <tr>
                  <td class="p-2 text-[#4F4F4F] font-medium text-sm">
                    Payment transferred
                  </td>
                  <td class="p-2 text-[#4F4F4F] font-medium text-sm">
                    $120.00
                  </td>
                  <td class="p-2 text-[#4F4F4F] font-medium text-sm">2</td>
                  <td class="p-2 text-[#4F4F4F] font-medium text-sm">
                    $240.00
                  </td>
                </tr>
                <tr class="bg-gray-100">
                  <td class="p-2 text-[#4F4F4F] font-medium text-sm rounded-l-lg">
                    Payment transferred
                  </td>
                  <td class="p-2 text-[#4F4F4F] font-medium text-sm">
                    $120.00
                  </td>
                  <td class="p-2 text-[#4F4F4F] font-medium text-sm">2</td>
                  <td class="p-2 text-[#4F4F4F] font-medium text-sm rounded-r-lg">
                    $240.00
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="flex justify-between mt-5">
              <div class="payment-method">
                <strong class="text-sm text-gray-900">Payment Method</strong>
                <p class="text-xs text-gray-500 pt-1">
                  Bank Name: <span class="ml-2">State Bank Of India</span>
                  <br />
                  Account No.: <span class="ml-2">1234567890</span>
                </p>
              </div>
              <div class="totals text-right">
                <p class="text-sm font-semibold text-gray-900">
                  Sub Total : <span class="ml-2 text-gray-500">$2110.00</span>
                </p>
                <p class="text-sm font-semibold text-gray-900">
                  Discount 5% : <span class="ml-2 text-gray-500">$255.00</span>
                </p>
                <p class="text-sm font-semibold text-blue-500">
                  Total : <span class="ml-2 text-blue-500">$2254.00</span>
                </p>
              </div>
            </div>
            <hr class="my-3" />
            <div class="terms">
              <strong class="text-base font-semibold text-gray-900">
                Term & Conditions:
              </strong>
              <p class="text-sm text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div class="footer bg-[#0eabeb] text-white p-3 text-center text-sm flex justify-between">
            <p>Call: +00854 22354</p>
            <p>Email: Hello@Gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
}
