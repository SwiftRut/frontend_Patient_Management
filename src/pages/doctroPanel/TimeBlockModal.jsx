import React, { useState } from "react";
import moment from "moment";
import { useAuth } from "../../hooks/useAuth";
import apiService from "../../services/api";

const TimeBlockModal = ({ isOpen, onClose, onAddUnavailableTime }) => {
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const { user } = useAuth();

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const unavailableTimeData = {
      date,
      timeRange: {
        start: startTime,
        end: endTime,
      },
    };

    try {
      await apiService.AddUnavailableTime(user.id, unavailableTimeData);
      onAddUnavailableTime(unavailableTimeData);
      onClose();
    } catch (error) {
      console.error("Error adding unavailable time:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
      <div className="bg-white p-5 rounded-lg shadow-xl max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">Add Unavailable Time</h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="font-medium block mb-1">Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full border rounded px-2 py-1"
                required
              />
            </div>
            <div>
              <label className="font-medium block mb-1">Start Time</label>
              <input
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="w-full border rounded px-2 py-1"
                required
              />
            </div>
            <div>
              <label className="font-medium block mb-1">End Time</label>
              <input
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="w-full border rounded px-2 py-1"
                required
              />
            </div>
          </div>
          <div className="flex justify-end mt-6 space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TimeBlockModal; 