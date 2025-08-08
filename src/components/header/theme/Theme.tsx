'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { themes } from '@/utils/themeStyles/themeStyles';
import { setTheme } from '@/redux/slice/themeSlice/themeSlice';


const Theme = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: any) => state.theme.theme);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.remove(...themes);
    document.documentElement.classList.add(theme);
  }, [theme]);

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement> | { target: { value: string } }) => {
    const selectedTheme = e.target.value;
    if (themes.includes(selectedTheme)) {
      dispatch(setTheme(selectedTheme));
    }
  };

  const renderThemeSelector = () => (
    <div
      className="relative inline-block group"
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      <div className="flex items-center justify-between pr-8 pl-3 py-1.5 rounded-full text-sm font-medium bg-transparent text-black cursor-pointer">
        {theme.charAt(0).toUpperCase() + theme.slice(1)}
        <span className="ml-2 text-xs">
          {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>
      {isDropdownOpen && (
        <ul className="absolute z-50 left-0 mt-0.5 w-full bg-white rounded-md shadow-md text-sm overflow-hidden">
          {themes.map((t) => (
            <li
              key={t}
              onClick={() => {
                handleThemeChange({ target: { value: t } });
                setIsDropdownOpen(false);
              }}
              className="px-3 py-1.5 text-black hover:bg-gray-200 cursor-pointer"
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </li>
          ))}
        </ul>
      )}
      <span className="absolute bottom-0 left-0 h-[2px] w-full bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
    </div>
  );

  return <div>{renderThemeSelector()}</div>;
};

export default Theme;
