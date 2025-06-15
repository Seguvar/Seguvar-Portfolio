import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="contact section">
      <div class="container">
        <div class="section-header text-center">
          <h2 class="section-title">Get In Touch</h2>
          <p class="section-subtitle">Let's discuss your next project or opportunity</p>
        </div>
        <br>
        <div class="contact-content">
          <div class="contact-info">
            <div class="info-card">
              <div class="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3>Location</h3>
              <a href="https://maps.app.goo.gl/B2Y4Ng6bjmRPRWTv8" target="_blank"><p style="color: #00d4ff;">5-3-88, Main Road<br>Keela Surandai, Tamil Nadu</p></a>
              
            </div>
            
            <div class="info-card">
              <div class="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <h3>Email</h3>
              <p><a href="mailto:seguvar.m@gmail.com">seguvar.m&#64;gmail.com</a></p>
            </div>
            
            <div class="info-card">
              <div class="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 19c-5 0-8-3-8-8 0-5 3-8 8-8s8 3 8 8c0 5-3 8-8 8z"></path>
                  <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12"></path>
                </svg>
              </div>
              <h3>GitHub</h3>
              <p><a href="https://github.com/Seguvar" target="_blank" rel="noopener">github.com/Seguvar</a></p>
            </div>
            
            <div class="info-card">
              <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.71-.52-1.248-1.342-1.248-.822 0-1.357.538-1.357 1.248 0 .694.52 1.248 1.327 1.248h.014zm4.908 8.212V9.359c0-.216.016-.432.08-.586.174-.432.57-.88 1.236-.88.872 0 1.22.664 1.22 1.637v3.864h2.4v-4.146c0-2.22-1.184-3.252-2.764-3.252-1.28 0-1.845.7-2.165 1.193v.025h-.014a5.54 5.54 0 0 1 .014-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg>
              </div>
              <h3>LinkedIn</h3>
              <p><a href="https://www.linkedin.com/in/sangara-sequvar-m" target="_blank" rel="noopener">linkedin.com/in/sangara-sequvar-m</a></p>
            </div>
            
            <div class="social-links">
              <h3>Connect With Me</h3>
              <div class="social-icons">
                <a href="https://github.com/Seguvar" target="_blank" rel="noopener" class="social-link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 19c-5 0-8-3-8-8 0-5 3-8 8-8s8 3 8 8c0 5-3 8-8 8z"></path>
                    <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12"></path>
                  </svg>
                </a>
                <a href="mailto:seguvar.m@gmail.com" class="social-link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/sangara-sequvar-m" target="_blank" rel="noopener" class="social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.71-.52-1.248-1.342-1.248-.822 0-1.357.538-1.357 1.248 0 .694.52 1.248 1.327 1.248h.014zm4.908 8.212V9.359c0-.216.016-.432.08-.586.174-.432.57-.88 1.236-.88.872 0 1.22.664 1.22 1.637v3.864h2.4v-4.146c0-2.22-1.184-3.252-2.764-3.252-1.28 0-1.845.7-2.165 1.193v.025h-.014a5.54 5.54 0 0 1 .014-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div class="contact-form-container">
            <form class="contact-form" (ngSubmit)="onSubmit()" #contactForm="ngForm">
              <div class="form-group">
                <label for="name" class="form-label">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  class="form-input"
                  [(ngModel)]="formData.name"
                  required
                  placeholder="Enter your full name"
                />
              </div>
              
              <div class="form-group">
                <label for="email" class="form-label">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="form-input"
                  [(ngModel)]="formData.email"
                  required
                  placeholder="Enter your email address"
                />
              </div>
              
              <div class="form-group">
                <label for="subject" class="form-label">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  class="form-input"
                  [(ngModel)]="formData.subject"
                  required
                  placeholder="What's this about?"
                />
              </div>
              
              <div class="form-group">
                <label for="message" class="form-label">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  class="form-textarea"
                  [(ngModel)]="formData.message"
                  required
                  placeholder="Tell me about your project or opportunity..."
                  rows="6"
                ></textarea>
              </div>
              
              <div class="form-actions">
                <button
                  type="submit"
                  class="btn btn-primary"
                  [disabled]="isSubmitting || !contactForm.valid"
                >
                  <span *ngIf="!isSubmitting">Send Message </span>
                  <span *ngIf="isSubmitting" class="loading-text">
                    <div class="loading-spinner"></div>
                    Sending...
                  </span>
                  <svg *ngIf="!isSubmitting" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22,2 15,22 11,13 2,9"></polygon>
                  </svg>
                </button>
              </div>
            </form>
            
            <div *ngIf="submitMessage" class="alert" [class.alert-success]="submitSuccess" [class.alert-error]="!submitSuccess">
              {{ submitMessage }}
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact {
      background: var(--bg-secondary);
    }
    
    .contact-content {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      gap: var(--spacing-3xl);
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .contact-info {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-xl);
    }
    
    .info-card {
      background: var(--bg-card);
      padding: var(--spacing-xl);
      border-radius: var(--border-radius-lg);
      border: 1px solid var(--border-color);
      transition: all var(--transition-normal);
    }
    
    .info-card:hover {
      transform: translateY(-4px);
      border-color: var(--primary-color);
      box-shadow: 0 15px 30px rgba(0, 212, 255, 0.1);
    }
    
    .info-icon {
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
      border-radius: var(--border-radius-lg);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: var(--spacing-md);
      color: white;
    }
    
    .info-card h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: var(--spacing-sm);
    }
    
    .info-card p {
      color: var(--text-secondary);
      line-height: 1.6;
    }
    
    .info-card a {
      color: var(--primary-color);
      text-decoration: none;
      transition: color var(--transition-normal);
    }
    
    .info-card a:hover {
      color: #00b8e6;
    }
    
    .social-links {
      background: var(--bg-card);
      padding: var(--spacing-xl);
      border-radius: var(--border-radius-lg);
      border: 1px solid var(--border-color);
      text-align: center;
    }
    
    .social-links h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: var(--spacing-lg);
    }
    
    .social-icons {
      display: flex;
      justify-content: center;
      gap: var(--spacing-md);
    }
    
    .social-link {
      width: 50px;
      height: 50px;
      background: var(--bg-secondary);
      border: 2px solid var(--border-color);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-secondary);
      text-decoration: none;
      transition: all var(--transition-normal);
    }
    
    .social-link:hover {
      border-color: var(--primary-color);
      color: var(--primary-color);
      transform: translateY(-2px);
    }
    
    .contact-form-container {
      background: var(--bg-card);
      padding: var(--spacing-2xl);
      border-radius: var(--border-radius-xl);
      border: 1px solid var(--border-color);
    }
    
    .contact-form {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-lg);
    }
    
    .form-actions {
      margin-top: var(--spacing-md);
    }
    
    .btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    
    .loading-text {
      display: flex;
      align-items: center;
      gap: var(--spacing-sm);
    }
    
    .loading-spinner {
      width: 16px;
      height: 16px;
      border: 2px solid transparent;
      border-top: 2px solid currentColor;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    @media (max-width: 768px) {
      .contact-content {
        grid-template-columns: 1fr;
        gap: var(--spacing-2xl);
      }
      
      .contact-form-container {
        padding: var(--spacing-xl);
      }
      
      .social-icons {
        gap: var(--spacing-sm);
      }
    }
  `]
})
export class ContactComponent {
  formData: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  submitMessage = '';
  submitSuccess = false;

  constructor(private http: HttpClient) {}

  async onSubmit() {
    if (this.isSubmitting) return;

    this.isSubmitting = true;
    this.submitMessage = '';

    try {
      // Simulate API call - replace with actual Spring Boot endpoint
      const response = await this.http.post('http://localhost:8080/api/contact', this.formData).toPromise();
      
      this.submitSuccess = true;
      this.submitMessage = 'Thank you for your message! I\'ll get back to you soon.';
      this.resetForm();
    } catch (error) {
      this.submitSuccess = false;
      this.submitMessage = 'Sorry, there was an error sending your message. Please try again or contact me directly via email.';
    } finally {
      this.isSubmitting = false;
      
      // Clear message after 5 seconds
      setTimeout(() => {
        this.submitMessage = '';
      }, 5000);
    }
  }

  private resetForm() {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}