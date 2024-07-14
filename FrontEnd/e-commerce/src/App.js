import './App.css';
import HomePage from './customer/pages/HomePage/HomePage';
import Navigation from './customer/components/Navigation/Navigation';
import Footer from './customer/components/Footer/Footer';
import Product from './customer/components/Product/Product';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div>
        {/* <HomePage /> */}
        <Product />
      </div>
      <Footer />
    </div>
  );
}

export default App;
