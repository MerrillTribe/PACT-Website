import React from 'react';

export default function RepeaterJumpCards({ cards }) {
  const openSection = (id) => {
    const section = document.getElementById(id);

    if (!section) return;

    if (!section.open) {
      const summary = section.querySelector('summary');
      summary?.click();
    }

    setTimeout(() => {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 100);
  };

  return (
    <div className="repeater-summary-grid">
      {cards.map((card) => (
        <button
          key={card.id}
          type="button"
          className="repeater-summary-card repeater-summary-button"
          onClick={() => openSection(card.id)}
        >
          <strong>{card.title}</strong>
          <span>{card.subtitle}</span>
        </button>
      ))}
    </div>
  );
}