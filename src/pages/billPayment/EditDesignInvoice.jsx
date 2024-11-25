import Bill2 from "../invoice/Bill2";
import Bill3 from "../invoice/Bill3";
import Bill from "../invoice/Bill";

export default function EditDesignInvoice() {
  return (
    <>
      <div className="bg-[#F6F8FB] p-3 h-[93%]">
        <div className="bill-box bg-white p-4 h-[100%] rounded-lg m-2">
          <div className="title mb-5">
            <h1 className="text-2xl font-bold text-gray-900">
              Select Invoice Theme
            </h1>
          </div>
          <div className="theme-selector flex ">
            <div className="invoice-samples flex justify-between">
              <div className="invoice w-[30%] bg-transparent">
                <Bill />
              </div>
              <div className="invoice w-2/6 bg-transparent">
                <Bill3 />
              </div>
              <div className="invoice w-2/6 bg-transparent">
                <Bill2 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
