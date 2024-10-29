import React, { useRef } from "react";
import { Dialog, DialogContent, DialogTitle, IconButton, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { toPng } from 'html-to-image';
import signature from "../../assets/signature.svg";
import { FaDownload } from "react-icons/fa";
import moment from 'moment';

const PrescriptionModal = ({ open, handleClose, prescriptionData, onDownload }) => {
  const modalRef = useRef(null);

  const downloadPrescriptionImage = async () => {
    if (modalRef.current) {
      try {
        // Hide download and close buttons before capture
        const buttons = modalRef.current.querySelectorAll('.hide-for-download');
        buttons.forEach(button => button.style.display = 'none');

        const dataUrl = await toPng(modalRef.current, { 
          quality: 1.0,
          backgroundColor: 'white',
          pixelRatio: 2
        });

        // Restore buttons after capture
        buttons.forEach(button => button.style.display = '');

        const link = document.createElement("a");
        link.href = dataUrl;
        const fileName = `prescription-${prescriptionData?.patientId?.firstName || prescriptionData?.patientName}-${moment().format('YYYY-MM-DD-HH-mm-ss')}.png`;
        link.download = fileName;
        link.click();
      } catch (error) {
        console.error("Failed to download image:", error);
        alert("Failed to download the prescription image. Please try again.");
      }
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="md"
      classes={{ paper: "max-h-[90vh] overflow-y-auto bg-white" }}
    >
      <DialogTitle>
        <div className="flex justify-between items-center">
          <span className="text-xl font-semibold">Prescription</span>
          <div className="flex items-center hide-for-download">
            <IconButton onClick={downloadPrescriptionImage} title="Download as Image">
              <FaDownload />
            </IconButton>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </div>
        </div>
      </DialogTitle>

      <DialogContent ref={modalRef} style={{ backgroundColor: "white" }}>
        <div className="border rounded p-4 bg-white">
          <div className="bg-gray-100 rounded p-4 mb-4">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="w-32 md:w-40">
                <img 
                  src="/image/bill-logo.png" 
                  alt="Logo" 
                  className="w-full"
                  crossOrigin="anonymous"
                />
              </div>
              <div className="text-center sm:text-right">
                <p className="text-[24px] text-[#0EABEB] font-bold">
                  Dr. {prescriptionData?.doctorId?.name || "Bharat Patel"}
                </p>
                <span className="text-[14px] text-[#818194] font-semibold">
                  {prescriptionData?.doctorId?.speciality || "Obstetrics and Gynecology"}
                </span>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                <p className="text-[16px] text-[#141414] font-semibold">
                  Patient Name:{" "}
                  <span className="text-[14px] text-[#818194] font-semibold">
                    {prescriptionData?.patientId?.firstName 
                      ? `${prescriptionData.patientId.firstName} ${prescriptionData.patientId.lastName}`
                      : prescriptionData?.patientName}
                  </span>
                </p>
                <p className="text-[16px] text-[#141414] font-semibold">
                  Prescription Date:{" "}
                  <span className="text-[14px] text-[#818194] font-semibold">
                    {moment(prescriptionData?.date || prescriptionData?.prescriptionDate).format('D MMM, YYYY')}
                  </span>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                <p className="text-[16px] text-[#141414] font-semibold">
                  Gender:{" "}
                  <span className="text-[14px] text-[#818194] font-semibold">
                    {prescriptionData?.patientId?.gender || prescriptionData?.gender}
                  </span>
                </p>
                <p className="text-[16px] text-[#141414] font-semibold">
                  Age:{" "}
                  <span className="text-[14px] text-[#818194] font-semibold">
                    {prescriptionData?.patientId?.age || prescriptionData?.age}
                  </span>
                </p>
              </div>
              <p className="text-[16px] text-[#141414] font-semibold break-words">
                Address:{" "}
                <span className="text-[14px] text-[#818194] font-semibold">
                  {prescriptionData?.patientId?.address || prescriptionData?.address}
                </span>
              </p>
            </div>
          </div>

          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="text-[#030229] text-[14px] font-semibold">Medicine Name</TableCell>
                <TableCell className="text-[#030229] text-[14px] font-semibold">Strength</TableCell>
                <TableCell className="text-[#030229] text-[14px] font-semibold">Dose</TableCell>
                <TableCell className="text-[#030229] text-[14px] font-semibold">Duration</TableCell>
                <TableCell className="text-[#030229] text-[14px] font-semibold">When to Take</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(prescriptionData?.medications || prescriptionData?.medicines)?.map((medicine, index) => (
                <TableRow key={index}>
                  <TableCell>{medicine.medicineName}</TableCell>
                  <TableCell>{medicine.strength}</TableCell>
                  <TableCell>{medicine.dose}</TableCell>
                  <TableCell>
                    <span className="bg-[#39973D1A] text-[#39973D] text-[14px] font-semibold p-2 rounded-full">
                      {medicine.duration}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className="bg-[#5678E91A] text-[718EBF] text-[14px] font-semibold p-2 rounded-full">
                      {medicine.whenToTake}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="mt-4">
            <h3 className="font-bold">Instructions:</h3>
            <p className="text-[14px] text-[#818194] font-semibold">
              {prescriptionData?.instructions || prescriptionData?.additionalNote}
            </p>
          </div>

          <div className="mt-4 flex justify-between align-center">
            <div className="sign border-b pb-2">
              <div className="w-32 mt-4">
                <img 
                  src={prescriptionData?.doctorId?.signature || signature} 
                  alt="Signature"
                  crossOrigin="anonymous"
                  className="max-w-full"
                />
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