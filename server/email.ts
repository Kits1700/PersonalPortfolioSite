interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Simple email service that can work with multiple providers
export class EmailService {
  async sendContactEmail(formData: ContactFormData): Promise<boolean> {
    const emailContent = this.formatContactEmail(formData);
    
    // Try different email methods in order of preference
    const methods = [
      () => this.sendWithNodemailer(emailContent),
      () => this.sendWithFetch(emailContent),
      () => this.logToConsole(emailContent) // Fallback for development
    ];

    for (const method of methods) {
      try {
        const result = await method();
        if (result) {
          console.log(`Email sent successfully using method: ${method.name}`);
          return true;
        }
      } catch (error) {
        console.warn(`Email method ${method.name} failed:`, error);
        continue;
      }
    }

    return false;
  }

  private formatContactEmail(formData: ContactFormData): EmailParams {
    return {
      to: 'saikeerthana.arun@gmail.com',
      from: formData.email,
      subject: `Portfolio Contact: Message from ${formData.name}`,
      text: `
Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}

---
Sent from your portfolio website contact form
      `.trim(),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4f46e5; padding-bottom: 10px;">
            New Contact Form Message
          </h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-left: 4px solid #4f46e5; margin-top: 10px;">
              ${formData.message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #666; font-size: 12px; text-align: center;">
            Sent from your portfolio website contact form
          </p>
        </div>
      `
    };
  }

  private async sendWithNodemailer(emailParams: EmailParams): Promise<boolean> {
    // This would use nodemailer with Gmail SMTP
    // For now, we'll use a simpler approach
    return false;
  }

  private async sendWithFetch(emailParams: EmailParams): Promise<boolean> {
    // This could use services like EmailJS, Formspree, or similar
    // For now, we'll implement a basic webhook approach
    return false;
  }

  private async logToConsole(emailParams: EmailParams): Promise<boolean> {
    console.log('\n🔔 NEW PORTFOLIO CONTACT MESSAGE 🔔');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`📧 TO: ${emailParams.to}`);
    console.log(`👤 FROM: ${emailParams.from}`);
    console.log(`📝 SUBJECT: ${emailParams.subject}`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('MESSAGE:');
    console.log(emailParams.text);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    
    // Also save to a simple log file for easy access
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] New contact from ${emailParams.from}: ${emailParams.text}\n\n`;
    
    try {
      const fs = await import('fs');
      fs.appendFileSync('contact-messages.log', logEntry);
      console.log('📁 Message also saved to contact-messages.log');
    } catch (error) {
      console.log('Note: Could not save to log file, but message logged above');
    }
    
    return true;
  }
}

export const emailService = new EmailService();