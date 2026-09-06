🍔 Food Delivery Website

A modern, responsive food delivery website that allows users to browse restaurants, explore menus, add items to their cart, and place food orders online.

📌 Features
🏠 Clean and responsive homepage
🍕 Browse food items and restaurant menus
🔎 Search and filter food items
🛒 Add, remove, and update items in the shopping cart
💳 Checkout and order placement
📦 Order tracking and order history
👤 User registration and login
📱 Fully responsive design for mobile, tablet, and desktop
⭐ Restaurant and food-item ratings
🧾 Order summary and pricing details
🔐 Secure user authentication
🛠️ Technologies Used
Frontend: HTML, CSS, JavaScript / React
Backend: Node.js, Express.js
Database: MongoDB
Authentication: JWT
Styling: CSS / Tailwind CSS / Bootstrap
API: REST API

Update this section according to the technologies actually used in your project.

📂 Project Structure
food-delivery/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   └── package.json
│
├── .env
├── .gitignore
└── README.md

🚀 Getting Started

Follow these steps to run the project locally.

1. Clone the Repository
git clone https://github.com/ryzenousarko/Cravoo.git
cd food-delivery

2. Install Dependencies

For the frontend:

cd frontend
npm install


For the backend:

cd ../backend
npm install

3. Configure Environment Variables

Create a .env file inside the backend directory:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


Add any additional API keys or configuration variables required by your project.

4. Start the Backend
cd backend
npm run dev


The backend should start on:

http://localhost:5000

5. Start the Frontend

Open another terminal:

cd frontend
npm run dev


Then open the URL displayed by your development server, commonly:

http://localhost:5173

🔑 User Flow
User visits the website.
User browses available restaurants and food items.
User selects food and adds it to the cart.
User reviews the cart and updates quantities if needed.
User proceeds to checkout.
User provides delivery details.
User places the order.
The order is saved and processed.
User can view their order status and order history.
🛒 Cart

The shopping cart allows users to:

Add food items
Increase or decrease quantity
Remove items
View subtotal
View delivery charges
View the final order total
📦 Orders

Users can view information such as:

Order ID
Ordered items
Quantity
Total price
Delivery address
Order status
Order date

Example order statuses:

Pending → Confirmed → Preparing → Out for Delivery → Delivered

🔐 Authentication

The website supports user authentication so customers can securely access their accounts.

Typical authentication features include:

User registration
User login
Password protection
JWT-based authentication
Protected user routes
Logout
👨‍💼 Admin Features

If an admin dashboard is included, administrators can:

Add and remove food items
Manage restaurants
Update food prices
View customer orders
Update order status
Manage users
View basic order statistics
📱 Responsive Design

The website is designed to work across different screen sizes:

💻 Desktop
📱 Mobile
📲 Tablet
🧪 Testing

Run the project's test suite with:

npm test


Update this command if your project uses a different testing setup.

🔮 Future Improvements

Possible future features include:

💳 Online payment integration
📍 Live delivery tracking
🗺️ Interactive maps
🔔 Push notifications
🎟️ Discount coupons
❤️ Favorite restaurants and food items
⭐ Customer reviews
🤖 AI-powered food recommendations
🌙 Dark mode
📊 Advanced admin analytics
🤝 Contributing

Contributions are welcome!

Fork the repository.
Create a new branch:
git checkout -b feature/new-feature

Make your changes.
Commit your changes:
git commit -m "Add new feature"

Push the branch:
git push origin feature/new-feature

Open a Pull Request.
📄 License

This project is licensed under the MIT License.

👨‍💻 Author

Arkodeep Sharma

GitHub: https://github.com/ryzenousarko
Email: arkodeepsharma21@gmail.com

⭐ If you like this project, consider giving it a star on GitHub!
