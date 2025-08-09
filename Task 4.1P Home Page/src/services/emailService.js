// Email Service for DEV@Deakin Newsletter
// This service handles welcome emails and newsletter subscriptions

export class EmailService {
  static async sendWelcomeEmail(email) {
    const welcomeEmail = {
      to: email,
      subject: "Welcome to DEV@Deakin! 🎉",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #008080; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">DEV@Deakin</h1>
            <p style="margin: 5px 0 0 0; font-size: 16px;">Your community for developers, by developers</p>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px;">
            <h2 style="color: #333; margin-top: 0;">Welcome to DEV@Deakin! 🎉</h2>
            
            <p style="color: #666; line-height: 1.6;">
              Dear Developer,
            </p>
            
            <p style="color: #666; line-height: 1.6;">
              We're thrilled to have you join our developer community! You're now part of a growing network 
              of developers who share knowledge, collaborate on projects, and support each other's growth.
            </p>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #008080; margin-top: 0;">What you can expect from our daily insider:</h3>
              <ul style="color: #666; line-height: 1.8;">
                <li>📚 Latest tech articles and tutorials</li>
                <li>💡 Community highlights and discussions</li>
                <li>🛠️ Exclusive developer resources</li>
                <li>🎯 Event announcements and meetups</li>
                <li>🚀 Tips and tricks from fellow developers</li>
              </ul>
            </div>
            
            <p style="color: #666; line-height: 1.6;">
              Stay connected with fellow developers and never miss out on the latest in tech!
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="http://localhost:3000" style="background-color: #008080; color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; display: inline-block;">
                Visit DEV@Deakin
              </a>
            </div>
            
            <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 30px 0;">
            
            <p style="color: #999; font-size: 14px; text-align: center; margin: 0;">
              Best regards,<br>
              <strong>The DEV@Deakin Team</strong><br><br>
              ---<br>
              DEV@Deakin - Your community for developers, by developers
            </p>
          </div>
        </div>
      `,
      text: `
Welcome to DEV@Deakin! 🎉

Dear Developer,

We're thrilled to have you join our developer community! You're now part of a growing network of developers who share knowledge, collaborate on projects, and support each other's growth.

What you can expect from our daily insider:
• Latest tech articles and tutorials
• Community highlights and discussions
• Exclusive developer resources
• Event announcements and meetups
• Tips and tricks from fellow developers

Stay connected with fellow developers and never miss out on the latest in tech!

Best regards,
The DEV@Deakin Team

---
DEV@Deakin - Your community for developers, by developers
      `
    };

    // Simulate email sending with delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real application, this would integrate with an email service like:
    // - SendGrid
    // - Mailgun
    // - AWS SES
    // - Nodemailer (for Node.js backend)
    
    console.log('Welcome email sent to:', email);
    console.log('Email content:', welcomeEmail);
    
    return welcomeEmail;
  }

  static async sendDailyNewsletter(email, content) {
    // This would be used for daily newsletter emails
    const newsletterEmail = {
      to: email,
      subject: "DEV@Deakin Daily Insider",
      html: content,
      text: content.replace(/<[^>]*>/g, '') // Strip HTML tags for text version
    };

    await new Promise(resolve => setTimeout(resolve, 500));
    console.log('Daily newsletter sent to:', email);
    
    return newsletterEmail;
  }

  static validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}

export default EmailService; 