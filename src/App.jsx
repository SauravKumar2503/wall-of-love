import { BrowserRouter, Routes, Route } from "react-router-dom";
import WallOfLove from "./pages/WallOfLove";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default landing page */}
        <Route path="/" element={<WallOfLove />} />

        {/* Products listing */}
        <Route path="/products" element={<Home />} />

        {/* Product detail */}
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
