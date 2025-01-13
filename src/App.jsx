import { Routes, Route } from "react-router";
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import ProductList from './components/ProductList';
import About from './components/About';
import ProductDetails from './components/ProductDetails';

function App() {

  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<>
            <Slider />
            <ProductList />
          </>} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:productID" element={<ProductDetails />} />
        </Routes>
      </div>
    </>
  )
}

export default App
