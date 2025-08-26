// src/pages/HomePage.jsx
import React from 'react';
import EventCard from '../components/EventCard';
import { events } from '../data/events';

export default function HomePage() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Upcoming Events</h2>
      <div style={{ marginTop: 12 }}>
        {events.map(e => (
          <EventCard key={e.id} event={e} />
        ))}
      </div>
    </div>
  );
}
