# Environment Setup Guide

## Step 1: Create .env File

Create a new file called `.env` in the "Welcome email" directory with the following content:

```
SENDGRID_API_KEY=SG.your_actual_api_key_here
FROM_EMAIL=noreply@sendgrid.net
PORT=3000
```

## Step 2: Replace the API Key

Replace `SG.your_actual_api_key_here` with your actual SendGrid API key that starts with "SG."

## Step 3: Restart the Server

1. Stop the current server (Ctrl+C in the terminal)
2. Start it again: `npm start`

## Step 4: Test the Email Functionality

1. Open http://localhost:3000 in your browser
2. Enter a valid email address
3. Click "Subscribe"
4. Check the email for the welcome message

## Troubleshooting

- **"API key does not start with SG."**: Make sure your API key starts with "SG."
- **"From domain required"**: The sendgrid.net domain should work for testing
- **Server not restarting**: Make sure to stop the current server first (Ctrl+C)

## Success Indicators

- ✅ Server starts without API key warnings
- ✅ Form submission shows "Welcome email sent successfully!"
- ✅ You receive the welcome email in your inbox 