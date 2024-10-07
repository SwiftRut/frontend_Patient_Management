import "../billPayment/cashPayment.css";
export default function CashPayment() {
  return (
    <>
      <div className="cashpayment-section">
        <div className="row">
            {/* unfill */}
          {/* <div className="popup">
            <div className="title">
              <h2>Cash Payment</h2>
            </div>
            <div className="input-box">
              <div className="label">Enter Amount</div>
              <input type="text" placeholder="₹000000" />
            </div>
            <div className="btns flex">
              <button className="cancel">Cancel</button>
              <button className="pay">Pay</button>
            </div>
          </div> */}

          {/* fill */}
          <div className="popup">
            <div className="title">
              <h2>Cash Payment</h2>
            </div>
            <div className="input-box">
              <div className="label">Enter Amount</div>
                <div className="input">
                    <input type="text" placeholder="₹ 24,668"/>
                </div>
            </div>
            <div className="btns flex">
              <button className="cancel">Cancel</button>
              <button className="pay-fill">Pay</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
