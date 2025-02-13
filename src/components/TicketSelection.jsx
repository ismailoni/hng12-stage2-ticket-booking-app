import { useState, useEffect } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const TicketSelection = ({ onNext, formData }) => {
  const [ticketType, setTicketType] = useState(formData.ticketType || "Regular");
  const [ticketAmount, setTicketAmount] = useState(formData.ticketAmount || "1");

  useEffect(() => {
    localStorage.setItem("ticketSelection", JSON.stringify({ ticketType, ticketAmount }));
  }, [ticketType, ticketAmount]);

  const handleNext = () => {
    if (!ticketType) {
      alert("Please select a ticket type.");
      return;
    }
    onNext({ ticketType, ticketAmount });
  };

  return (
    <div>
      <header className="mb-8">
        <div className="flex justify-between font-jeju items-center">
          <h1 className="text-[32px]">
            Ticket Selection
          </h1>
          <span>Step 1/3</span>
        </div>
        <div className="mt-2 h-1 bg-[#0E464F] relative">
          <div className="bg-[#24A0B5] h-1 w-1/3"></div>
        </div>
      </header>
      <section className="bg-[#08252B] border border-[#0E464F] rounded-[32px] p-6">
        <div className="border-b-[2px] border-x-[2px] border-[#07373F] p-6 rounded-[24px]">
          <h1 className="font-roadrage text-[62px] text-[#fafafa]">Techember Fest ”25</h1>
        </div>
      </section>
      
      <ToggleGroup type="single" value={ticketType} onValueChange={setTicketType} className="flex space-x-2">
        {[
          { label: "Regular", value: "Regular" },
          { label: "VIP", value: "VIP" },
          { label: "VVIP", value: "VVIP" },
        ].map(({ label, value }) => (
          <ToggleGroupItem key={value} value={value} variant={ticketType === value ? "default" : "outline"}>
            {label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>

      <div className="mt-4">
        <label className="block">Number of Tickets:</label>
        <select
          value={ticketAmount}
          onChange={(e) => setTicketAmount(e.target.value)}
          className="w-full px-3 py-2 text-black rounded"
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
      </div>

      <button onClick={handleNext} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Next
      </button>
    </div>
  );
};

export default TicketSelection;
