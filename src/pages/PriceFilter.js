import React, { useState } from "react";

const PriceFilter = ({ onChange }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("any");
  const [customFrom, setCustomFrom] = useState("");
  const [customTo, setCustomTo] = useState("");

  const handleSelect = (value) => {
    setSelected(value);
    onChange(value);
    setOpen(false);
  };

  const applyCustom = () => {
    const value = { from: customFrom, to: customTo };
    setSelected("custom");
    onChange(value);
    setOpen(false);
  };

  return (
    <div className="relative">
      {/* TRIGGER BUTTON */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="wt-btn wt-btn--small wt-btn--secondary wt-no-wrap wt-height-full flex items-center gap-2"
      >
        <span>Price</span>
        <svg width="14" height="14" viewBox="0 0 24 24">
          <polygon points="16.5 10 12 16 7.5 10 16.5 10"></polygon>
        </svg>
      </button>

      {/* PANEL DROPDOWN */}
      {open && (
        <div className="absolute z-50 mt-2 w-48 bg-white shadow-lg border rounded-lg p-3">
          {/* OPTIONS */}
          <div className="flex flex-col gap-2">

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                checked={selected === "any"}
                onChange={() => handleSelect("any")}
              />
              Any price
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                checked={selected === "under25"}
                onChange={() => handleSelect("under25")}
              />
              Under USD 25
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                checked={selected === "25to50"}
                onChange={() => handleSelect("25to50")}
              />
              USD 25 – USD 50
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                checked={selected === "50to100"}
                onChange={() => handleSelect("50to100")}
              />
              USD 50 – USD 100
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                checked={selected === "over100"}
                onChange={() => handleSelect("over100")}
              />
              Over USD 100
            </label>

            {/* CUSTOM RANGE */}
            <div className="border-t pt-2 mt-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  checked={selected === "custom"}
                  onChange={() => setSelected("custom")}
                />
                Custom
              </label>

              {selected === "custom" && (
                <div className="flex gap-2 mt-2">
                  <input
                    type="number"
                    placeholder="From"
                    className="border rounded p-1 w-full"
                    value={customFrom}
                    onChange={(e) => setCustomFrom(e.target.value)}
                  />
                  <input
                    type="number"
                    placeholder="To"
                    className="border rounded p-1 w-full"
                    value={customTo}
                    onChange={(e) => setCustomTo(e.target.value)}
                  />
                </div>
              )}

              {selected === "custom" && (
                <button
                  onClick={applyCustom}
                  className="wt-btn wt-btn--small wt-btn--primary mt-2 w-full"
                >
                  Apply
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceFilter;
