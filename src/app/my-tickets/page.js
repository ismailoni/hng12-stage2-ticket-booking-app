"use client";
import { useState, useEffect, useRef } from "react";

const BookingHistory = () => {
  const [pastSubmissions, setPastSubmissions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const clearButtonRef = useRef(null); // Ref for "Clear Booking History" button
  const modalRef = useRef(null); // Ref for modal

  useEffect(() => {
    const storedSubmissions =
      JSON.parse(localStorage.getItem("pastSubmissions")) || [];
    setPastSubmissions(storedSubmissions);
  }, []);

  const openModal = () => {
    setShowModal(true);
    setTimeout(() => {
      modalRef.current?.focus(); // Move focus to modal when opened
    }, 100);
  };

  const closeModal = () => {
    setShowModal(false);
    clearButtonRef.current?.focus(); // Return focus to button when closed
  };

  const clearHistory = () => {
    localStorage.removeItem("pastSubmissions");
    setPastSubmissions([]);
    closeModal();
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && showModal) {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [showModal]);

  return (
    <div className="p-6 bg-gray-900 text-white">
      <h2 className="text-xl font-bold mb-4">Booking History</h2>

      {pastSubmissions.length === 0 ? (
        <p>No previous bookings found.</p>
      ) : (
        <>
          <ul className="space-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {pastSubmissions.map((submission, index) => (
                <section key={index} aria-labelledby="ticketDetails">
                <h2 className="sr-only">Ticket Details</h2>
                <div className='flex flex-col w-[300px] h-[600px] p-4 shadow-md bg-[url("/ticket-bg.svg")] mx-auto justify-center gap-[44px]'>
                  <section
                    className="w-[260px] h-[446px] border border-[#24A0B5] bg-[#031E21] rounded-[16px] p-[14px] flex flex-col justify-center"
                    role="group"
                    aria-labelledby="ticketTitle"
                  >
                    <div className="mt-[15px] text-center mb-[20px]">
                      <h2 id="ticketTitle" className="font-roadrage text-[34px] mb-1">
                        Techember Fest ”25
                      </h2>
                      <p className="font-roboto text-[10px] mb-1">
                        📍 04 Rumens road, Ikoyi, Lagos
                      </p>
                      <p className="font-roboto text-[10px]">
                        📅 March 15, 2025 | 7:00 PM
                      </p>
                    </div>
                    <div className="flex mb-[20px] mx-auto w-[140px] h-[140px]">
                      <img
                        src={submission.avatar}
                        alt={`Avatar of ${submission.fullName}`}
                        className="border-2 w-full h-full object-cover border-[#24A0B5] rounded-[12px]"
                      />
                    </div>
        
                    <div
                      className="grid grid-cols-2 font-roboto bg-[#08343C] border border-[#133D44] text-white p-1 rounded-[8px] max-h-[200px] overflow-hidden"
                      role="table"
                    >
                      <div
                        className="p-1 border-r border-b border-[#12464E]"
                        role="row"
                      >
                        <p className="text-[10px] text-gray-400">Enter your name</p>
                        <p className="font-bold text-xs" role="cell">
                          {submission.fullName}
                        </p>
                      </div>
                      <div className="p-1 border-b border-[#12464E]" role="row">
                        <p className="text-[10px] text-gray-400">Enter your email *</p>
                        <p className="font-bold text-xs" role="cell">
                          {submission.email}
                        </p>
                      </div>
                      <div
                        className="p-1 border-r border-b border-[#12464E]"
                        role="row"
                      >
                        <p className="text-[10px] text-gray-400">Ticket Type:</p>
                        <p className="text-[10px]" role="cell">
                          {submission.ticketType}
                        </p>
                      </div>
                      <div className="p-1 border-b border-[#12464E]" role="row">
                        <p className="text-[10px] text-gray-400">Ticket for:</p>
                        <p className="text-[10px]" role="cell">
                          {submission.ticketAmount}
                        </p>
                      </div>
                      <div className="p-2 col-span-2" role="row">
                        <p className="text-[10px] text-gray-400">Special request?</p>
                        <p className="text-[10px]" role="cell">
                          {submission.message || "No special request"}
                        </p>
                      </div>
                    </div>
                    <div></div>
                  </section>
                  <div className="flex justify-center">
                    <img
                      src="/barcode.svg"
                      alt="QR Code"
                      className="w-[236px] h-[68px]"
                    />
                  </div>
                </div>
              </section>
            ))}
          </ul>

          <button
            ref={clearButtonRef}
            onClick={openModal}
            className="mt-6 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-300"
          >
            Clear Booking History
          </button>
        </>
      )}

      {showModal && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <div
            ref={modalRef}
            tabIndex="-1"
            className="bg-[#08343C] text-white p-6 rounded-lg shadow-lg w-80"
          >
            <h3 id="modal-title" className="text-lg font-bold mb-4">
              Are you sure?
            </h3>
            <p id="modal-description" className="text-sm mb-4">
              This action can't be undone.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={closeModal}
                className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={clearHistory}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-300"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingHistory;
