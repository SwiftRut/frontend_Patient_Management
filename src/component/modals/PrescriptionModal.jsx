import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import signature from "../../assets/signature.svg";

const PrescriptionModal = ({ open, handleClose, prescriptionData }) => {
  console.log(prescriptionData);
  
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="md"
      className="manage-prescription"
    >
      <DialogTitle>
        <div className="flex justify-between items-center">
          <span className="tital">Prescription</span>
          <IconButton onClick={handleClose} className="close-btn">
            <CloseIcon />
          </IconButton>
        </div>
      </DialogTitle>

      <DialogContent>
        <div className="border rounded p-3">
          <div className="top bg-gray-100 rounded p-4">
            <div className="head flex justify-between align-center ">
              <div className="logo">
                <img src="/image/bill-logo.png" alt="" />
              </div>
              <div className="name">
                <p>Dr. Bharat Patel</p>
                <span>Obstetrics and Gynecology</span>
              </div>
            </div>

            <div className="mt-4">
              <div className="details text-sm">
                <div className="flex align-center justify-between pb-2">
                  <p>
                    Patient Name: <span>{prescriptionData.patientName}</span>
                  </p>
                  <p>
                    Prescription Date:{" "}
                    <span>{prescriptionData.prescriptionDate}</span>
                  </p>
                </div>
                <div className="flex align-center justify-between pb-2">
                  <p>
                    Gender: <span>{prescriptionData.gender}</span>
                  </p>
                  <p>
                    Age: <span>{prescriptionData.age}</span>
                  </p>
                </div>
                <p className="add">
                  Address: <span>{prescriptionData.address}</span>
                </p>
              </div>
            </div>
          </div>

          <Table className="mt-4 table-data">
            <TableHead>
              <TableRow>
                <TableCell>Medicine Name</TableCell>
                <TableCell>Strength</TableCell>
                <TableCell>Dose</TableCell>
                <TableCell>Duration</TableCell>
                <TableCell>When to Take</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {prescriptionData.medicines.map((medicine, index) => (
                <TableRow key={index}>
                  <TableCell>{medicine.medicineName}</TableCell>
                  <TableCell>{medicine.strength}</TableCell>
                  <TableCell>{medicine.dose}</TableCell>
                  <TableCell className="duration">
                    <span>{medicine.duration}</span>
                  </TableCell>
                  <TableCell className="take">
                    <span>{medicine.whenToTake}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="mt-4">
            <h3 className="font-bold">Additional Note:</h3>
            <p>{prescriptionData.additionalNote}</p>
          </div>

          <div className="mt-4 flex justify-between">
            <div>
              <div className="border-t w-32 mt-4">
                <img src={signature} alt="Signature" />
              </div>
              <p>Doctor Signature</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PrescriptionModal;
