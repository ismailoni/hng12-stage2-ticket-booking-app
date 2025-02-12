'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-[80%] mx-auto mt-6 text-white py-4 px-3 flex justify-between items-center  border border-[#197686] rounded-xl">
      {/* Logo Section */}
      <div className="flex items-center gap-2" onClick={() => setIsOpen(!isOpen)}>
        <Image src="/logo.png" width={92} height={36} alt="Logo" />
        {isOpen ? <X size={28} /> : ""}
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 text-lg">
        <Link href="#events" className="hover:underline">Events</Link>
        <Link href="/my-tickets" className="hover:underline">My Tickets</Link>
        <Link href="#about" className="hover:underline">About Project</Link>
      </div>

      {/* Call to Action */}
      <Button className="hidden md:block bg-white text-black font-semibold py-2 px-4 rounded-lg hover:bg-gray-200">
        MY TICKETS →
      </Button>

      {/* Mobile Menu Toggle */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
        
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#03181f] shadow-lg flex flex-col items-center gap-4 py-4 md:hidden border border-[#0a2a35] rounded-xl">
          <Link href="#events" className="text-lg hover:underline" onClick={() => setIsOpen(false)}>Events</Link>
          <Link href="#my-tickets" className="text-lg hover:underline" onClick={() => setIsOpen(false)}>My Tickets</Link>
          <Link href="#about" className="text-lg hover:underline" onClick={() => setIsOpen(false)}>About Project</Link>
          <Button className="bg-white text-black font-semibold py-2 px-4 rounded-lg hover:bg-gray-200">
            MY TICKETS →
          </Button>
        </div>
      )}
    </nav>
  );
}
