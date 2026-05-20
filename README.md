Urban Harvest – Admin Dashboard

[![React](https://img.shields.io/badge/React-18.2-blue)](https://reactjs.org/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-1.9-purple)](https://redux-toolkit.js.org/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

A **fully responsive** admin dashboard for a fictional food delivery platform **Urban Harvest**.  
Built with React, Redux Toolkit, and modern CSS. Includes authentication, dashboard analytics, product management, and real time search/filter.

📦 **GitHub Repo** – https://github.com/Shoibal-281612/urbanHarvest_dashboard.git

---

-------------------------------------------------------------------------------------------------------------------------------------

Features
Authentication
- Login with email/password
- "Remember Me" option (persists session via localStorage)
- Protected routes (redirect if not authenticated)
- Demo credentials provided
Dashboard
- Key metrics cards: Total Orders, Revenue, Active Users, Pending Deliveries
- Recent orders table with status badges
- Fully responsive grid layout
 Product Management
- Product cards with image, name, price, status (Available/Out of Stock)
- **Add new product** modal (name, price, status, image URL)
- **Delete product** with confirmation
- **Search/filter** by product name
- Status tags with color coding
Navigation & UI
- Sidebar with active route highlighting
- Top header with user profile avatar
- Mobile friendly hamburger menu
- Smooth hover animations & transitions
State Management (Redux)
- `authSlice` – login/logout, remember me, localStorage sync
- `productSlice` – add/delete/search products
- Centralized store with clean slice separation

-------------------------------------------------------------------------------------------------------------------------------------
Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18 | UI library |
| Redux Toolkit | State management |
| React Router v6 | Routing & protected routes |
| React Icons | Icons (FaLeaf, FaBox, FaTruck, etc.) |
| CSS3 | Custom styling (no external UI library) |
| LocalStorage | Persist auth session |

-------------------------------------------------------------------------------------------------------------------------------------
Folder Structure

urban-harvest-dashboard/
├── public/
│ ├── index.html
│ └── manifest.json
├── src/
│ ├── assets/ # Images, logos
│ ├── components/
│ │ ├── Layout/ # Sidebar.jsx, Header.jsx + CSS
│ │ ├── UI/ # Card.jsx, Modal.jsx, ProductCard.jsx, RecentOrdersTable.jsx
│ │ └── ProtectedRoute.jsx
│ ├── pages/
│ │ ├── Login.jsx/.css
│ │ ├── Dashboard.jsx/.css
│ │ └── ProductManagement.jsx/.css
│ ├── store/
│ │ ├── store.js
│ │ └── slices/
│ │ ├── authSlice.js
│ │ └── productSlice.js
│ ├── utils/
│ │ └── mockData.js # Dummy products, orders, stats
│ ├── App.js/.css
│ ├── index.js/.css
│ └── index.js
├── .gitignore
├── package.json
├── README.md
└── vercel.json # (optional, for Vercel deployment)

text

----------------------------------------------------------------------------------------------------------------------------------

Getting Started

 Prerequisites
- Node.js (v16 or v18 recommended)
- npm or yarn

Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/urban-harvest-dashboard.git
   cd urban-harvest-dashboard

2. Install Dependencies
npm install
# or
yarn install

3. Start the Deployment server
npm start
Open http://localhost:3000 to view it in the browser.

4. Build for production

bash
npm run build
Creates an optimized build/ folder.

Demo Login
Use the following credentials to access the dashboard:

Field                     Value
Email                  admin@urbanharvest.com
Password          harvest123
✅ Check "Remember Me" to stay logged in after page refresh.

📱 Responsive Breakpoints
Device  Sidebar Cards   Table
Desktop (>1024px)   Fixed   4 columns   Full width
Tablet (768px–1024px)   Collapsible 2–3 columns Horizontal scroll
Mobile (<768px) Hamburger menu  1 column    Horizontal scroll


