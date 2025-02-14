import { FaGithub } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";

export default function page() {
  return (
    <div className="flex justify-center items-center font-roboto text-[16px] bg-[#041E23] ">
      <div className="max-w-[800px] bg-transparent p-[48px] rounded-[40px] border border-[#0E464F] text-white mt-[86px]">
        <p className="mb-8">Event Ticket Booking UI – Open Source Practice Project 🎟️</p>
        <p className="mb-8">Overview</p>
        <p className="mb-8">
          This is a beginner-friendly yet practical Event Ticket Booking UI designed for developers
          to clone, explore, and build upon. The design focuses on a seamless, login-free ticket
          reservation flow, allowing users to book event tickets quickly and efficiently.
        </p>
        <p className="mb-8">
        The project consists of a three-step ticket booking flow, and developers
        can extend it further by integrating payment solutions, user
        authentication (optional), and ticket validation systems.
        </p>
        <p className="mb-8">
        Flow & Features
        </p>
        <div className="mb-8">
          <p>1️⃣ Ticket Selection</p>
          <ul>
            <li> Users can browse available tickets (Free & Paid).</li>
            <li>Ticket options are displayed in a list or card view.</li>
            <li>For Free Tickets → Clicking “Get Free Ticket” proceeds to attendee details.</li>
            <li>For Paid Tickets → Clicking “Purchase Ticket” would ideally open a payment modal.</li>
          </ul>
        </div>
        <div className="mb-8">
          <p>2️⃣ Attendee Details Form</p>
          <ul>
            <li>Users input their Name, Email, and optional Phone Number.</li>
            <li>Profile picture upload option with preview functionality.</li>
            <li>Ticket summary is visible to ensure users review their details</li>
          </ul>
        </div>
        <div className="mb-8">
          <p>3️⃣ Payment or Success Page</p>
          <ul>
            <li>If the ticket is free, the user is taken directly to the Ticket Confirmation Page.</li>
            <li>If the ticket is paid, developers can integrate Stripe, Paystack, or Flutterwave to process payments before showing the confirmation page.</li>
            <li>Upon successful booking, users should receive:</li>
            <li>A visual ticket preview with a unique QR Code.</li>
            <li>An option to download the ticket as PDF or save it to their device.</li>
            <li>An email confirmation containing ticket details.</li>
          </ul>
        </div>
        <p className="mb-8">How to Build This 🚀</p>
        <p className="mb-8">This UI can be implemented using:</p>
        <div className="mb-8">
          <p>📌 Frontend (Next.js or React)</p>
          <ul>
            <li>Component Breakdown:</li>
            <li>TicketCard.tsx → Displays ticket details</li>
            <li>AttendeeForm.tsx → Captures user details</li>
            <li>PaymentModal.tsx → Handles payment processing</li>
            <li>SuccessScreen.tsx → Shows the final ticket preview</li>
            <li>State Management: React’s Context API, Zustand, or Redux (if needed)</li>
            <li>File Handling: Users should be able to upload images (profile picture for ticket) using Firebase Storage, Cloudinary, or local preview with URL.createObjectURL()</li>
          </ul>
        </div>
        <div className="mb-8">
          <p>📌 Backend (Optional)</p>
          <ul>
            <li>If persistence is required, a backend can be built using:</li>
            <li>Node.js & Express or Firebase Functions</li>
            <li>Database: MongoDB, PostgreSQL, or Firebase Firestore to store ticket records</li>
          </ul>
        </div>
        <div className="mb-8">
          <p>📌 Payment Integration</p>
          <ul>
            <li>For paid events, developers should integrate:</li>
            <li>Stripe Checkout (for international transactions)</li>
            <li>Paystack or Flutterwave (for African users)</li>
          </ul> 
        </div>
        <div className="mb-8">
          <p>What You’ll Learn 🧑‍💻</p>
          <ul>
            <li>File handling & validation (profile picture uploads).</li>
            <li>Dynamic UI updates based on ticket selection.</li>
            <li>Persisting bookings using local state or a backend.</li>
            <li>Integrating payment gateways for ticket purchases.</li>
            <li>Generating & validating QR Codes for event check-in (Advanced).</li>
          </ul>
        </div>
        <p className="mb-8">Need Help? Reach Out! 💬</p>
        <p className="mb-8 text-4xl text-center">💛 Enjoy</p>
        <div className="flex font-jeju gap-[32px] flex-col-reverse lg:flex-row mt-[56px] border border-[#0E464F] py-[16px] px-[48px] rounded-[16px]">
        <button
          type="button"
          className="flex gap-1 justify-center items-center w-full bg-transparent border border-[#24A0B5] hover:bg-[#24A0B5] text-white px-6 py-3 rounded-[8px] transition-all"
        >
          <FiFileText /> Design File
        </button>
        <button
          type="button"
          className="flex gap-1 justify-center items-center bg-[#24A0B5] w-full hover:bg-transparent border border-[#24A0B5] text-white px-6 py-3 rounded-[8px] transition-all"
        >
          <FaGithub /> Github Code
        </button>
      </div>

     
      </div>
        
      
      </div>

  );
}
