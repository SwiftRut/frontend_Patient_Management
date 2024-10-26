import { Modal, TextField, Button, IconButton } from "@mui/material";
import { useState } from "react";
import { Close } from "@mui/icons-material";
import PropTypes from "prop-types";

const CustomDateModal = ({ open, onClose, onApply }) => {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const handleReset = () => {
    setFromDate(null);
    setToDate(null);
  };

  const handleApply = () => {
    if (fromDate && toDate) {
      const formatDate = (date) => {
        const options = { year: "numeric", month: "long", day: "2-digit" };
        return new Date(date).toLocaleDateString("en-US", options);
      };
      onApply([fromDate, toDate]); // Pass the range as an array of dates
    }
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg w-[320px]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Custom Date</h2>
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </div>
        <div className="mb-4">
          <TextField
            label="From Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            fullWidth
          />
        </div>
        <div className="mb-4">
          <TextField
            label="To Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            fullWidth
          />
        </div>
        <div className="flex justify-between">
          <Button variant="outlined" onClick={handleReset}>
            Reset
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleApply}
            disabled={!fromDate || !toDate} // Disable if dates are not selected
          >
            Apply
          </Button>
        </div>
      </div>
    </Modal>
  );
};

// Add prop types validation
CustomDateModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired, // Validate onClose as a required function
  onApply: PropTypes.func.isRequired, // Use onApply instead of setDateRange
};

export default CustomDateModal;
