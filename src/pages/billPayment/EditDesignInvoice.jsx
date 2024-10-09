import Bill2 from "../invoice/Bill2";
import Bill3 from "../invoice/Bill3";
import "../billPayment/editDesignInvoice.css";
import Bill from "../../component/Bill";

export default function EditDesignInvoice() {
  return (
    <>
      <div class="container">
        <div className="title">
        <h1>Select Invoice Theme</h1>
        </div>
        <div class="theme-selector">
          <div class="invoice-samples">
            <div class="invoice">
              <Bill />
            </div>
            <div class="invoice">
              <Bill3 />
            </div>
            <div class="invoice">
              <Bill2 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
