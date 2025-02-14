import { useState, useEffect, useRef } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import TicketCard from "./TicketCard";

const TicketSelection = ({ onNext, formData }) => {
  const [ticketType, setTicketType] = useState(
    formData.ticketType || "Regular"
  );
  const [ticketAmount, setTicketAmount] = useState(
    formData.ticketAmount || "1"
  );

  const ticketOptions = [
    { label: <TicketCard price={"Free"} type={"Regular Access"} />, value: "Regular" },
    { label: <TicketCard price={"$150"} type={"VIP Access"} />, value: "VIP" },
    { label: <TicketCard price={"$250"} type={"VVIP Access"} />, value: "VVIP" },
  ];

  const ticketRefs = useRef([]);

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

  const handleKeyPress = (e, index) => {
    if (e.key === "KeyDown") {
      setTicketType(ticketOptions[index].value);
    }
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      const nextIndex = (index + 1) % ticketOptions.length;
      ticketRefs.current[nextIndex]?.focus();
    }
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      const prevIndex = (index - 1 + ticketOptions.length) % ticketOptions.length;
      ticketRefs.current[prevIndex]?.focus();
    }
  };
  

  return (
    <div>
      <header className="mb-8">
        <div className="flex justify-between font-jeju items-center">
          <h1 className="text-[32px]" id="ticket-selection-title">
            Ticket Selection
          </h1>
          <span>Step 1/3</span>
        </div>
        <div className="mt-2 h-1 bg-[#0E464F] relative">
          <div className="bg-[#24A0B5] h-1 w-1/3"></div>
        </div>
      </header>

      <section className="border border-[#0E464F] rounded-[32px] p-6 background">
        <div
          className="border-b-[2px] border-x-[2px] border-[#07373F] text-[#fafafa] p-6 rounded-[24px] flex flex-col text-center items-center"
          aria-labelledby="event-title"
        >
          <h1 id="event-title" className="font-roadrage text-[48px] md:text-[62px] mb-2 transition-all">
            Techember Fest ’25
          </h1>
          <p className="max-w-[340px] font-roboto mb-2">
            Join us for an unforgettable experience at Techember Fest! Secure your spot now.
          </p>
          <p className="font-roboto" aria-label="Event details">
            📍 Event Location <span className="mx-4">| |</span> March 15, 2025 | 7:00 PM
          </p>
        </div>

        <div className="w-full h-1 bg-[#07373F] my-8"></div>

        <p className="font-roboto" id="ticket-type-label">
          Select Ticket Type:
        </p>

        <ToggleGroup
          type="single"
          value={ticketType}
          onValueChange={setTicketType}
          className="grid grid-cols-1 lg:grid-cols-3 md:gap-2 bg-[#052228] border border-[#07373F] p-4 rounded-[24px]"
          role="radiogroup"
          aria-labelledby="ticket-type-label"
        >
          {ticketOptions.map(({ label, value }, index) => (
            <ToggleGroupItem
            key={value}
            value={value}
            variant={ticketType === value ? "default" : "outline"}
            role="radio"
            aria-checked={ticketType === value}
            tabIndex={ticketType === value ? 0 : -1}
            ref={(el) => (ticketRefs.current[index] = el)}
            onKeyDown={(e) => handleKeyPress(e, index)}
            onClick={() => setTicketType(value)}
          >
            {label}
          </ToggleGroupItem>
          
          ))}
        </ToggleGroup>

        <section className="mt-8">
          <label className="text-[#fafafa] font-roboto mb-2" htmlFor="ticket-amount">
            Number of Tickets:
          </label>
          <select
            id="ticket-amount"
            value={ticketAmount}
            onChange={(e) => setTicketAmount(e.target.value)}
            className="w-full p-3 text-white rounded-[12px] border border-[#07373F] bg-transparent"
            aria-describedby="ticket-amount-description"
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num} className="bg-[#07373F] text-white">
                {num}
              </option>
            ))}
          </select>
          <p id="ticket-amount-description" className="sr-only">
            Select the number of tickets you want to purchase.
          </p>
        </section>

        <section className="flex font-jeju gap-4 md:gap-6 flex-col-reverse lg:flex-row">
          <button
            onClick={() => window.location.reload()}
            className="mt-4 w-full bg-transparent border border-[#24A0B5] hover:bg-[#24A0B5] text-white px-4 py-2 rounded-[8px] transition-all"
            aria-label="Cancel ticket selection and start over"
          >
            Cancel
          </button>
          <button
            onClick={handleNext}
            className="mt-4 bg-[#24A0B5] w-full hover:bg-transparent border border-[#24A0B5] text-white px-4 py-2 rounded-[8px] transition-all"
            aria-label="Proceed to the next step"
          >
            Next
          </button>
        </section>
      </section>
    </div>
  );
};

export default TicketSelection;
