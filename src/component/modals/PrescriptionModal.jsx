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
      onOpenChange={handleClose}
      className="sm:w-full md:max-w-4xl"
    >
      <DialogTitle className="p-4 md:p-6">
        <div className="flex justify-between items-center">
          <span className="text-xl font-semibold">Prescription</span>
          <button
            onClick={handleClose}
            className="rounded-full p-1 hover:bg-gray-100"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>
      </DialogTitle>

      <DialogContent className="p-4 md:p-6 max-h-[90vh] overflow-y-auto">
        <div className="border rounded p-3 md:p-4">
          {/* Header Section */}
          <div className="bg-gray-100 rounded p-3 md:p-4">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="w-32 md:w-40">
                <img src="/image/bill-logo.png" alt="Logo" className="w-full" />
              </div>
              <div className="text-center sm:text-right">
                <p className="font-semibold text-lg">Dr. Bharat Patel</p>
                <span className="text-sm text-gray-600">
                  Obstetrics and Gynecology
                </span>
              </div>
            </div>

            {/* Patient Details */}
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                <p>
                  Patient Name:{" "}
                  <span className="font-medium">
                    {prescriptionData.patientName}
                  </span>
                </p>
                <p>
                  Prescription Date:{" "}
                  <span className="font-medium">
                    {prescriptionData.prescriptionDate}
                  </span>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                <p>
                  Gender:{" "}
                  <span className="font-medium">{prescriptionData.gender}</span>
                </p>
                <p>
                  Age:{" "}
                  <span className="font-medium">{prescriptionData.age}</span>
                </p>
              </div>
              <p className="break-words">
                Address:{" "}
                <span className="font-medium">{prescriptionData.address}</span>
              </p>
            </div>
          </div>

          {/* Medicines Table */}
          <div className="mt-4 overflow-x-auto">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className="font-semibold whitespace-nowrap">
                    Medicine Name
                  </TableCell>
                  <TableCell className="font-semibold whitespace-nowrap">
                    Strength
                  </TableCell>
                  <TableCell className="font-semibold whitespace-nowrap">
                    Dose
                  </TableCell>
                  <TableCell className="font-semibold whitespace-nowrap">
                    Duration
                  </TableCell>
                  <TableCell className="font-semibold whitespace-nowrap">
                    When to Take
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {prescriptionData.medicines.map((medicine, index) => (
                  <TableRow key={index}>
                    <TableCell className="whitespace-nowrap">
                      {medicine.name}
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      {medicine.strength}
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      {medicine.dose}
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                        {medicine.duration}
                      </span>
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                        {medicine.whenToTake}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Additional Notes */}
          <div className="mt-4 space-y-2">
            <h3 className="font-bold text-base">Additional Note:</h3>
            <p className="text-sm">{prescriptionData.additionalNote}</p>
          </div>

          {/* Signature */}
          <div className="mt-6 flex justify-end">
            <div className="text-center">
              <div className="border-t w-32 pt-2">
                <img src={signature} alt="Signature" className="max-w-full" />
              </div>
              <p className="text-sm mt-1">Doctor Signature</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PrescriptionModal;
