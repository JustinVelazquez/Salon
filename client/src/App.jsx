import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <header>
        <h1>The Mane Wolf Hair Salon</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/staff">Staff</Link> |{' '}
          <Link to="/services">Services</Link> |{' '}
          <Link to="/booking">Booking</Link>| <Link to="/admin">Admin</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
