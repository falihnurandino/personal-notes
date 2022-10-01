import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/archives">Archives</Link>
        </li>
      </ul>
    </nav>
  );
}
