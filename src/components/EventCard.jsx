// src/components/EventCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function EventCard({ event }) {
  if (!event) return null;
  return (
    <div style={{
      border: '1px solid #ddd',
      padding: 12,
      borderRadius: 8,
      marginBottom: 12,
      maxWidth: 700
    }}>
      <h3 style={{ margin: '0 0 6px 0' }}>{event.title}</h3>
      <p style={{ margin: '6px 0' }}>{event.description}</p>
      <p style={{ margin: '6px 0', fontSize: 14 }}>
        <strong>Date:</strong> {new Date(event.date).toLocaleString()}
      </p>
      <p style={{ margin: '6px 0', fontSize: 14 }}>
        <strong>Location:</strong> {event.location}
      </p>
      <Link to={`/register/${event.id}`}>
        <button>Register</button>
      </Link>
    </div>
  );
}

