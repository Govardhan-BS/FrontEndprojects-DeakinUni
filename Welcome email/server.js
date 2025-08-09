const express = require('express');
const sgMail = require('@sendgrid/mail');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        timestamp: new Date().toISOString(),
        service: 'DEV@Deakin Email Subscription'
    });
});

app.post('/subscribe', async (req, res) => {
    try {
        const { email } = req.body;
        
        if (!email) {
            return res.status(400).json({ 
                success: false, 
                message: 'Email address is required' 
            });
        }
        
        if (!email.includes('@') || !email.includes('.')) {
            return res.status(400).json({ 
                success: false, 
                message: 'Please provide a valid email address' 
            });
        }
        
        if (!process.env.SENDGRID_API_KEY) {
            return res.status(500).json({ 
                success: false, 
                message: 'Email service not configured. Please contact administrator.' 
            });
        }

        const msg = {
            to: email,
            from: process.env.FROM_EMAIL || 'noreply@devdeakin.com',
            subject: 'Welcome to DEV@Deakin! 🎉',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
                    <div style="background: linear-gradient(90deg, #43cea2 0%, #185a9d 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
                        <h1 style="color: white; margin: 0; font-size: 28px;">Welcome to DEV@Deakin!</h1>
                    </div>
                    <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                        <h2 style="color: #008080; margin-bottom: 20px;">Hello there! 👋</h2>
                        <p style="color: #333; line-height: 1.6; margin-bottom: 20px;">
                            Thank you for subscribing to our daily insider! We're excited to have you join our community of developers and tech enthusiasts.
                        </p>
                        <p style="color: #333; line-height: 1.6; margin-bottom: 20px;">
                            You'll now receive our latest updates, tech insights, and exclusive content delivered straight to your inbox.
                        </p>
                        <div style="background: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%); padding: 20px; border-radius: 8px; margin: 20px 0;">
                            <h3 style="color: #008080; margin-top: 0;">What to expect:</h3>
                            <ul style="color: #333; line-height: 1.6;">
                                <li>Daily tech insights and trends</li>
                                <li>Exclusive developer resources</li>
                                <li>Community highlights and events</li>
                                <li>Tips and tutorials from industry experts</li>
                            </ul>
                        </div>
                        <p style="color: #666; font-size: 14px; margin-top: 30px;">
                            Best regards,<br>
                            The DEV@Deakin Team
                        </p>
                    </div>
                </div>
            `
        };

        await sgMail.send(msg);
        
        res.json({ 
            success: true, 
            message: 'Welcome email sent successfully!' 
        });
        
    } catch (error) {
        console.error('Error sending email:', error);
        
        let errorMessage = 'Failed to send welcome email. Please try again later.';
        
        if (error.response) {
            const { body } = error.response;
            if (body && body.errors) {
                errorMessage = body.errors[0].message || errorMessage;
            }
        }
        
        res.status(500).json({ 
            success: false, 
            message: errorMessage 
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
}); 