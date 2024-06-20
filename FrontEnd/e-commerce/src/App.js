import Navigation from './customer/components/Navigation';
import './App.css';
import HomePage from './customer/pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div>
        <HomePage />
      </div>
    </div>
  );
}

export default App;
