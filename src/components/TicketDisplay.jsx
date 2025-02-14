import html2canvas from "html2canvas";

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

  const handleDownload = async () => {
    const ticket = document.getElementById("ticketDetails");
  
    if (!ticket) return;
  
    const canvas = await html2canvas(ticket, {
      backgroundColor: null, 
      useCORS: true,
    });
  
    const image = canvas.toDataURL("image/png");
  
    const link = document.createElement("a");
    link.href = image;
    link.download = "ticket.png";
    link.click();
  };
  
  

  return (
    <div role="main" aria-labelledby="ticketHeader">
      <header className="mb-8">
        <div className="flex justify-between font-jeju items-center">
          <h1 id="ticketHeader" className="text-[32px]">
            Ready
          </h1>
          <span>Step 3/3</span>
        </div>
        <div className="mt-2 h-1 bg-[#0E464F] relative">
          <div className="bg-[#24A0B5] h-1 w-2/5" aria-hidden="true"></div>
        </div>
      </header>

      <div className="text-center text-[#fafafa] mb-8" aria-live="polite">
        <h2 className="font-alatsi mb-4 text-[32px]">Your Ticket is Booked!</h2>
        <p className="font-roboto max-w-[287px] lg:max-w-full mx-auto">
          Check your email for a copy or you can download
        </p>
      </div>

      <section id="ticketDetails" aria-labelledby="ticketDetails">
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
                src={userData.avatar}
                alt={`Avatar of ${userData.fullName}`}
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
                  {userData.fullName}
                </p>
              </div>
              <div className="p-1 border-b border-[#12464E]" role="row">
                <p className="text-[10px] text-gray-400">Enter your email *</p>
                <p className="font-bold text-xs" role="cell">
                  {userData.email}
                </p>
              </div>
              <div
                className="p-1 border-r border-b border-[#12464E]"
                role="row"
              >
                <p className="text-[10px] text-gray-400">Ticket Type:</p>
                <p className="text-[10px]" role="cell">
                  {userData.ticketType}
                </p>
              </div>
              <div className="p-1 border-b border-[#12464E]" role="row">
                <p className="text-[10px] text-gray-400">Ticket for:</p>
                <p className="text-[10px]" role="cell">
                  {userData.ticketAmount}
                </p>
              </div>
              <div className="p-2 col-span-2" role="row">
                <p className="text-[10px] text-gray-400">Special request?</p>
                <p className="text-[10px]" role="cell">
                  {userData.message || "No special request"}
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

      <div className="flex font-jeju gap-4 flex-col-reverse lg:flex-row mt-[56px]">
        <button
          type="button"
          className="mt-4 w-full bg-transparent border border-[#24A0B5] hover:bg-[#24A0B5] text-white px-4 py-2 rounded-[8px] transition-all focus:outline-none focus:ring-2 focus:ring-[#24A0B5]"
          onClick={handleNewBooking}
          aria-label="Book another ticket"
        >
          Book Another Ticket
        </button>
        <button
          type="button"
          onClick={handleDownload}
          className="mt-4 bg-[#24A0B5] w-full hover:bg-transparent border border-[#24A0B5] text-white px-4 py-2 rounded-[8px] transition-all focus:outline-none focus:ring-2 focus:ring-[#24A0B5]"
          aria-label="Download your ticket"
        >
          Download Ticket
        </button>
      </div>
    </div>
  );
};

export default TicketDisplay;
