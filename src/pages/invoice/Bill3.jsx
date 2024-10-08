import "../invoice/bill3.css";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

export default function Bill3() {
  return (
    <>
      <div class="invoice2">
        <div className="border">
          <header>
            <div class="logo">
              <img src="/img/logo-white.png" width="300px" />
            </div>
            <div class="invoice-title">
              <h1>Invoice</h1>
              <p>Invoice No: 1234</p>
            </div>
          </header>
        </div>
        <main>
          <div className="flex justify-between">
            <section class="customer-info">
              <h2>Invoice To:</h2>
              <span>PLK Madhuvan Bank</span>
              <p style={{ paddingTop: "10px" }}>
                <BiSolidPhoneCall
                  style={{
                    display: "inline",
                    fontSize: "20px",
                    marginRight: "10px",
                  }}
                />{" "}
                +123-456-7890
              </p>
              <p>
                <IoMdMail
                  style={{
                    display: "inline",
                    fontSize: "20px",
                    marginRight: "10px",
                  }}
                />{" "}
                www.gallery.com
              </p>
              <p>
                <FaLocationDot
                  style={{
                    display: "inline",
                    fontSize: "20px",
                    marginRight: "10px",
                  }}
                />{" "}
                123 Anywhere Street, Any City
              </p>
            </section>
            <section className="invoice-details">
              <p>Invoice Date : 30 May, 2020</p>
              <p>
                <strong>Total Due:</strong> <span>$ 1,251</span>
              </p>
            </section>
          </div>
          <table>
            <thead>
              <tr>
                <th>Description</th>
                <th>Qty.</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Payment transferred</td>
                <td>2</td>
                <td>$ 200</td>
                <td>$ 3525</td>
              </tr>
              <tr>
                <td>Payment transferred</td>
                <td>2</td>
                <td>$ 200</td>
                <td>$ 3525</td>
              </tr>
              <tr>
                <td>Payment transferred</td>
                <td>2</td>
                <td>$ 200</td>
                <td>$ 3525</td>
              </tr>
              <tr>
                <td>Payment transferred</td>
                <td>2</td>
                <td>$ 200</td>
                <td>$ 3525</td>
              </tr>
              <tr>
                <td>Payment transferred</td>
                <td>2</td>
                <td>$ 200</td>
                <td>$ 3525</td>
              </tr>
            </tbody>
          </table>
          <section className="totals">
            <p>
              <strong>Sub Total:</strong> <span>$ 21100.00</span>
            </p>
            <p>
              <strong>Tax: </strong> <span>$ 25.00</span>
            </p>
            <p>
              <strong>Total:</strong> <span>$ 22545.00</span>
            </p>
          </section>
        </main>
        <footer>
          <section className="terms">
            <h3>Term and Conditions</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              malesuada lacus vel eros faucibus, et finibus nisi porta.
            </p>
          </section>
          <section className="signature">
            <h3>Signature</h3>
          </section>
        </footer>
      </div>
    </>
  );
}
