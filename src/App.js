import logo from './logo.svg';
import Navbar from './Navbar.js';
import Card from './Card.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Display the Navbar component */}
      <h1>CS 230L</h1>
      <h2>Section - 003</h2>
      <p>WVU ID: 800367317</p>
      <p>Hi, I am Dhyan Patel</p>
      <Card /> {/* Display the Card component */}
    </div>
  );
}

export default App;
