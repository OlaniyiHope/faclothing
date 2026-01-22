import React, { useState } from "react";

const sizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];

const SizeFilter = ({ onChange }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const selectSize = (size) => {
    setSelected(size);
    onChange(size);
    setOpen(false);
  };

  return (
    <div className="relative inline-block">
      {/* Trigger Button */}
      <button
        type="button"
        // onClick={() => setOpen(!open)}
        className="wt-btn wt-btn--secondary wt-btn--small selectable-pill wt-mr-xs-2 flex items-center gap-2"
      >
        {selected ? `Size: ${selected}` : "Size"}
        <svg width="14" height="14" viewBox="0 0 24 24">
          <polygon points="16.5 10 12 16 7.5 10 16.5 10"></polygon>
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-50 mt-2 bg-white shadow-lg border rounded-lg w-40 p-3">
          <div className="flex flex-col gap-2">
            {sizes.map((size) => (
              <label
                key={size}
                className="cursor-pointer flex items-center gap-2"
                onClick={() => selectSize(size)}
              >
                <input
                  type="radio"
                  checked={selected === size}
                  onChange={() => {}}
                />
                {size}
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SizeFilter;
