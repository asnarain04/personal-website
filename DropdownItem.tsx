import React, { useState } from 'react';

interface DropdownItemProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function DropdownItem({ title, subtitle, children }: DropdownItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 border-2 border-black shadow-[2px_2px_0_rgba(0,0,0,1)]">
      {/* Header Bar */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#D9D9D9] px-3 py-2 flex items-start cursor-pointer"
      >
        <span className="mr-2">{isOpen ? '▾' : '▸'}</span>
        <div>
          <div className="font-bold">{title}</div>
          {subtitle && <div className="text-sm text-gray-700">{subtitle}</div>}
        </div>
      </div>

      {/* Body */}
      {isOpen && (
        <div className="bg-[#F2F2F2] px-4 py-3 text-sm">
          {children}
        </div>
      )}
    </div>
  );
}