'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    {
      label: 'Club Info',
      href: '/club-info',
      dropdown: [
        { href: '/membership', label: 'Membership' },
        { href: '/constitution', label: 'Constitution' },
        { href: '/history', label: 'History' },
        { href: '/policies-procedures', label: 'Policies and Procedures' },
        { href: '/club-officers', label: 'Club Officers' },
        { href: '/club-commodores', label: 'Club Commodores' },
      ]
    },
    {
      label: 'Sailing',
      href: '/sailing',
      dropdown: [
        { href: 'https://dutyman.biz/dmmain.aspx?id=G0001650', label: 'Duty Roster', external: true },
        { href: '/results', label: 'Results' },
        { href: '/sailing-calendar-sis', label: 'Sailing Calendar & SI\'s' },
        { href: '/live-feeds', label: 'Live Feeds' },
        { href: '/junior-sailing', label: 'Junior Sailing' },
      ]
    },
    { href: '/training', label: 'Training' },
    { href: '/calendar', label: 'Calendar' },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/gsc-logo.png"
              alt="Greystones Sailing Club Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="text-xl font-bold text-blue-900">
              Greystones Sailing Club
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.dropdown ? (
                  <div className="cursor-pointer">
                    <span className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 flex items-center">
                      {item.label}
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                    {/* Dropdown Menu */}
                    {activeDropdown === item.label && (
                      <div className="absolute top-full left-0 pt-2 w-64 z-50">
                        <div className="bg-white rounded-lg shadow-lg border py-2">
                          {item.dropdown.map((dropdownItem) => 
                            dropdownItem.external ? (
                              <a
                                key={dropdownItem.href}
                                href={dropdownItem.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
                              >
                                {dropdownItem.label}
                                <svg className="w-3 h-3 inline ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              </a>
                            ) : (
                              <Link
                                key={dropdownItem.href}
                                href={dropdownItem.href}
                                className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
                              >
                                {dropdownItem.label}
                              </Link>
                            )
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href!}
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center justify-center w-8 h-8 text-gray-700 hover:text-blue-600"
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 transform transition-transform duration-200 ${
                isMenuOpen ? 'rotate-45' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t max-h-96 overflow-y-auto">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.dropdown ? (
                    <div>
                      <div className="px-3 py-2 text-gray-900 font-semibold text-sm uppercase tracking-wider">
                        {item.label}
                      </div>
                      {item.dropdown.map((dropdownItem) =>
                        dropdownItem.external ? (
                          <a
                            key={dropdownItem.href}
                            href={dropdownItem.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-6 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {dropdownItem.label}
                            <svg className="w-3 h-3 inline ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        ) : (
                          <Link
                            key={dropdownItem.href}
                            href={dropdownItem.href}
                            className="block px-6 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {dropdownItem.label}
                          </Link>
                        )
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href!}
                      className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 font-medium transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;