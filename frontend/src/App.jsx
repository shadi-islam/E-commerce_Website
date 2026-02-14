import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Shop from "./pages/shop/Shop";
import ProductDetails from "./pages/shop/ProductDetails";
import Wishlist from "./pages/shop/Wishlist";
import Cart from "./pages/shop/Cart";
import Checkout from "./pages/checkout/Checkout";
import Login from "./pages/account/Login";
import Signup from "./pages/account/Signup";
import ForgotPassword from "./pages/account/ForgotPassword";
import ResetPassword from "./pages/account/ResetPassword";
import Profile from "./pages/account/Profile";
import Addresses from "./pages/account/Addresses";
import MyOrders from "./pages/account/MyOrders";
import OrderDetails from "./pages/account/OrderDetails";
import AdminLayout from "./pages/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import NotFound from "./pages/NotFound";
import AdminRoute from "./components/admin/AdminRoute";

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ProductDetails />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account/signup" element={<Signup />} />
          <Route path="/account/forgot-password" element={<ForgotPassword />} />
          <Route path="/account/reset-password" element={<ResetPassword />} />
          <Route path="/account/profile" element={<Profile />} />
          <Route path="/account/addresses" element={<Addresses />} />
          <Route path="/account/orders" element={<MyOrders />} />
          <Route path="/account/order-details" element={<OrderDetails />} />
          <Route
            path="/admin"
            element={
              <AdminRoute allowRedirect>
                <AdminLayout />
              </AdminRoute>
            }
          >
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
