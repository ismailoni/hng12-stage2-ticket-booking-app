"use client";
import { useState, useEffect } from "react";

const BookingHistory = () => {
  const [pastSubmissions, setPastSubmissions] = useState([]);

  useEffect(() => {
    const storedSubmissions = JSON.parse(localStorage.getItem("pastSubmissions")) || [];
    setPastSubmissions(storedSubmissions);
  }, []);

  return (
    <div className="p-6 bg-gray-900 text-white">
      <h2 className="text-xl font-bold mb-4">Booking History</h2>
      {pastSubmissions.length === 0 ? (
        <p>No previous bookings found.</p>
      ) : (
        <ul className="space-y-4">
          {pastSubmissions.map((submission, index) => (
            <li key={index} className="p-4 border border-gray-700 rounded">
              <p><strong>Name:</strong> {submission.fullName}</p>
              <p><strong>Email:</strong> {submission.email}</p>
              <p><strong>Ticket Type:</strong> {submission.ticketType}</p>
              <p><strong>Tickets:</strong> {submission.ticketAmount}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookingHistory;
