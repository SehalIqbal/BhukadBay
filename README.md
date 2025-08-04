# 🥗 Food-Del Web — Automation-Focused Food Ordering Site

**Food-Del Web** is a React-based food ordering platform that I used as a **playground to explore automation**, specifically with **n8n**. While the frontend was based on a YouTube tutorial, I significantly customized it using ChatGPT — adding several features like promo codes, Stripe payments, reviews, and admin controls.

However, the **main focus of this project** was **not web development** — it was to **integrate a fully functional support chatbot using n8n**, an open-source automation tool I'm currently learning.

---

## 🎯 Project Goal

> To build a real-world use case for automation by creating a smart, chatbot-powered support system using **n8n** — with a working website as the base.

---

## 🤖 Main Feature: n8n-Powered Support ChatBot

- **Floating chatbot widget** integrated into the website
- Built using **n8n's Chat Trigger + MongoDB + HTTP Request nodes**
- Works like a virtual support agent:
- Users can ask: _“Show me the menu”_, _“Any promo codes?”_, _“Where is my order?”_
- Bot fetches **real-time data** from **MongoDB Atlas**
- Fully extensible with n8n’s low-code visual interface

> This chatbot is a **real automation workflow**, not a static script.

---

## 🧠 ChatBot Architecture (n8n)
Frontend Chat Widget → n8n Chat Trigger → MongoDB Query → Response Node → Return to Frontend

- Uses MongoDB tools inside an AI Agent in n8n
- Understands the intent behind customer prompts and provides accurate, relevant answers 
- Handles dynamic customer prompts like:
  - "Show me the menu"
  - "Are there any promo codes?"
  - "What’s the status of my order?"
- Fetches real-time data from MongoDB Atlas
- Designed to be extended (e.g., SMS alerts, FAQ replies)

---

## 🛒 Secondary Features (Frontend Customizations)

Although not the main focus, I added several production-like features with ChatGPT’s help:

- 🔍 **Search Bar** with live filtering
- 🛒 **Cart System** with add/remove/update
- 🎟 **Promo Code** system (apply at checkout)
- 💳 **Stripe Payment Integration**
- ⭐ **Ratings + Reviews** (users can rate past orders)
- 👩‍💼 **Admin Panel**:
  - Promo code management
  - Stock management
  - Basic reporting (orders, users, reviews)

> These features were added to make the chatbot more useful by working with actual data.

---
<img width="960" height="583" alt="Screenshot 2025-08-04 093443" src="https://github.com/user-attachments/assets/9d70625b-1821-47aa-8b9e-8af4fd329a40" />

