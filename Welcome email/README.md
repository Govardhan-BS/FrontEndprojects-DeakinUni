# Task 2.1P - DEV@Deakin Email Subscription Component

## Overview
This project implements a transactional email component for the DEV@Deakin application that sends welcome emails to new subscribers. The component includes a modern, responsive web interface and a Node.js backend with SendGrid integration.

## Features
- Email subscription form with validation
- Automatic welcome email sending via SendGrid
- Responsive design matching existing app UI
- Error handling and user feedback
- Modern gradient design consistent with existing pages

## Project Structure
```
Welcome email/
├── public/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── script.js
│   ├── images/
│   │   └── deakin image.jpg
│   └── index.html
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
├── SETUP.md
└── README.md
```

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure SendGrid API
1. Sign up for a SendGrid account at https://sendgrid.com
2. Create an API key in your SendGrid dashboard
3. Create a `.env` file in the root directory with:
```
SENDGRID_API_KEY=your_sendgrid_api_key_here
FROM_EMAIL=noreply@devdeakin.com
PORT=3000
```

### 3. Run the Application
```bash
npm start
```
The application will be available at `http://localhost:3000`

## API Endpoints

### POST /subscribe
Sends a welcome email to the provided email address.

**Request Body:**
```json
{
  "email": "user@example.com"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Welcome email sent successfully!"
}
```

## Email Template
The welcome email includes:
- Professional HTML layout
- DEV@Deakin branding
- Welcome message and expectations
- Responsive design for all devices

## Error Handling
- Email validation (format and required field)
- Network error handling
- SendGrid API error handling
- User-friendly error messages

## Technologies Used
- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Backend:** Node.js, Express.js
- **Email Service:** SendGrid API
- **Styling:** Custom CSS with gradient backgrounds

## Design Consistency
The component maintains design consistency with the existing DEV@Deakin application through:
- Same color scheme (#008080, gradients)
- Consistent typography and spacing
- Matching button styles and hover effects
- Responsive design patterns

## Testing
1. Start the server: `npm start`
2. Open `http://localhost:3000`
3. Enter a valid email address
4. Click "Subscribe"
5. Check the provided email for the welcome message

## Deployment
The application can be deployed to platforms like:
- Heroku
- Vercel
- Railway
- DigitalOcean

Remember to set environment variables in your deployment platform.

## Author
Govardhanan - SIT313 Full-Stack Development 