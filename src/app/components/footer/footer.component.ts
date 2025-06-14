import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <div class="footer-logo">
              <h3>Sangara Sequvar M</h3>
              <p>Full Stack Java Developer</p>
            </div>
            <p class="footer-description">
              Passionate about creating robust backend systems and engaging user experiences. 
              Always ready to take on new challenges and contribute to innovative projects.
            </p>
            <div class="social-links">
              <a href="https://github.com/Seguvar" target="_blank" rel="noopener" class="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 19c-5 0-8-3-8-8 0-5 3-8 8-8s8 3 8 8c0 5-3 8-8 8z"></path>
                  <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12"></path>
                </svg>
              </a>
              <a href="mailto:seguvar.m@gmail.com" class="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
          </div>
          
          <div class="footer-section">
            <h4>Quick Links</h4>
            <ul class="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4>Technologies</h4>
            <ul class="footer-links">
              <li>Java & Spring Boot</li>
              <li>Angular & TypeScript</li>
              <li>HTML, CSS & JavaScript</li>
              <li>MySQL</li>
              <li>REST APIs</li>
              <li>Git</li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4>Contact Info</h4>
            <div class="contact-info">
              <p>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
               <a href="https://maps.app.goo.gl/CeCBR4aEqnzHaEno8" style="text-decoration: none;color: #b3b3b3" target="_blank">Keela Surandai, Tamil Nadu</a> 
              </p>
              <p>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
               <a href="mailto:seguvar.m@gmail.com" style="text-decoration: none;color: #b3b3b3">seguvar.m&#64;gmail.com</a> 
              </p>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <div class="footer-divider"></div>
          <div class="footer-bottom-content">
            <p>&copy; {{ currentYear }} Sangara Sequvar M. All rights reserved.</p>
            <p>Built with Angular & Spring Boot</p>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: var(--bg-primary);
      border-top: 1px solid var(--border-color);
      padding: var(--spacing-3xl) 0 var(--spacing-xl);
    }
    
    .footer-content {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr;
      gap: var(--spacing-2xl);
      margin-bottom: var(--spacing-2xl);
    }
    
    .footer-section h3,
    .footer-section h4 {
      color: var(--text-primary);
      font-weight: 600;
      margin-bottom: var(--spacing-lg);
    }
    
    .footer-section h3 {
      font-size: 1.5rem;
    }
    
    .footer-section h4 {
      font-size: 1.125rem;
    }
    
    .footer-logo p {
      color: var(--primary-color);
      font-weight: 500;
      margin-bottom: var(--spacing-md);
    }
    
    .footer-description {
      color: var(--text-secondary);
      line-height: 1.6;
      margin-bottom: var(--spacing-lg);
    }
    
    .social-links {
      display: flex;
      gap: var(--spacing-md);
    }
    
    .social-link {
      width: 40px;
      height: 40px;
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
    
    .footer-links {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .footer-links li {
      margin-bottom: var(--spacing-sm);
    }
    
    .footer-links a {
      color: var(--text-secondary);
      text-decoration: none;
      transition: color var(--transition-normal);
    }
    
    .footer-links a:hover {
      color: var(--primary-color);
    }
    
    .footer-links li:not(:has(a)) {
      color: var(--text-secondary);
    }
    
    .contact-info p {
      display: flex;
      align-items: center;
      gap: var(--spacing-sm);
      color: var(--text-secondary);
      margin-bottom: var(--spacing-sm);
    }
    
    .contact-info svg {
      color: var(--primary-color);
      flex-shrink: 0;
    }
    
    .footer-divider {
      height: 1px;
      background: var(--border-color);
      margin: var(--spacing-xl) 0;
    }
    
    .footer-bottom-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: var(--text-muted);
      font-size: 0.9rem;
    }
    
    @media (max-width: 768px) {
      .footer-content {
        grid-template-columns: 1fr;
        gap: var(--spacing-xl);
      }
      
      .footer-bottom-content {
        flex-direction: column;
        gap: var(--spacing-sm);
        text-align: center;
      }
    }
    
    @media (max-width: 1024px) and (min-width: 769px) {
      .footer-content {
        grid-template-columns: 1fr 1fr;
        gap: var(--spacing-xl);
      }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}