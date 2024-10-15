import PropTypes from "prop-types";
import "../billPayment/cashPayment.css";

export default function CashPayment({ setIsPayment, billData }) {
  return (
    <>
      <div className="cashpayment-section">
        <div className="row">
          <div className="popup">
            <div className="title">
              <h2>Cash Payment</h2>
            </div>
            <div className="input-box">
              <div className="label">Enter Amount</div>
              <input type="text" placeholder="₹000000" />
            </div>
            <div className="btns flex">
              <button onClick={() => setIsPayment(false)} className="cancel">
                Cancel
              </button>
              <button className="pay">Pay</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Add PropTypes validation
CashPayment.propTypes = {
  setIsPayment: PropTypes.func.isRequired,
  billData: PropTypes.object,
};
