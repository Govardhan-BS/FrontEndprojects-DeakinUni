# Enhanced Post Page with Firebase Integration

This is an enhanced version of the New Post Page with Firebase integration for image upload and data storage.

## Features

- **Post Type Selection**: Choose between Question and Article post types
- **Image Upload**: Upload images with preview functionality
- **Firebase Integration**: 
  - Firestore for data storage
  - Firebase Storage for image uploads
- **Form Validation**: Comprehensive validation for all fields
- **Responsive Design**: Mobile-friendly interface
- **Modern UI**: Beautiful gradient design with animations

## Setup Instructions

### 1. Firebase Configuration

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or use an existing one
3. Enable Firestore Database
4. Enable Firebase Storage
5. Get your Firebase configuration from Project Settings
6. Update `src/firebase/config.js` with your Firebase configuration:

```javascript
const firebaseConfig = {
  apiKey: "your-api-key-here",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Application

```bash
npm start
```

The application will open at `http://localhost:3000`

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header
│   ├── Header.css         # Header styles
│   ├── NewPostPage.js     # Main post creation component
│   └── NewPostPage.css    # Post page styles
├── firebase/
│   └── config.js          # Firebase configuration
├── App.js                 # Main app component
├── App.css               # App styles
├── index.js              # Entry point
└── index.css             # Global styles
```

## Key Features Implemented

### Image Upload
- File selection with browse button
- Image preview before upload
- Cancel/Remove image functionality
- Firebase Storage integration
- Upload progress indication

### Data Storage
- Posts saved to Firestore
- Automatic timestamp generation
- Structured data with post type differentiation

### Form Validation
- Required field validation
- Real-time error display
- Conditional validation based on post type

### UI Enhancements
- Modern gradient design
- Smooth animations and transitions
- Responsive layout
- Loading states for uploads

## Technologies Used

- React 18.2.0
- Semantic UI React
- Firebase (Firestore & Storage)
- CSS3 with modern features

## Notes

- Make sure to configure Firebase properly before running the application
- The image upload feature requires Firebase Storage to be enabled
- All form data is validated before submission
- Images are stored in Firebase Storage with unique names
