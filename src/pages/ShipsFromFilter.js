import React, { useState } from "react";

const countries = [
  "United States",
  "United Kingdom",
  "Canada",
  "Nigeria",
  "Ghana",
  "Kenya",
  "South Africa",
  "China",
  "India",
  "Turkey",
  "Germany",
  "France",
  "Italy",
  "Spain",
  "Brazil",
  "Australia",
  "Netherlands",
  "Japan",
  "Mexico",
  "United Arab Emirates",
  // You can add more if needed
];

const ShipsFromFilter = ({ onChange }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("any");

  const handleSelect = (country) => {
    setSelected(country);
    onChange(country);
    setOpen(false);
  };

  return (
    <div className="relative">
      {/* Trigger Button */}
      <button
        type="button"
        // onClick={() => setOpen(!open)}
        className="wt-btn wt-btn--small wt-btn--secondary wt-no-wrap wt-height-full flex items-center gap-2"
      >
        <span>Ships from</span>
        <svg width="14" height="14" viewBox="0 0 24 24">
          <polygon points="16.5 10 12 16 7.5 10 16.5 10"></polygon>
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-50 mt-2 w-56 max-h-72 overflow-y-auto bg-white shadow-lg border rounded-lg p-3">

          {/* ANYWHERE OPTION */}
          <label
            className="flex items-center gap-2 cursor-pointer mb-2"
            onClick={() => handleSelect("any")}
          >
            <input
              type="radio"
              checked={selected === "any"}
              onChange={() => {}}
            />
            Ships from anywhere
          </label>

          <hr className="my-2" />

          {/* COUNTRY LIST */}
          <div className="flex flex-col gap-2">
            {countries.map((country, idx) => (
              <label
                key={idx}
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => handleSelect(country)}
              >
                <input
                  type="radio"
                  checked={selected === country}
                  onChange={() => {}}
                />
                {country}
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ShipsFromFilter;
