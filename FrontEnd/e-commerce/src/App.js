import './App.css';
import HomePage from './customer/pages/HomePage/HomePage';
import Navigation from './customer/components/Navigation/Navigation';
import Footer from './customer/components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div>
        <HomePage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
