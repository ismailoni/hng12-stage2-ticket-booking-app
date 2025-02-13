'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';


const links = [
  {
      name: 'Events',
      url: '/'
  },
  {
      name: 'My Tickets',
      url: '/my-tickets'
  },
  {
      name: 'About Project',
      url: '/about'
  }
]

export default function Navbar() {

  const pathname = usePathname();
  console.log(pathname);

  return (
    
    <nav className="w-[80%] mx-auto mt-6 text-white py-4 px-3 flex justify-between items-center  border border-[#197686] rounded-xl font-jeju">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <Image src="/logo.png" width={92} height={36} alt="Logo" /> 
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 text-lg">
        {links.map((link, i) => {
                  return (
                    <Link href={link.url} key={i} className={`${link.url === pathname ? 'text-white after:content-[""] after:h-[2px] after:bg-white after:w-full after:scale-x-100 border-white' : 'text-[#B3B3B3]'} hover:text-white transition-all`}>
                      {link.name}
                    </Link>
                  )
          })}
      </div>

      {/* Call to Action */}
      <Button className="flex bg-white text-[#0A0C11] py-2 px-4 rounded-lg hover:bg-[#24A0B5] hover:text-[#D9D9D9] border border-[#D9D9D9]  group">
        MY TICKETS <ArrowRight size={16} className='group-hover:-rotate-[45deg] transition-all'/>
      </Button>

    </nav>
  );
}
