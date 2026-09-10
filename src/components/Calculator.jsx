import React, { useState, useEffect, useRef } from 'react';

export default function Calculator() {
  const [format, setFormat] = useState('600');
  const [formatName, setFormatName] = useState('Short Reel');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [expressDelivery, setExpressDelivery] = useState(false);
  const [customSfx, setCustomSfx] = useState(false);
  const [displayedPrice, setDisplayedPrice] = useState(600);

  const selectRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Compute pricing
  const baseCostPerUnit = parseInt(format);
  const safeQty = isNaN(quantity) || quantity < 1 ? 1 : quantity > 99 ? 99 : quantity;

  let expressCostPerUnit = 0;
  if (expressDelivery) {
    if (baseCostPerUnit === 600) expressCostPerUnit = 200;
    else if (baseCostPerUnit === 1500) expressCostPerUnit = 400;
    else expressCostPerUnit = 1000;
  }

  const sfxCostPerUnit = customSfx ? 150 : 0;
  const baseTotal = baseCostPerUnit * safeQty;
  const addonsTotal = (expressCostPerUnit + sfxCostPerUnit) * safeQty;
  const targetTotal = baseTotal + addonsTotal;

  // Number animation
  useEffect(() => {
    const startPrice = displayedPrice;
    const diff = targetTotal - startPrice;
    if (diff === 0) return;

    const steps = 12;
    const stepTime = 250 / steps;
    const increment = diff / steps;
    let step = 0;

    const interval = setInterval(() => {
      step++;
      const nextPrice = Math.round(startPrice + increment * step);
      setDisplayedPrice(nextPrice);

      if (step >= steps) {
        clearInterval(interval);
        setDisplayedPrice(targetTotal);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [targetTotal]);

  // Express price text
  const expressPriceLabel =
    baseCostPerUnit === 600
      ? '+₹200 / video'
      : baseCostPerUnit === 1500
      ? '+₹400 / campaign'
      : '+₹1000 / video';

  // Construct WhatsApp Link
  let detailsText = '';
  if (baseCostPerUnit === 1500) {
    detailsText = `Hi Bikash! I want to collaborate for a Paid Promotion / Brand Collab (${safeQty} campaign).`;
  } else {
    detailsText = `Hi Bikash, I want to book ${safeQty} x ${formatName}(s).`;
  }

  const addonsList = [];
  if (expressDelivery) addonsList.push('Express Delivery (24-48h)');
  if (customSfx) addonsList.push('Custom Premium SFX');

  if (addonsList.length > 0) {
    detailsText += ` Options: ${addonsList.join(', ')}.`;
  }
  detailsText += ` Estimated total: ₹${targetTotal}. Let's discuss details!`;

  const whatsappUrl = `https://wa.me/919360870164?text=${encodeURIComponent(detailsText)}`;

  const handleSelectOption = (val, name) => {
    setFormat(val);
    setFormatName(name);
    setDropdownOpen(false);
  };

  return (
    <section className="calculator-section section-padding" id="calculator">
      <div className="container">
        <div className="calculator-box scroll-reveal">
          <div className="calculator-header">
            <h2>Project Estimate Calculator</h2>
            <p>
              Customize your requirements and see an immediate pricing estimation for your video or
              sponsorship project.
            </p>
          </div>

          <div className="calculator-grid">
            <div className="calculator-inputs">
              {/* Custom Select */}
              <div className="input-group">
                <label>Select Project Format</label>
                <div
                  className={`custom-select-wrapper ${dropdownOpen ? 'open' : ''}`}
                  ref={selectRef}
                >
                  <div
                    className="custom-select-trigger"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <span className="trigger-text">
                      {formatName} (₹{format}/unit)
                    </span>
                    <i className="fa-solid fa-chevron-down select-arrow"></i>
                  </div>
                  <div className="custom-options-container">
                    <div
                      className={`custom-option ${format === '600' ? 'active' : ''}`}
                      onClick={() => handleSelectOption('600', 'Short Reel Edit')}
                    >
                      <span className="option-title">
                        <i className="fa-solid fa-clapperboard text-purple"></i> Short Reel Edit
                      </span>
                      <span className="option-price">₹600 / unit</span>
                    </div>
                    <div
                      className={`custom-option ${format === '3000' ? 'active' : ''}`}
                      onClick={() => handleSelectOption('3000', 'Long Video Album')}
                    >
                      <span className="option-title">
                        <i className="fa-solid fa-film text-cyan"></i> Long Video Album
                      </span>
                      <span className="option-price">₹3000 / unit</span>
                    </div>
                    <div
                      className={`custom-option ${format === '1500' ? 'active' : ''}`}
                      onClick={() => handleSelectOption('1500', 'Brand Collab / Paid Promo')}
                    >
                      <span className="option-title">
                        <i className="fa-solid fa-bullhorn text-teal"></i> Brand Collab / Paid Promo
                      </span>
                      <span className="option-price">₹1500 / post</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quantity Stepper */}
              <div className="input-group">
                <label htmlFor="quantity">Quantity (Number of Videos / Campaigns)</label>
                <div className="quantity-stepper">
                  <button
                    type="button"
                    className="stepper-btn"
                    onClick={() => setQuantity((prev) => Math.max(1, (parseInt(prev) || 1) - 1))}
                    aria-label="Decrease quantity"
                  >
                    <i className="fa-solid fa-minus"></i>
                  </button>
                  <input
                    type="number"
                    id="quantity"
                    min="1"
                    max="99"
                    value={quantity}
                    onChange={(e) => {
                      const val = parseInt(e.target.value);
                      setQuantity(isNaN(val) ? '' : val);
                    }}
                    onBlur={() => {
                      if (!quantity || quantity < 1) setQuantity(1);
                      else if (quantity > 99) setQuantity(99);
                    }}
                    className="stepper-input"
                  />
                  <button
                    type="button"
                    className="stepper-btn"
                    onClick={() => setQuantity((prev) => Math.min(99, (parseInt(prev) || 1) + 1))}
                    aria-label="Increase quantity"
                  >
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>

              {/* Addon Card 1: Express Delivery */}
              <label className="calculator-addon-card">
                <input
                  type="checkbox"
                  checked={expressDelivery}
                  onChange={(e) => setExpressDelivery(e.target.checked)}
                  className="addon-checkbox"
                />
                <div className="addon-card-body">
                  <div className="addon-details">
                    <span className="addon-title">
                      <i className="fa-solid fa-bolt text-cyan"></i> Express Delivery
                    </span>
                    <p className="addon-desc">Completed delivery within 24-48 hours.</p>
                  </div>
                  <div className="addon-action">
                    <span className="addon-price-tag">{expressPriceLabel}</span>
                    <div className="switch-toggle">
                      <span className="switch-slider"></span>
                    </div>
                  </div>
                </div>
              </label>

              {/* Addon Card 2: Sound Design */}
              <label className="calculator-addon-card">
                <input
                  type="checkbox"
                  checked={customSfx}
                  onChange={(e) => setCustomSfx(e.target.checked)}
                  className="addon-checkbox"
                />
                <div className="addon-card-body">
                  <div className="addon-details">
                    <span className="addon-title">
                      <i className="fa-solid fa-volume-high text-purple"></i> Sound Design Suite
                    </span>
                    <p className="addon-desc">Premium custom SFX & dynamic audio track mixing.</p>
                  </div>
                  <div className="addon-action">
                    <span className="addon-price-tag">+₹150 / video</span>
                    <div className="switch-toggle">
                      <span className="switch-slider"></span>
                    </div>
                  </div>
                </div>
              </label>
            </div>

            {/* Calculator Result Box */}
            <div className="calculator-result">
              <div className="result-label">ESTIMATED TOTAL COST</div>
              <div className="result-price">₹{displayedPrice}</div>

              <div className="price-breakdown">
                <div className="breakdown-item">
                  <span className="breakdown-label">Base Cost</span>
                  <span className="breakdown-val">₹{baseTotal}</span>
                </div>
                <div className="breakdown-item">
                  <span className="breakdown-label">Addon Options</span>
                  <span className="breakdown-val">₹{addonsTotal}</span>
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent btn-block"
              >
                <i className="fa-brands fa-whatsapp"></i> Book This Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
