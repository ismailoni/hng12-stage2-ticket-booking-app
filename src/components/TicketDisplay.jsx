
const TicketDisplay = ({ userData }) => {
  const handleNewBooking = () => {
    const pastSubmissions =
      JSON.parse(localStorage.getItem("pastSubmissions")) || [];

    pastSubmissions.push(userData);
    localStorage.setItem("pastSubmissions", JSON.stringify(pastSubmissions));

    localStorage.setItem(
      "formData",
      JSON.stringify({
        ticketType: "",
        ticketAmount: "1",
        fullName: "",
        email: "",
        message: "",
        avatar: "",
      })
    );

    localStorage.setItem("currentStep", "1");
    window.location.reload();
  };

  console.log(userData);

  return (
    <div>
      <header className="mb-8">
        <div className="flex justify-between font-jeju items-center">
          <h1 className="text-[32px]">Ready</h1>
          <span>Step 3/3</span>
        </div>
        <div className="mt-2 h-1 bg-[#0E464F] relative">
          <div className="bg-[#24A0B5] h-1 w-2/5"></div>
        </div>
      </header>

      <div className="text-center text-[#fafafa] mb-8">
        <h2 className="font-alatsi mb-4 text-[32px]">Your Ticket is Booked!</h2>
        <p className="font-roboto max-w-[287px] lg:max-w-full">
          Check your email for a copy or you can download
        </p>
      </div>

      <section className="">
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
                src={userData.avatar}
                alt="User Avatar"
                className="border-2 max-w-[140px] max-h-[140px] border-[#24A0B5] rounded-[12px]"
              />
            </div>

            <div className="grid grid-cols-2 font-roboto bg-[#08343C] border border-[#133D44] text-white p-1 rounded-[8px]">
              <div className="p-1 border-r border-b border-[#12464E]">
                <p className="text-[10px] text-gray-400">Enter your name</p>
                <p className="font-bold text-xs">{userData.fullName}</p>
              </div>
              <div className="p-1 border-b border-[#12464E]">
                <p className="text-[10px] text-gray-400">Enter your email *</p>
                <p className="font-bold text-xs">{userData.email}</p>
              </div>
              <div className="p-1 border-r border-b border-[#12464E]">
                <p className="text-[10px] text-gray-400">Ticket Type:</p>
                <p className="text-[10px]">{userData.ticketType}</p>
              </div>
              <div className="p-1 border-b border-[#12464E]">
                <p className="text-[10px] text-gray-400">Ticket for:</p>
                <p className="text-[10px]">{userData.ticketAmount}</p>
              </div>
              <div className="p-2">
                <p className="text-[10px] text-gray-400">Special request?</p>
                <p className="text-[10px]">
                  {userData.message || "No special request"}
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>

      <div className="flex font-jeju gap-4 flex-col-reverse lg:flex-row mt-[56px]">
        <button
          type="button"
          className="mt-4 w-full bg-transparent border border-[#24A0B5] hover:bg-[#24A0B5] text-white px-4 py-2 rounded-[8px] transition-all"
          onClick={handleNewBooking}
        >
          Book Another Ticket
        </button>
        <button
          type="button"
          className="mt-4 bg-[#24A0B5] w-full hover:bg-transparent border border-[#24A0B5] text-white px-4 py-2 rounded-[8px] transition-all"
        >
          Download Ticket
        </button>
      </div>
    </div>
  );
};

export default TicketDisplay;
