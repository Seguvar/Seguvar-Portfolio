package com.sangarasequvar.portfolio.service;

import com.sangarasequvar.portfolio.dto.ContactRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    @Value("${app.email.to:seguvar.m@gmail.com}")
    private String toEmail;

    @Value("${app.email.from:noreply@sangarasequvar.com}")
    private String fromEmail;

    public void sendContactEmail(ContactRequest request) throws MessagingException {
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

        helper.setTo(toEmail);
        helper.setFrom(fromEmail);
        helper.setSubject("Portfolio Contact: " + request.getSubject());
        helper.setReplyTo(request.getEmail());

        String htmlContent = buildContactEmailContent(request);
        helper.setText(htmlContent, true);

        mailSender.send(message);
    }

    public void sendThankYouEmail(String recipientEmail, String recipientName) throws MessagingException {
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

        helper.setTo(recipientEmail);
        helper.setFrom(fromEmail);
        helper.setSubject("Thank you for contacting me!");

        String htmlContent = buildThankYouEmailContent(recipientName);
        helper.setText(htmlContent, true);

        mailSender.send(message);
    }

    private String buildContactEmailContent(ContactRequest request) {
        return """
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>New Contact Message</title>
                <style>
                    body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
                    .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 0 20px rgba(0,0,0,0.1); }
                    .header { background: linear-gradient(135deg, #00d4ff, #4ecdc4); color: white; padding: 30px; text-align: center; }
                    .content { padding: 30px; }
                    .field { margin-bottom: 20px; }
                    .label { font-weight: bold; color: #00d4ff; margin-bottom: 5px; }
                    .value { background: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #00d4ff; }
                    .footer { background: #f8f9fa; padding: 20px; text-align: center; color: #666; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>New Contact Message</h1>
                        <p>You have received a new message from your portfolio website</p>
                    </div>
                    <div class="content">
                        <div class="field">
                            <div class="label">From:</div>
                            <div class="value">%s</div>
                        </div>
                        <div class="field">
                            <div class="label">Email:</div>
                            <div class="value">%s</div>
                        </div>
                        <div class="field">
                            <div class="label">Subject:</div>
                            <div class="value">%s</div>
                        </div>
                        <div class="field">
                            <div class="label">Message:</div>
                            <div class="value">%s</div>
                        </div>
                    </div>
                    <div class="footer">
                        <p>This message was sent from your portfolio contact form.</p>
                    </div>
                </div>
            </body>
            </html>
            """.formatted(
                request.getName(),
                request.getEmail(),
                request.getSubject(),
                request.getMessage().replace("\n", "<br>")
            );
    }

    private String buildThankYouEmailContent(String recipientName) {
        return """
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Thank You!</title>
                <style>
                    body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
                    .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 0 20px rgba(0,0,0,0.1); }
                    .header { background: linear-gradient(135deg, #00d4ff, #4ecdc4); color: white; padding: 30px; text-align: center; }
                    .content { padding: 30px; }
                    .highlight { background: #f0f9ff; padding: 20px; border-radius: 10px; border-left: 4px solid #00d4ff; margin: 20px 0; }
                    .footer { background: #f8f9fa; padding: 20px; text-align: center; color: #666; }
                    .social-links { margin: 20px 0; }
                    .social-links a { color: #00d4ff; text-decoration: none; margin: 0 10px; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>Thank You, %s!</h1>
                        <p>Your message has been received</p>
                    </div>
                    <div class="content">
                        <p>Hi %s,</p>
                        <p>Thank you for reaching out to me through my portfolio website. I really appreciate you taking the time to get in touch!</p>
                        
                        <div class="highlight">
                            <h3>What happens next?</h3>
                            <p>I'll review your message carefully and get back to you within 24-48 hours. If your inquiry is urgent, feel free to reach out to me directly at <strong>seguvar.m@gmail.com</strong>.</p>
                        </div>
                        
                        <p>In the meantime, feel free to:</p>
                        <ul>
                            <li>Check out my latest projects on <a href="https://github.com/Seguvar" style="color: #00d4ff;">GitHub</a></li>
                            <li>Connect with me on professional networks</li>
                            <li>Explore more of my work and skills on my portfolio</li>
                        </ul>
                        
                        <p>I'm excited about the possibility of working together and look forward to our conversation!</p>
                        
                        <p>Best regards,<br>
                        <strong>Sangara Sequvar M</strong><br>
                        Full Stack Java Developer</p>
                    </div>
                    <div class="footer">
                        <p>This is an automated response. Please do not reply to this email.</p>
                        <div class="social-links">
                            <a href="https://github.com/Seguvar">GitHub</a> |
                            <a href="mailto:seguvar.m@gmail.com">Email</a>
                        </div>
                    </div>
                </div>
            </body>
            </html>
            """.formatted(recipientName, recipientName);
    }
}