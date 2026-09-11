import React, { useState, useEffect, useRef } from 'react';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Hi there! 👋 Welcome to my studio portfolio. What kind of project or collaboration are you looking for?',
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
      label: 'Short Reel Edit (₹600)',
      msg: 'Hi Bikash! I need a high-energy Short Reel editing service for Instagram/YouTube. Let us discuss the project details!',
    },
    {
      id: 'album',
      icon: 'fa-film',
      label: 'Long Video Album (₹3000)',
      msg: 'Hi Bikash! I am looking for a full story-driven Video Album / Wedding editing service. Let us connect!',
    },
    {
      id: 'collab',
      icon: 'fa-handshake',
      label: 'Brand Collab / Paid Promo (DM for Collab)',
      msg: 'Hi Bikash! I represent a brand and would like to collaborate with you for a Paid Promotion / Sponsored Reel campaign.',
    },
    {
      id: 'rush',
      icon: 'fa-gauge-high',
      label: 'Rush 24h Express Delivery',
      msg: 'Hi Bikash! I have an urgent editing project that needs fast 24-48h turnaround. Are you available?',
    },
  ];

  // Auto-scroll inside chat
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages, isTyping, isOpen]);

  // Handle clicking a preset option
  const handleSelectPreset = (preset) => {
    setSelectedOption(preset.id);

    // 1. User message
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: preset.label,
      time: 'Just now',
    };

    setChatMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    // 2. Bot automated answer after 600ms
    setTimeout(() => {
      setIsTyping(false);
      const botResponse = {
        id: Date.now() + 1,
        sender: 'bot',
        text: `Awesome choice! 🚀 Opening WhatsApp now with your "${preset.label}" details ready...`,
        time: 'Just now',
        actionUrl: `https://wa.me/${phone}?text=${encodeURIComponent(preset.msg)}`,
        actionLabel: 'Click to Open WhatsApp',
      };
      setChatMessages((prev) => [...prev, botResponse]);

      // Open WhatsApp after brief delay
      setTimeout(() => {
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(preset.msg)}`, '_blank');
      }, 700);
    }, 600);
  };

  // Handle submitting custom message
  const handleSendCustom = (e) => {
    e.preventDefault();
    if (!customInput.trim()) return;

    const text = customInput.trim();
    setCustomInput('');

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: text,
      time: 'Just now',
    };

    setChatMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(`Hi Bikash! Message from your portfolio: "${text}"`)}`;

    setTimeout(() => {
      setIsTyping(false);
      const botResponse = {
        id: Date.now() + 1,
        sender: 'bot',
        text: 'Connecting you straight to Bikash on WhatsApp right now! 💬',
        time: 'Just now',
        actionUrl: waUrl,
        actionLabel: 'Open in WhatsApp',
      };
      setChatMessages((prev) => [...prev, botResponse]);

      setTimeout(() => {
        window.open(waUrl, '_blank');
      }, 600);
    }, 600);
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
                src="assets/profile.jpg"
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

            {/* Quick Automation Preset Options */}
            {!selectedOption && (
              <div className="wa-automation-presets">
                <span className="presets-title">Tap a quick option to start:</span>
                <div className="presets-grid">
                  {automationPresets.map((preset) => (
                    <button
                      key={preset.id}
                      type="button"
                      className="preset-btn"
                      onClick={() => handleSelectPreset(preset)}
                    >
                      <i className={`fa-solid ${preset.icon}`}></i>
                      <span>{preset.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

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
