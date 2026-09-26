import React, { useState, useEffect, useRef } from 'react';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Namaskar! 🙏 Welcome to Bikash Suna Official Studio. Whether you want to edit a Viral Sambalpuri Reel (₹600), Full Cinematic Video Album (₹3000), or Brand Sponsorship Collab, choose a quick option below to chat directly with me on WhatsApp:',
      time: 'Just now',
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [customInput, setCustomInput] = useState('');
  const [hasNewBadge, setHasNewBadge] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);
  const messagesEndRef = useRef(null);

  const phone = '919360870164';

  const automationPresets = [
    {
      id: 'reel',
      icon: 'fa-bolt',
      label: 'Viral Reel Edit (₹600)',
      msg: 'Hi Bikash! I want to order a Viral Reel edit (similar to Best Friend / Mor Maa). Let us discuss footage, speed ramps, and sound design!',
    },
    {
      id: 'album',
      icon: 'fa-film',
      label: 'Cinematic Video Album (₹3000)',
      msg: 'Hi Bikash! I need full story-driven cinematic editing for a Long Video Album / Wedding / Music Video in 4K UHD.',
    },
    {
      id: 'collab',
      icon: 'fa-handshake',
      label: 'Brand Sponsor & Collab (Paid Promo)',
      msg: 'Hi Bikash! I represent a brand/agency and want to collaborate with you for a Paid Promotion / Sponsored Reel on your Instagram (@bikash_suna_07).',
    },
    {
      id: 'showreel',
      icon: 'fa-play',
      label: 'Inquire Portfolio Showreels',
      msg: 'Hi Bikash! I was watching your portfolio showreels and love your color grading & transitions. I would like to hire you for my upcoming project!',
    },
    {
      id: 'calculator',
      icon: 'fa-calculator',
      label: 'Custom Quote / Calculator Estimate',
      msg: 'Hi Bikash! I used your portfolio calculator and want to get a custom quote for a multi-video editing package.',
    },
    {
      id: 'rush',
      icon: 'fa-gauge-high',
      label: 'Rush 24h Express Delivery',
      msg: 'Hi Bikash! I have an urgent video editing project with a strict 24-48h deadline. Are you available for express delivery?',
    },
  ];

  // Auto-scroll inside chat
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages, isTyping, isOpen]);

  // Handle clicking a preset option - DIRECTLY opens WhatsApp immediately
  const handleSelectPreset = (preset) => {
    setSelectedOption(preset.id);

    // Directly open WhatsApp immediately in a new tab / app
    const targetUrl = `https://wa.me/${phone}?text=${encodeURIComponent(preset.msg)}`;
    window.open(targetUrl, '_blank');

    // Register user selection and show confirmation in chat
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: preset.label,
      time: 'Just now',
    };

    const botResponse = {
      id: Date.now() + 1,
      sender: 'bot',
      text: `Opening WhatsApp with your "${preset.label}" details ready! 🚀`,
      time: 'Just now',
      actionUrl: targetUrl,
      actionLabel: 'Re-open in WhatsApp',
    };

    setChatMessages((prev) => [...prev, userMsg, botResponse]);
  };

  // Handle submitting custom message - DIRECTLY opens WhatsApp immediately
  const handleSendCustom = (e) => {
    e.preventDefault();
    if (!customInput.trim()) return;

    const text = customInput.trim();
    setCustomInput('');

    const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(`Hi Bikash! Inquiry from your portfolio: "${text}"`)}`;
    window.open(waUrl, '_blank');

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: text,
      time: 'Just now',
    };

    const botResponse = {
      id: Date.now() + 1,
      sender: 'bot',
      text: 'Connecting you straight to Bikash on WhatsApp! 💬',
      time: 'Just now',
      actionUrl: waUrl,
      actionLabel: 'Re-open in WhatsApp',
    };

    setChatMessages((prev) => [...prev, userMsg, botResponse]);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setHasNewBadge(false);
    }
  };

  return (
    <aside className="floating-wa-container" aria-label="WhatsApp automated chat assistant">
      {/* Expanded Chat Concierge Modal */}
      {isOpen && (
        <div className="wa-chat-window animate-slide-up" role="dialog" aria-modal="true">
          {/* Header */}
          <div className="wa-chat-header">
            <div className="wa-header-avatar-box">
              <img
                src="/assets/profile.jpg"
                alt="Bikash Suna"
                className="wa-header-avatar"
              />
              <span className="wa-online-indicator"></span>
            </div>
            <div className="wa-header-info">
              <div className="wa-header-name">
                <span>Bikash Suna</span>
                <i className="fa-solid fa-circle-check verified-badge" title="Verified Creator"></i>
              </div>
              <div className="wa-header-status">
                <span className="pulse-dot-mini"></span>
                <span>Online &bull; Instant WhatsApp Replies</span>
              </div>
            </div>
            <button
              className="wa-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          {/* Chat Messages Body */}
          <div className="wa-chat-body">
            <div className="wa-chat-timestamp">
              <span>Today &bull; Direct Studio Hotline</span>
            </div>

            {chatMessages.map((msg) => (
              <div
                key={msg.id}
                className={`wa-msg-bubble ${msg.sender === 'user' ? 'user-msg' : 'bot-msg'}`}
              >
                <div className="wa-bubble-content">
                  <p>{msg.text}</p>
                  {msg.actionUrl && (
                    <a
                      href={msg.actionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="wa-direct-action-btn"
                    >
                      <i className="fa-brands fa-whatsapp"></i> {msg.actionLabel}
                    </a>
                  )}
                  <span className="wa-msg-time">{msg.time}</span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="wa-msg-bubble bot-msg typing-bubble">
                <div className="typing-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}

            {/* Quick Automation Preset Options - Always accessible */}
            <div className="wa-automation-presets">
              <span className="presets-title">Quick options & inquiries:</span>
              <div className="presets-grid">
                {automationPresets.map((preset) => (
                  <button
                    key={preset.id}
                    type="button"
                    className={`preset-btn ${selectedOption === preset.id ? 'active-preset' : ''}`}
                    onClick={() => handleSelectPreset(preset)}
                  >
                    <i className={`fa-solid ${preset.icon}`}></i>
                    <span>{preset.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div ref={messagesEndRef} />
          </div>

          {/* Custom Input Footer */}
          <form className="wa-chat-footer" onSubmit={handleSendCustom}>
            <input
              type="text"
              className="wa-chat-input"
              placeholder="Type custom inquiry or rate..."
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
            />
            <button
              type="submit"
              className="wa-send-btn"
              disabled={!customInput.trim()}
              aria-label="Send to WhatsApp"
            >
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        type="button"
        className="floating-wa-btn"
        onClick={toggleChat}
        aria-label="Open WhatsApp automated chat"
      >
        <div className="wa-icon-wrapper">
          <i className={`fa-brands fa-whatsapp ${isOpen ? 'rotate-hide' : 'rotate-show'}`}></i>
          <i className={`fa-solid fa-xmark ${isOpen ? 'rotate-show' : 'rotate-hide'}`}></i>
        </div>

        {hasNewBadge && !isOpen && (
          <span className="wa-notification-badge" aria-label="1 new message">
            1
          </span>
        )}

        <span className="wa-btn-pulse-ring"></span>
        <span className="wa-btn-pulse-glow"></span>

        {!isOpen && (
          <div className="wa-floating-tooltip">
            <span className="tooltip-dot"></span>
            <span>Chat on WhatsApp</span>
          </div>
        )}
      </button>
    </aside>
  );
}
