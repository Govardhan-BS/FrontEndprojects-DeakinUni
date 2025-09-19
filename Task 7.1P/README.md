# Task 7.1P - DEV@Deakin Login & Registration Page

## Overview
This project implements a secure login and registration system for the DEV@Deakin web application using React, Firebase Authentication, and Firestore database.

## Features
- User registration with name, last name, email, and password
- User login with email and password validation
- Secure authentication using Firebase
- User data storage in Firestore database
- Responsive design with Semantic UI React
- Protected routes for authenticated users
- Error handling and validation

## Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Firebase project setup

## Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Task-7.1P
```

2. Install dependencies:
```bash
npm install
```

3. Configure Firebase:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication (Email/Password)
   - Enable Firestore Database
   - Copy your Firebase config to `src/firebase/config.js`

4. Update Firebase configuration in `src/firebase/config.js`:
```javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};
```

## Running the Application

1. Start the development server:
```bash
npm start
```

2. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure
```
src/
├── components/
│   ├── Header.js          # Navigation header
│   ├── Header.css
│   ├── Login.js           # Login form component
│   ├── Login.css
│   ├── SignUp.js          # Registration form component
│   ├── SignUp.css
│   ├── Home.js            # Home page after login
│   └── Home.css
├── firebase/
│   └── config.js          # Firebase configuration
├── App.js                 # Main application component
├── App.css
├── index.js               # Application entry point
└── index.css
```

## Usage

### Registration
1. Navigate to the signup page
2. Fill in your name, last name, email, and password
3. Confirm your password
4. Click "Create" to register

### Login
1. Enter your email and password
2. Click "Login" to access your account
3. Upon successful login, you'll be redirected to the home page

## Technologies Used
- React 18.2.0
- React Router DOM 6.8.0
- Firebase 10.7.0
- Semantic UI React 2.1.5
- Semantic UI CSS 2.5.0

## Error Handling
The application includes comprehensive error handling for:
- Invalid login credentials
- Email already in use during registration
- Weak passwords
- Network errors
- Form validation errors

## Security Features
- Firebase Authentication for secure user management
- Protected routes for authenticated users
- Form validation and sanitization
- Secure password storage

## Deployment
To build for production:
```bash
npm run build
```

## Contributing
This is a university assignment project. Please follow the submission guidelines provided in the task requirements.

## License
This project is created for educational purposes as part of SIT313 - Full-Stack Development course.
