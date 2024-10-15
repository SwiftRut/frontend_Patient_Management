import Bill2 from "../invoice/Bill2";
import Bill3 from "../invoice/Bill3";
import "../billPayment/editDesignInvoice.css";
import Bill from "../invoice/Bill";

export default function EditDesignInvoice() {
  return (
    <>
      <div className="container">
        <div className="title">
          <h1>Select Invoice Theme</h1>
        </div>
        <div className="theme-selector">
          <div className="invoice-samples">
            <div className="invoice">
              <Bill />
            </div>
            <div className="invoice">
              <Bill3 />
            </div>
            <div className="invoice">
              <Bill2 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
