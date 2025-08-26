// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '10px 20px', borderBottom: '1px solid #eee', display: 'flex', gap: '12px' }}>
      <Link to="/">Home</Link>
      <Link to="/admin">Admin</Link>
    </nav>
  );
}

