"use client";
import { FaGithub } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";

export default function EventBookingInfo() {
  return (
    <div className="flex justify-center items-center font-roboto text-[16px] bg-[#041E23] min-h-screen">
      <div
        className="max-w-[800px] bg-transparent p-[48px] rounded-[40px] border border-[#0E464F] text-white mt-[86px]"
        role="main"
        aria-labelledby="event-title"
      >
        <h1 id="event-title" className="mb-8 text-xl font-bold">
          Event Ticket Booking UI – Open Source Practice Project 🎟️
        </h1>

        <section className="mb-8">
          <h2 className="font-semibold">Overview</h2>
          <p>
            This is a beginner-friendly yet practical Event Ticket Booking UI designed for developers
            to clone, explore, and build upon. The design focuses on a seamless, login-free ticket
            reservation flow, allowing users to book event tickets quickly and efficiently.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-semibold">Flow & Features</h2>

          <div className="mb-6">
            <h3 className="font-medium">1️⃣ Ticket Selection</h3>
            <ul className="list-disc list-inside space-y-2" aria-label="Ticket selection steps">
              <li>Users can browse available tickets (Free & Paid).</li>
              <li>Ticket options are displayed in a list or card view.</li>
              <li>
                For Free Tickets → Clicking <strong>“Get Free Ticket”</strong> proceeds to attendee details.
              </li>
              <li>
                For Paid Tickets → Clicking <strong>“Purchase Ticket”</strong> opens a payment modal.
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="font-medium">2️⃣ Attendee Details Form</h3>
            <ul className="list-disc list-inside space-y-2" aria-label="Attendee details form steps">
              <li>Users input their Name, Email, and optional Phone Number.</li>
              <li>Profile picture upload option with preview functionality.</li>
              <li>Ticket summary is visible to ensure users review their details.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="font-medium">3️⃣ Payment or Success Page</h3>
            <ul className="list-disc list-inside space-y-2" aria-label="Payment and success page details">
              <li>If the ticket is free, the user is taken directly to the Ticket Confirmation Page.</li>
              <li>If the ticket is paid, developers can integrate Stripe, Paystack, or Flutterwave.</li>
              <li>
                Upon successful booking, users receive:
                <ul className="list-disc list-inside ml-4">
                  <li>A visual ticket preview with a unique QR Code.</li>
                  <li>An option to download the ticket as a PDF.</li>
                  <li>An email confirmation containing ticket details.</li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="font-semibold">What You’ll Learn 🧑‍💻</h2>
          <ul className="list-disc list-inside space-y-2" aria-label="Learning outcomes">
            <li>File handling & validation (profile picture uploads).</li>
            <li>Dynamic UI updates based on ticket selection.</li>
            <li>Persisting bookings using local state or a backend.</li>
            <li>Integrating payment gateways for ticket purchases.</li>
            <li>Generating & validating QR Codes for event check-in (Advanced).</li>
          </ul>
        </section>

        <h2 className="text-4xl text-center text-yellow-400">💛 Enjoy</h2>

        <div
          className="flex font-jeju gap-[32px] flex-col-reverse lg:flex-row mt-[56px] border border-[#0E464F] py-[16px] px-[48px] rounded-[16px]"
          role="navigation"
          aria-label="Action buttons"
        >
          <button
            type="button"
            className="flex gap-1 justify-center items-center w-full bg-transparent border border-[#24A0B5] hover:bg-[#24A0B5] text-white px-6 py-3 rounded-[8px] transition-all"
            aria-label="Download design file"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && alert("Opening design file")}
            onClick={() => alert("Opening design file")}
          >
            <FiFileText /> Design File
          </button>

          <button
            type="button"
            className="flex gap-1 justify-center items-center bg-[#24A0B5] w-full hover:bg-transparent border border-[#24A0B5] text-white px-6 py-3 rounded-[8px] transition-all"
            aria-label="View GitHub repository"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && alert("Opening GitHub repository")}
            onClick={() => alert("Opening GitHub repository")}
          >
            <FaGithub /> Github Code
          </button>
        </div>
      </div>
    </div>
  );
}
