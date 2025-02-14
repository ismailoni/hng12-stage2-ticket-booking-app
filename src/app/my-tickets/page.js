"use client";
import { useState, useEffect } from "react";

const BookingHistory = () => {
  const [pastSubmissions, setPastSubmissions] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const storedSubmissions = JSON.parse(localStorage.getItem("pastSubmissions")) || [];
    setPastSubmissions(storedSubmissions);
  }, []);

  const clearHistory = () => {
    localStorage.removeItem("pastSubmissions");
    setPastSubmissions([]);
    setShowModal(false); 
  };

  return (
    <div className="p-6 bg-gray-900 text-white">
      <h2 className="text-xl font-bold mb-4">Booking History</h2>

      {pastSubmissions.length === 0 ? (
        <p>No previous bookings found.</p>
      ) : (
        <>
          <ul className="space-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {pastSubmissions.map((submission, index) => (
              <section key={index} className="">
                <div className='flex w-[300px] h-[600px] inverted-radius p-4 shadow-md bg-[url("/ticket-bg.svg")] mx-auto justify-center'>
                  <section className="w-[260px] h-[446px] border border-[#24A0B5] bg-[#031E21] rounded-[16px] p-[14px] flex flex-col justify-center">
                    <div className="mt-[15px] text-center mb-[20px]">
                      <h2 className="font-roadrage text-[34px] mb-1">
                        Techember Fest ”25
                      </h2>
                      <p className="font-roboto text-[10px] mb-1">
                        📍 04 Rumens road, Ikoyi, Lagos
                      </p>
                      <p className="font-roboto text-[10px]">
                        📅 March 15, 2025 | 7:00 PM
                      </p>
                    </div>
                    <div className="mb-[20px] mx-auto">
                      <img
                        src={submission.avatar}
                        alt="User Avatar"
                        className="border-2 max-w-[140px] max-h-[140px] border-[#24A0B5] rounded-[12px]"
                      />
                    </div>

                    <div className="grid grid-cols-2 font-roboto bg-[#08343C] border border-[#133D44] text-white p-1 rounded-[8px]">
                      <div className="p-1 border-r border-b border-[#12464E]">
                        <p className="text-[10px] text-gray-400">Enter your name</p>
                        <p className="font-bold text-xs">{submission.fullName}</p>
                      </div>
                      <div className="p-1 border-b border-[#12464E]">
                        <p className="text-[10px] text-gray-400">Enter your email *</p>
                        <p className="font-bold text-xs">{submission.email}</p>
                      </div>
                      <div className="p-1 border-r border-b border-[#12464E]">
                        <p className="text-[10px] text-gray-400">Ticket Type:</p>
                        <p className="text-[10px]">{submission.ticketType}</p>
                      </div>
                      <div className="p-1 border-b border-[#12464E]">
                        <p className="text-[10px] text-gray-400">Ticket for:</p>
                        <p className="text-[10px]">{submission.ticketAmount}</p>
                      </div>
                      <div className="p-2">
                        <p className="text-[10px] text-gray-400">Special request?</p>
                        <p className="text-[10px]">
                          {submission.message || "No special request"}
                        </p>
                      </div>
                    </div>
                  </section>
                </div>
              </section>
            ))}
          </ul>

          <button 
            onClick={() => setShowModal(true)} 
            className="mt-6 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            Clear Booking History
          </button>
        </>
      )}

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#08343C] text-white p-6 rounded-lg shadow-lg w-80">
            <h3 className="text-lg font-bold mb-4">Are you sure?</h3>
            <p className="text-sm mb-4">This action can't be undone.</p>
            <div className="flex justify-end space-x-4">
              <button 
                onClick={() => setShowModal(false)}
                className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
              >
                Cancel
              </button>
              <button 
                onClick={clearHistory}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
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
