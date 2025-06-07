# ShopLuxe: A Full-Stack MERN E-Commerce Platform

A comprehensive, full-stack e-commerce web application built from the ground up using the MERN stack and deployed as a serverless application on the Firebase platform. This project demonstrates a complete user flow, from browsing products to a multi-step checkout process, all wrapped in a modern, professional, and fully responsive user interface.

**✨ [View Live Demo](https://shopluxe-live-app.web.app) ✨**

---

<!-- 
  INSTRUCTIONS FOR SCREENSHOTS:
  1. Create a folder named `screenshots` in the root of your project.
  2. Take beautiful screenshots of your live application.
  3. Name them `homepage.png`, `cart.png`, and `checkout.png`.
  4. Place them inside the `screenshots` folder.
  5. Delete these comment blocks. 
-->

### Main Homepage
![alt text](<Screenshot 2025-06-07 at 12.47.06 PM.png>)
![ShopLuxe Homepage](./screenshots/homepage.png)

### Cart & Checkout Flow
![alt text](<Screenshot 2025-06-07 at 12.47.32 PM.png>)
![alt text](<Screenshot 2025-06-07 at 12.47.53 PM.png>)
![ShopLuxe Cart & Checkout](./screenshots/checkout.png)

## Key Features

- **Dynamic Product Catalog:** Products are fetched from a live MongoDB Atlas database.
- **Dedicated Product Pages:** Separate, dynamically generated pages for "Today's Deals" and "Best Sellers".
- **Professional UI/UX:**
  - **Loading Skeletons:** Elegant placeholder cards provide a smooth loading experience.
  - **Toast Notifications:** Non-intrusive feedback for actions like adding items to the cart.
  - **Responsive Design:** A seamless user experience on all devices, from large desktops to mobile phones, featuring a collapsible hamburger menu.
- **State Management:** Global cart state managed with React's Context API and `useReducer`, persisting across sessions using `localStorage`.
- **Full E-Commerce Flow:**
  - Add to cart functionality.
  - A clean, multi-column cart page with an order summary.
  - A comprehensive, multi-step style checkout form for shipping and payment simulation.
  - A dedicated order confirmation page.
- **Structured Homepage:** A modern storefront design featuring a hero section, category showcase, featured products, and a newsletter signup block.

## Tech Stack & Architecture

This project was built with a modern, serverless-first MERN architecture.

#### **🖥️ Frontend:**
- **React.js:** For building the user interface.
- **React Router (`v6`):** For all client-side routing.
- **Axios:** For making API requests to the backend.
- **`react-hot-toast`:** For professional, non-blocking notifications.
- **`lucide-react`:** For a lightweight and clean icon set.
- **CSS3:** Custom-written modern CSS with variables, grid, and flexbox for a fully responsive design.

#### **☁️ Backend (Serverless):**
- **Node.js:** JavaScript runtime environment.
- **Express.js:** Web framework for creating the API.
- **Firebase Functions:** The server is deployed as a scalable, serverless Google Cloud Function, managed by Firebase.

#### **🗃️ Database:**
- **MongoDB Atlas:** A fully-managed, cloud-based NoSQL database for storing product information.
- **Mongoose:** Object Data Modeling (ODM) library for MongoDB and Node.js.

#### **🚀 Deployment & DevOps:**
- **Firebase Hosting:** The production React app is deployed to Firebase's global CDN for fast load times.
- **Firebase CLI:** For managing deployments and cloud environment configuration.
- **Git & GitHub:** For version control and source code management.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You must have Node.js (v18 or later) and npm installed on your machine.

### Local Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Pruthvi1001/ecommerce-mini-app.git
    cd ecommerce-mini-app
    ```

2.  **Install Backend Dependencies:**
    ```bash
    cd functions
    npm install
    cd ..
    ```

3.  **Install Frontend Dependencies:**
    ```bash
    cd client
    npm install
    cd ..
    ```

4.  **Set Up Environment Variables:**
    - The backend requires a connection string to a MongoDB Atlas database.
    - Create a new file in the `functions` directory named `.env`.
    - Add your database URI to this file:
      ```
      DATABASE_URI="your_mongodb_atlas_connection_string"
      ```

5.  **Run the Development Server:**
    - This project uses `concurrently` to run both the client and server with a single command from the root directory.
    ```bash
    npm run dev
    ```
    - The React app will open on `http://localhost:3000`.
    - The Node.js server will run on `http://localhost:5000`.

## Deployment

This project is configured for easy deployment to Firebase. After setting up your own Firebase project and configuring the `.firebaserc` file:

1.  **Build the React App:**
    ```bash
    npm run build --prefix client
    ```
2.  **Deploy to Firebase:**
    ```bash
    firebase deploy
    ```