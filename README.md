Frontend: React + Tailwind + Chart.js + Leaflet (Map)
Backend: Node.js + Express
Database: MongoDB
File Upload: Multer + CSV Parser
Auth: JWT (Admin Login)




# 🪪 Aadhar UIDAI Mini Project (MERN Stack)

A full-stack MERN-based web application inspired by UIDAI-style dashboard and analytics UI.
This project focuses on a modern government-style interface with landing page, dashboard, and scalable architecture for future backend integration.

---

## 🌐 Live Demo

🔗 Deployed Link (landing page):
https://aadii-01.github.io/aadhar-uidai-mini-project/

🔗 Deployed Link (other pages):
https://aadii-01.github.io/aadhar-uidai-mini-project/#/dash

> Note: Uses HashRouter for GitHub Pages compatibility.

---

## 📌 Project Overview

This project is built using the MERN stack (MongoDB, Express, React, Node.js) with a primary focus on:

* Clean UI/UX design
* Dashboard analytics layout
* Scalable frontend architecture
* Future backend API integration

Currently, the frontend UI is fully functional and deployed. Backend can be integrated later for real UIDAI-like data processing.

---

## 🧱 Tech Stack

### Frontend

* React.js (Create React App)
* React Router DOM
* CSS (Custom Styling)
* JavaScript (ES6+)

### Backend (Planned / Optional)

* Node.js
* Express.js
* MongoDB (Future Integration)

---

## 📂 Project Structure

```
mini-project/
│
├── client/              # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── pages/       # Landing & Dashboard Pages
│   │   ├── components/  # Reusable UI Components
│   │   ├── assets/      # Images & Icons
│   │   ├── App.js
│   │   └── index.js
│
├── server/              # Backend (Optional / Future)
└── README.md
```

---

## ⚙️ Prerequisites (Required Installations)

Before running this project, install:

### 1️⃣ Node.js (LTS Recommended)

Download from: https://nodejs.org
Verify installation:

```bash
node -v
npm -v
```

### 2️⃣ Git (For Version Control)

Install Git:

```bash
sudo apt update
sudo apt install git
```

Verify:

```bash
git --version
```

### 3️⃣ Code Editor (Recommended)

* VS Code (Recommended)
* Any IDE supporting JavaScript & React

---

## 🚀 How to Run the Project Locally (Frontend)

### Step 1: Clone the Repository

```bash
git clone https://github.com/Aadii-01/aadhar-uidai-mini-project.git
cd aadhar-uidai-mini-project
```

### Step 2: Install Frontend Dependencies

```bash
cd client
npm install
```

### Step 3: Start React Development Server

```bash
npm start
```

Now open:

```
http://localhost:3000
```

---

## 🖥️ Running Backend (Optional - Future Integration)

```bash
cd server
npm install
npm start
```

Default backend runs on:

```
http://localhost:5000
```

---

## 📊 Available Pages

### 🏠 Landing Page

* Government-style UI layout
* Hero section
* Navigation design

### 📈 Dashboard Page

* KPI Cards
* Sidebar Navigation
* Analytics UI (Demand Analysis Ready)
* Data Upload Section (UI)

Dashboard Route:

```
#/dashboard
```

---

## 🌍 Deployment (GitHub Pages)

This project is deployed using GitHub Pages.

### Deployment Steps:

```bash
cd client
npm install gh-pages --save-dev
npm run deploy
```

### Important Configuration:

* Router: HashRouter (for GitHub Pages)
* Homepage set to "." in package.json

---

## 📜 NPM Scripts (Client)

```bash
npm start      # Runs development server
npm build      # Builds production files
npm run deploy # Deploys to GitHub Pages
```

---

## 🧠 Key Features

* Modern Dashboard UI
* Responsive Layout
* Scalable MERN Architecture
* Clean Component-Based Structure
* GitHub Pages Deployment
* Beginner-Friendly Setup

---

## 🚫 Files Ignored (Best Practice)

The following are NOT pushed to GitHub:

* node_modules/
* build/
* .env files

Handled via `.gitignore`.

---

## 🔮 Future Enhancements

* MongoDB Database Integration
* Real UIDAI Data Simulation APIs
* Authentication System (Login/Admin)
* Data Visualization Charts (Recharts / Chart.js)
* Aadhaar Verification Module
* API-Based Data Upload & Analysis

---

## 👨‍💻 Author

Aaditya Shirke
Sai Badave
Samruddhi Khot

---

## 📄 License

This project is created for academic and educational purposes only.
Not affiliated with UIDAI or any government organization.
