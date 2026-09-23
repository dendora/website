import React from 'react';

// Renders a single *emphasised* word as <em> (styled by .hero-title em).
export const renderEmphasis = (text: string) =>
  text.split(/\*(.+?)\*/).map((part, i) => (i % 2 ? <em key={i}>{part}</em> : part));
