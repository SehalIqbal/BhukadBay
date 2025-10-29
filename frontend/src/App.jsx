// frontend/src/App.jsx
import React, { useState, useEffect } from 'react';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import LoginPopup from './components/LoginPopup/LoginPopup';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import MyOrders from './pages/MyOrders/MyOrders';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify/Verify';

import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    // 1) Initialize n8n chat with your messages
    createChat({
      webhookUrl:
        'https://sehal.app.n8n.cloud/webhook/6f3f168b-c586-4d00-a69b-5ee28a804e46/chat',
      mode: 'window',
      initialMessages: [
        '👋 Welcome to BhukadBay chat!',
        'I can help you with your orders, discounts, or menu 🍔',
      ],
    });

    // 2) Inject a simple text-only header (no image, no drag)
    const t = setTimeout(() => {
      const header = document.querySelector('#n8n-chat .chat-header');
      if (header && !header.querySelector('.bb-header')) {
        header.innerHTML = `
          <div class="bb-header">
            <div class="bb-title">BhukadBay ChatBot</div>
            <div class="bb-subtitle">Your food assistant 🤖</div>
          </div>
        `;
      }
    }, 800);

    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <ToastContainer />
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : null}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/verify" element={<Verify />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
