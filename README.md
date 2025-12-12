<===================InvestoXpert: Real Estate Property Management System (MERN Stack)=================>

## 🌟 Project Overview

InvestoXpert is a full-stack (MERN) application designed for efficient real estate property listing and management. It provides an administrator with a dedicated dashboard to add, delete, and manage comprehensive property details, including structured descriptions, key highlights, loan facilities, and map locations.

### Key Features:

* **Property Management:** Full CRUD (Create, Read, Update, Delete) operations.
* **Detailed Data Entry:** Dashboard supports dedicated text areas for Full Description, Key Highlights, and Loan Facilities.
* **Location Integration:** Uses Google Maps Embed URLs to display the exact property location on the detail page.
* **Responsive UI:** Designed using Tailwind CSS for a clean, modern, and mobile-friendly interface.
* **File Handling:** Uses Multer for secure single image file uploads.

## ⚙️ Technology Stack (Tech Stack)

This project is built using the MERN stack architecture.

### 🔹 Frontend Technologies

| Package | Use Case |
| :<-------- | :---------> |
| **React.js** | Core library for building the user interface and component architecture. |
| **React Router DOM** | Handles client-side routing and navigation. |
| **Tailwind CSS** | Utility-first CSS framework for rapid and responsive styling. |
| **Lucide React** | Provides vector icons (MapPin, Bed, Bath, etc.) for the UI. |

### 🔹 Backend Technologies

| Technology | Use Case |
| :<----------- | :-----------> |
| **Node.js / Express.js** | Backend framework for building RESTful APIs. |
| **MongoDB / Mongoose** | NoSQL Database and Object Data Modeling (ODM) for data persistence. |
| **Multer** | Middleware for handling image file uploads (multipart/form-data). |
| **dotenv / CORS** | Environment variable management and cross-origin resource sharing configuration. |

---

## 📂 Project Structure

The project uses a standard multi-repository structure separating the client and server codebases.

INVESTOXPERT/ ├── backend/ # Node.js/Express Server Code │ ├── models/ # Mongoose Schemas (PropertySchema.js) │ ├── routes/ # Express API Routes (propertyRoutes.js) │
└── server.js # Server Entry Point & DB Connection 
└── frontend/ # React Application Code ├── src/ │ ├── components/pages/HomePage Or Dashboard folder 
