# BhukkadBay — Food Ordering Platform

**BhukkadBay** is a full-stack food ordering web application built with React, Node.js, and MongoDB. It provides customers with a seamless food ordering experience and includes an AI-powered support chatbot orchestrated through **n8n** that handles customer queries in real time.

---

## Project Structure

```
n8n_Food-Del/
├── frontend/          # React customer-facing website
├── admin/             # React admin dashboard
├── backend/           # Node.js + Express REST API
│   ├── models/        # MongoDB schemas (Food, Order, User, PromoCode, Review)
│   ├── controllers/   # Business logic
│   ├── routes/        # API endpoints
│   └── server.js      # Entry point
└── E-Commerce Support Chatbot.json   # n8n workflow (importable)
```

---

## Features

### Customer Website

- Browse menu with live search and filtering
- Add items to cart, update quantities, remove items
- Apply promo codes at checkout
- Stripe payment integration
- Place and track orders
- Rate and review past orders
- User authentication (register / login)

### Admin Panel

- Add, edit, and remove menu items
- Stock management
- Promo code management — create, activate, deactivate
- Order management and status updates
- Reports — item-wise sales and total revenue overview

### AI Support Chatbot (n8n)

An AI-powered support chatbot is embedded directly on the website. It is orchestrated through **n8n** using OpenAI for natural language understanding and connects to live MongoDB databases to serve real-time information.

![BhukkadBay Home + Chatbot](images/bhukkadbay_home.png)

**What the chatbot handles:**

**Menu Queries** — Users can ask about food items, prices, dietary options, or availability. The chatbot queries the Foods collection in real time and responds accurately.

**Order Status Tracking** — Users provide their Order ID and the chatbot checks the current status and payment method directly from the Orders collection.

![Order Status](images/bhukkadbay_order.png)

**Promo Codes & Offers** — Users can ask about active discounts and the chatbot fetches current promotions from the PromoCode collection.

**Off-Topic Handling** — The chatbot identifies irrelevant queries and responds politely, staying strictly within its defined scope.

![Off-Topic Handling](images/bhukkadbay_offtopic.png)

### n8n Workflow Architecture

![n8n Workflow](images/bhukkadbay_n8n.png)

The workflow consists of:
- **Chat Trigger** — receives messages from the website widget
- **AI Agent (OpenAI)** — understands intent and decides which tool to use
- **Simple Memory** — maintains conversation context across messages
- **MongoDB Tools** — three live database connections: Foods DB, Orders DB, PromoCode DB

---

## How to Run

### Prerequisites
- Node.js
- MongoDB Atlas account
- n8n instance (cloud or self-hosted)
- OpenAI API key
- Stripe account

### Backend
```bash
cd backend
npm install
node server.js
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Admin
```bash
cd admin
npm install
npm run dev
```

### n8n Chatbot
1. Open your n8n instance
2. Go to **Workflows** → **Import**
3. Import `E-Commerce Support Chatbot.json`
4. Add your MongoDB Atlas and OpenAI credentials
5. Activate the workflow
6. Copy the Chat Trigger webhook URL into the frontend chatbot widget

---

## Environment Variables

Create a `.env` file in the `backend/` folder:

```env
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```
