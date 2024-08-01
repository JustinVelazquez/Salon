import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/staff">Staff</Link> |{' '}
      <Link to="/services">Services</Link> | <Link to="/booking">Booking</Link>|{' '}
      <Link to="/admin">Admin</Link>
    </nav>
  );
};

export default Navbar;
