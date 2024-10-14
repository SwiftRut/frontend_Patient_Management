import "../invoice/bill2.css";
export default function Bill2() {
  return (
    <>
      <div className="main flex justify-center items-center h-full">
        <div className="invoice">
          <div className="head">
            <img src="/img/logo.png" width="300px" />
            <div className="title">
              <img src="/img/invoice.png" />
            </div>
          </div>
          <div className="content">
            <div className="billing-info">
              <div>
                <h3>Billing To:</h3>
                <h3> Adeline Palmerston</h3>
                <span> 123 Anywhere St., Any City, ST 12345</span>
              </div>
              <div>
                <p>
                  <strong>Invoice No :</strong> <span>1234</span>
                </p>
                <p>
                  <strong>Invoice Date :</strong> <span>20 June, 2020</span>
                </p>
                <p>
                  <strong>Due Date :</strong> <span>30 June, 2020</span>
                </p>
              </div>
            </div>
            <table>
              <thead>
                <tr className="border">
                  <th>Item</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Payment transferred</td>
                  <td>$ 120.00</td>
                  <td>2</td>
                  <td>$ 240.00</td>
                </tr>
                <tr>
                  <td>Payment transferred</td>
                  <td>$ 120.00</td>
                  <td>2</td>
                  <td>$ 240.00</td>
                </tr>
                <tr>
                  <td>Payment transferred</td>
                  <td>$ 120.00</td>
                  <td>2</td>
                  <td>$ 240.00</td>
                </tr>
                <tr>
                  <td>Payment transferred</td>
                  <td>$ 120.00</td>
                  <td>2</td>
                  <td>$ 240.00</td>
                </tr>
                <tr>
                  <td>Payment transferred</td>
                  <td>$ 120.00</td>
                  <td>2</td>
                  <td>$ 240.00</td>
                </tr>
                <tr>
                  <td>Payment transferred</td>
                  <td>$ 120.00</td>
                  <td>2</td>
                  <td>$ 240.00</td>
                </tr>
              </tbody>
            </table>
            <div className="flex justify-between">
              <div className="payment-method">
                <strong>Payment Method</strong>
                <p>
                  Bank Name :<span> State Bank Of India</span>
                  <br />
                  Account No. :<span>1234567890</span>
                </p>
              </div>
              <div className="totals">
                <p>
                  <strong>Sub Total :</strong> <span>$ 2110.00</span>
                </p>
                <p>
                  <strong>Discount 5% :</strong> <span>$ 255.00</span>
                </p>
                <p>
                  <strong>Total :</strong> <span>$ 2254.00</span>
                </p>
              </div>
            </div>
            <div className="terms">
              <strong>Term & Conditions:</strong>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="footer flex justify-between">
            <p>Call: +00854 22354 </p> <p>Email: Hello@Gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
}
