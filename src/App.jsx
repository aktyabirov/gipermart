import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
// Lazy imports
const HomePage = React.lazy(() => import("./pages/home/home"));
const LoginPage = React.lazy(() => import("./pages/login/login"));
const CartSummaryPage = React.lazy(() => import("./pages/home/cart/CartSummaryPage"));
const LikedProductsPage = React.lazy(() => import("./pages/favorites/Favorites"));
const CartPage = React.lazy(() => import("./pages/home/cart/CartPage"));
const RegisterPage = React.lazy(() => import("./pages/register/RegisterPage"));
const CategoryProductsPage = React.lazy(() => import("./pages/CategoryProductsPage"));
const ProductDetailPage = React.lazy(() => import("./pages/product/ProductDetail"));


const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/favorites" element={<LikedProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/:categoryKey/:id" element={<ProductDetailPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/category/:datakey" element={<CategoryProductsPage />} />
          <Route
            path="/cartsummary"
            element={
              <ProtectedRoute>
                <CartSummaryPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
