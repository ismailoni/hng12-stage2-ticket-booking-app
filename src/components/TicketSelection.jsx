import { useState, useEffect } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import TicketCard from "./TicketCard";



const TicketSelection = ({ onNext, formData }) => {
  const [ticketType, setTicketType] = useState(
    formData.ticketType || "Regular"
  );
  const [ticketAmount, setTicketAmount] = useState(
    formData.ticketAmount || "1"
  );

  useEffect(() => {
    localStorage.setItem(
      "ticketSelection",
      JSON.stringify({ ticketType, ticketAmount })
    );
  }, [ticketType, ticketAmount]);

  const handleNext = () => {
    if (!ticketType) {
      alert("Please select a ticket type.");
      return;
    }
    onNext({ ticketType, ticketAmount });
  };

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
    <div>
      <header className="mb-8">
        <div className="flex justify-between font-jeju items-center">
          <h1 className="text-[32px]">Ticket Selection</h1>
          <span>Step 1/3</span>
        </div>
        <div className="mt-2 h-1 bg-[#0E464F] relative">
          <div className="bg-[#24A0B5] h-1 w-1/3"></div>
        </div>
      </header>
      <section className="bg-[#08252B] border border-[#0E464F] rounded-[32px] p-6">
        <div className="border-b-[2px] border-x-[2px] border-[#07373F] text-[#fafafa] p-6 rounded-[24px] flex flex-col text-center items-center">
          <h1 className="font-roadrage text-[48px] md:text-[62px] mb-2 transition-all">
            Techember Fest ”25
          </h1>
          <p className="max-w-[340px] font-roboto mb-2">
            Join us for an unforgettable experience at [Event Name]! Secure your
            spot now.
          </p>
          <p className="font-roboto">
            📍 [Event Location] <span className="mx-4">| |</span> March 15, 2025
            | 7:00 PM
          </p>
        </div>

        <div className="w-full h-1 bg-[#07373F] my-8"></div>

        <p className="font-roboto">Select Ticket Type:</p>

        <ToggleGroup
          type="single"
          value={ticketType}
          onValueChange={setTicketType}
          className="grid grid-cols-1 md:grid-cols-3 md:gap-2 bg-[#052228] border border-[#07373F] p-4 rounded-[24px]"
        >
          {[
            {
              label: <TicketCard price={"Free"} type={"Regular Access"} />,
              value: "Regular",
            },
            {
              label: <TicketCard price={"$150"} type={"Vip Access"} />,
              value: "VIP",
            },
            {
              label: <TicketCard price={"$250"} type={"VVip Access"} />,
              value: "VVIP",
            },
          ].map(({ label, value }) => (
            <ToggleGroupItem
              key={value}
              value={value}
              variant={ticketType === value ? "default" : "outline"}
            >
              {label}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>

        <section className="mt-8">
          <label className="text-[#fafafa] font-roboto mb-2">
            Number of Tickets:
          </label>
          <select
            value={ticketAmount}
            onChange={(e) => setTicketAmount(e.target.value)}
            className="w-full p-3 text-white rounded-[12px] border border-[#07373F] bg-transparent"
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num} className="bg-[#07373F] text-white">{num}</option>
            ))}
          </select>
        </section>
        <section className="flex font-jeju gap-4 md:gap-6 flex-col-reverse md:flex-row">
          <button
            onClick={handleNewBooking}
            className="mt-4 w-full bg-transparent border border-[#24A0B5] hover:bg-[#24A0B5] text-white px-4 py-2 rounded-[8px] transition-all"
          >
            Cancel
          </button>
          <button
            onClick={handleNext}
            className="mt-4 bg-[#24A0B5] w-full hover:bg-transparent border border-[#24A0B5] text-white px-4 py-2 rounded-[8px] transition-all"
          >
            Next
          </button>
        </section>
      </section>
    </div>
  );
};

export default TicketSelection;
