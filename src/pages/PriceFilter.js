import React, { useEffect, useRef, useState } from "react";

const PriceFilter = ({ onChange }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("any");
  const [customFrom, setCustomFrom] = useState("");
  const [customTo, setCustomTo] = useState("");
  const ref = useRef(null);

  const handleSelect = (value) => {
    setSelected(value);
    onChange(value);
    setOpen(false);
  };

  const applyCustom = () => {
    onChange({ from: customFrom, to: customTo });
    setOpen(false);
  };

  // ✅ CLOSE ON OUTSIDE CLICK / TAP
  useEffect(() => {
    const close = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("touchstart", close);
    document.addEventListener("mousedown", close);

    return () => {
      document.removeEventListener("touchstart", close);
      document.removeEventListener("mousedown", close);
    };
  }, []);

  return (
    <div className="relative" ref={ref}>
      {/* TRIGGER */}
      <button
        type="button"
        // onClick={() => setOpen((o) => !o)}
        className="wt-btn wt-btn--small wt-btn--secondary wt-no-wrap flex items-center gap-2"
      >
        <span>Price</span>
        <svg width="14" height="14" viewBox="0 0 24 24">
          <polygon points="16.5 10 12 16 7.5 10" />
        </svg>
      </button>

      {/* BACKDROP (captures mobile taps) */}
      {open && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* DROPDOWN */}
      {open && (
        <div
          className="absolute z-50 mt-2 w-52 bg-white shadow-lg border rounded-lg p-3"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col gap-2">

            {[
              ["any", "Any price"],
              ["under25", "Under USD 25"],
              ["25to50", "USD 25 – USD 50"],
              ["50to100", "USD 50 – USD 100"],
              ["over100", "Over USD 100"],
            ].map(([value, label]) => (
              <label key={value} className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={selected === value}
                  onChange={() => handleSelect(value)}
                />
                {label}
              </label>
            ))}

            {/* CUSTOM */}
            <div className="border-t pt-2 mt-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={selected === "custom"}
                  onChange={() => setSelected("custom")}
                />
                Custom
              </label>

              {selected === "custom" && (
                <>
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

                  <button
                    type="button"
                    onClick={applyCustom}
                    className="wt-btn wt-btn--small wt-btn--primary mt-2 w-full"
                  >
                    Apply
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceFilter;
