# propertyFO

propertyFO is a comprehensive property management SaaS application designed to streamline the tasks of property managers. Using the MERN stack (MongoDB, Express, React, Node.js), propertyFO offers a secure, optimized, and professional solution for managing properties, tenants, leases, and payments.

## Features

### Tenant Management
- **Invitation System:** Property managers can invite tenants by sending a link to their email address. Property managers need to buy a subscription to use this service.
- **Ticket System:** Both tenants and property managers can create tickets for issues, questions, or requests. Notifications are sent via web notifications or emails.
- **Payment Proof:** Tenants can upload proof of payment, and property managers can confirm the payment.
- **Communication:** Efficient communication between property managers and tenants via the ticket system.

### Property Management
- **Property Creation:** Property managers can create property listings, add pictures, and upload documents.
- **Access Control:** Property managers can control tenant access to property documents, ensuring sensitive information is kept secure.

### Lease Management
- **Lease Agreements:** Create and manage lease agreements with detailed information and renewals.
- **Rent Collection:** Manage rent schedules, track payments, and handle outstanding balances.

## Technology Stack

- **MongoDB:** For storing data related to properties, tenants, leases, and transactions.
- **Express.js:** For backend API and server management.
- **React.js:** For building a responsive and user-friendly frontend.
- **Node.js:** For server-side logic and operations.

## Development Environment

- **IDE:** Visual Studio Code (VSCode)
- **Version Control:** Git
- **Repository:** GitHub
- **Hosting:** VPS with 4GB RAM

## Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/yourusername/propertyFO.git
    ```
2. **Navigate to the project directory:**
    ```sh
    cd propertyFO
    ```
3. **Install backend dependencies:**
    ```sh
    cd backend
    npm install
    ```
4. **Install frontend dependencies:**
    ```sh
    cd ../frontend
    npm install
    ```

## Running the Application

1. **Start the backend server:**
    ```sh
    cd backend
    npm start
    ```
2. **Start the frontend server:**
    ```sh
    cd frontend
    npm start
    ```
3. **Access the application:**
    Open your browser and navigate to `http://localhost:3000`

## Project Structure

### Backend (Express.js)
- **routes/**
  - Contains route definitions for API endpoints.
- **controllers/**
  - Contains logic for handling requests.
- **models/**
  - Contains MongoDB schema definitions.
- **middleware/**
  - Contains middleware functions for authentication, validation, etc.

### Frontend (React.js)
- **components/**
  - Contains reusable React components.
- **services/**
  - Contains functions for making API calls.
- **utils/**
  - Contains utility functions.

## Security

- **Authentication:** JWT-based authentication for secure access.
- **Data Encryption:** Sensitive data is encrypted.
- **Access Control:** Fine-grained access control to manage who can see and do what.

## Contributing

1. **Fork the repository**
2. **Create a new branch**
    ```sh
    git checkout -b feature-name
    ```
3. **Commit your changes**
    ```sh
    git commit -m 'Add some feature'
    ```
4. **Push to the branch**
    ```sh
    git push origin feature-name
    ```
5. **Open a pull request**

## License

This project is licensed under a proprietary license. See the LICENSE.txt file for more information.

## Contact

For questions or support, please contact [your email address].

