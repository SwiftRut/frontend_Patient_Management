import "../component/bill.css";
export default function Bill() {
  return (
    <>
      {/* <div className="main">
      <div className="invoice">
        <div className="head">
          <img src="/img/logo.png" width="300px" />
          <div className="title">
            <img src="/img/invoice.png"/>
          </div>
        </div>
        <div className="content">
          <div className="billing-info">
            <div>
              <h3> Dr. Bharat Patel</h3>
              <span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis turpis nulla, finibus sodales erat porta eu.</span>
            </div>
            <div>
              <p>
                <strong>Bill No :</strong> <span>1234</span>
              </p>
              <p>
                <strong>Bill Date :</strong> <span>20 June, 2020</span>
              </p>
              <p>
                <strong>Bill Time :</strong> <span>10:45 PM</span>
              </p>
            </div>
          </div>
          <div className="patient-details">
                <table>
                  <div
                    className="flex patient-details"
                    style={{ justifyContent: "space-between", width: "100%" }}
                  >
                    <div>
                      <tr>
                        <td>Name</td>
                        <td>: Miracle Kenter</td>
                      </tr>
                      <tr>
                        <td>Gender</td>
                        <td>: Male</td>
                      </tr>
                      <tr>
                        <td>Age</td>
                        <td>: 36 Years</td>
                      </tr>
                      <tr>
                        <td>Address</td>
                        <td>
                          : B-105 Virat Bungalows Punagam Motavaracha Jamnagar.
                        </td>
                      </tr>
                    </div>
                    <div>
                      <tr>
                        <td>Disease Name</td>
                        <td>: Stomach Ach</td>
                      </tr>
                      <tr>
                        <td>Phone Number</td>
                        <td>: 9957 96557</td>
                      </tr>
                      <tr>
                        <td>Payment Type</td>
                        <td>: Online</td>
                      </tr>
                    </div>
                  </div>
                </table>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="footer flex justify-between">
          <p>Call: +00854 22354 </p> <p>Email: Hello@Gmail.com</p>
        </div>
      </div>
      </div> */}
      <div class="invoice">
        <div className="head">
          <img src="/img/logo.png" width="200px" />
          <div className="title">
            <img src="/img/invoice.png" />
          </div>
        </div>
        <div className="wrapper">
          <div className="billing-info">
            <div className="info">
              <h3> Dr. Bharat Patel</h3>
              <span>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                mattis turpis nulla, finibus sodales erat porta eu.
              </span>
            </div>
            <div>
              <p>
                <strong>Bill No :</strong> <span>1234</span>
              </p>
              <p>
                <strong>Date :</strong> <span>20 June, 2020</span>
              </p>
              <p>
                <strong>Bill Time :</strong> <span>10:45 PM</span>
              </p>
            </div>
          </div>
          <div class="invoice__patient flex">
            <div>
              <p>
                Name : <span>Miracle Kenter</span>
              </p>
              <p>
                Gender : <span>Male</span>
              </p>
              <p>
                Age : <span>36 Years</span>
              </p>
              <p>
                Address :{" "}
                <span>B-105 Virat Bungalows Punagam Motavaracha Jamnagar.</span>
              </p>
            </div>
            <div>
              <p>
                Disease Name : <span>Stomach Ach</span>{" "}
              </p>
              <p>
                Phone Number : <span> +1234567890</span>
              </p>
              <p>
                Payment Type : <span> Online</span>
              </p>
            </div>
          </div>
          <table class="invoice__table">
            <thead>
              <tr>
                <th>Description</th>
                <th>Amount</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Neuromuscular blockers</td>
                <td class="amount">₹12000.00</td>
                <td>1</td>
                <td class="amount">₹2400.00</td>
              </tr>
              <tr>
                <td>Neuromuscular blockers</td>
                <td class="amount">₹ 800.00</td>
                <td>1</td>
                <td class="amount">₹1600.00</td>
              </tr>
              <tr>
                <td>Leucovorin with high dose methotrexate (HDMTX)</td>
                <td class="amount">₹ 1000.00</td>
                <td>1</td>
                <td class="amount">₹2000.00</td>
              </tr>
              <tr>
                <td>Hydroxyurea for sickle cell disease</td>
                <td class="amount">₹ 20.00</td>
                <td>1</td>
                <td class="amount">₹ 40.00</td>
              </tr>
            </tbody>
          </table>
          <div class="invoice__total">
            <table>
              <tr>
                <td class="label">Amount :</td>
                <td class="value">₹ 25,840.00</td>
              </tr>
              <tr>
                <td class="label">Discount 5% :</td>
                <td class="value">₹ 1,292.00</td>
              </tr>
              <tr>
                <td class="label">Tax :</td>
                <td class="value">₹ 120.00</td>
              </tr>
              <tr>
                <td class="label color">Total :</td>
                <td class="value color">₹ 24,668.00</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="footer flex justify-between">
          <p>Call: +00854 22354 </p> <p>Email: Hello@Gmail.com</p>
        </div>
      </div>
    </>
  );
}
