import "../invoice/addNewField.css";
export default function AddNewField(params) {
  return (
    <>
      <div className="modal">
        <h2>Add New Field</h2>
        <div className="field-type">
          <label className="radio-label">
            <input type="radio" name="fieldType" value="dropdown" checked />
            <span className="radio-custom"></span>
            Dropdown
          </label>
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
        <div className="values">
          <input type="text" placeholder="Value 1" />
          <input type="text" placeholder="Value 2" />
          <input type="text" placeholder="Value 3" />
        </div>
        <div className="actions">
          <button className="btn-cancel">Cancel</button>
          <button className="btn-add">Add</button>
        </div>
      </div>
    </>
  );
}
