import { useState, useEffect } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const TicketSelection = ({ onNext, formData }) => {
  const [ticketType, setTicketType] = useState(formData.ticketType || "");
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
    <div className="p-6 bg-gray-800 rounded-lg text-white">
      <h2 className="text-xl font-semibold mb-4">Select Your Ticket</h2>
      
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
