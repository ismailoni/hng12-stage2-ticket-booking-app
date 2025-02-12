import { Button } from '@/components/ui/button';

const TicketDisplay = ({ userData }) => {
  const handleNewBooking = () => {
    // Retrieve past submissions from localStorage
    const pastSubmissions = JSON.parse(localStorage.getItem("pastSubmissions")) || [];
    
    
    // Save current form data to past submissions
    pastSubmissions.push(userData);
    localStorage.setItem("pastSubmissions", JSON.stringify(pastSubmissions));
    
    // Reset current form data without affecting past submissions
    localStorage.setItem("formData", JSON.stringify({
      ticketType: "",
      ticketAmount: "1",
      fullName: "",
      email: "",
      message: "",
      avatar: "",
    }));
    
    // Reset step to 1
    localStorage.setItem("currentStep", "1");
    window.location.reload(); // Refresh page to restart the form
  };
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0A192F] text-white p-6">
      <div className="bg-[#112240] rounded-2xl shadow-lg p-8 max-w-lg text-center border border-[#1E2D45]">
        <h2 className="text-xl font-semibold mb-4">Ready</h2>
        <div className="border-t border-[#1E2D45] w-full mb-4"></div>
        <h3 className="text-lg font-bold">Your Ticket is Booked!</h3>
        <p className="text-sm text-gray-400">You can download or check your email for a copy</p>

        <div className="mt-6 bg-[#0D1B2A] rounded-xl p-4 shadow-md inline-block relative">
          <div className="flex items-center gap-4">
            <img
              src={userData.avatar}
              alt="User Avatar"
              width={50}
              height={50}
              className="rounded-full border border-gray-500"
            />
            <div className="text-left">
              <h4 className="text-white font-medium">{userData.fullName}</h4>
              <p className="text-gray-400 text-sm">{userData.email}</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-300">Ticket Type: <span className="font-semibold text-white">{userData.ticketType}</span></p>
          <div className="mt-4 bg-gray-700 text-white px-4 py-2 rounded-md text-sm">{userData.ticketAmount}</div>
        </div>

        <div className="mt-6 flex gap-4">
          <Button variant="outline" className="border border-gray-600 text-white" onClick={handleNewBooking}>
            Book Another Ticket
          </Button>
          <Button className="bg-blue-500 text-white">Download Ticket</Button>
        </div>
      </div>
    </div>
  );
};

export default TicketDisplay;
