import "../invoice/addNewField.css";
import { IoMdAdd } from "react-icons/io";
import { TiMinus } from "react-icons/ti";

export default function AddNewField() {
  return (
    <>
      <div className="modal">
        <h2>Add New Field</h2>
        <div className="field-type">
          <label className="radio-label check">
            <input type="radio" name="fieldType" value="dropdown" checked />
            <span className="radio-custom"></span>
            Dropdown
          </label>{" "}
          |
          <label className="radio-label">
            <input type="radio" name="fieldType" value="textfield" />
            <span className="radio-custom"></span>
            Text field
          </label>
        </div>
        <div className="dropdown">
          <label for="selection">Selection</label>
          <select id="selection">
            <option value="single">Single</option>
            <option value="multiple">Multiple</option>
          </select>
        </div>
        <div className="input">
          <div className="label">Dropdown Name</div>
          <input type="text" placeholder="Gender" />
        </div>
        <div className="values">
          <div className="flex">
            <div className="input-box">
              <div className="minus-circle">
                <TiMinus />
              </div>
              <input type="text" placeholder="Value 1" />
            </div>
            <div className="input-box">
              <div className="minus-circle">
                <TiMinus />
              </div>
              <input type="text" placeholder="Value 2" />
            </div>
          </div>
          <div className="input-box">
            <div className="minus-circle">
              <TiMinus />
            </div>
            <input type="text" placeholder="Value 3" />
          </div>
        </div>
        <div className="add flex align-center">
          <div className="icon">
            <IoMdAdd />
          </div>
          <h3>Add Option</h3>
        </div>
        <div className="actions">
          <button className="btn-cancel">Cancel</button>
          <button className="btn-add">Add</button>
        </div>
      </div>
      {/* textfield */}
      {/* <div className="modal">
        <h2>Add New Field</h2>
        <div className="field-type">
          <label className="radio-label">
            <input type="radio" name="fieldType" value="dropdown"/>
            <span className="radio-custom"></span>
            Dropdown
          </label>{" "}
          |
          <label className="radio-label check">
            <input type="radio" name="fieldType" value="textfield" checked/>
            <span className="radio-custom"></span>
            Text field
          </label>
        </div>
        <div className="input">
          <div className="label">Text Field Name</div>
          <input type="text" placeholder="Patient Name" />
        </div>
        <div className="add flex align-center">
          <div className="icon">
            <IoMdAdd />
          </div>
          <h3>Add Option</h3>
        </div>
        <div className="actions">
          <button className="btn-cancel">Cancel</button>
          <button className="btn-add">Add</button>
        </div>
      </div> */}
    </>
  );
}
