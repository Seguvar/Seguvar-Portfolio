 import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text animate-fade-in-left">
            <h1 class="hero-title">
              Hi, I'm <span class="text-gradient">Sangara Sequvar M</span>
            </h1>
            <h2 class="hero-subtitle">
              Full Stack Java Developer
            </h2>
            <p class="hero-description">
              Passionate about creating robust backend systems with Java & Spring Boot, 
              and building engaging user experiences with Angular. I turn ideas into 
              reliable, scalable applications.
            </p>
            <div class="hero-actions">
              <a href="#contact" class="btn btn-primary">
                Get In Touch
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7,7 17,7 17,17"></polyline>
                </svg>
              </a>
              <a href="#projects" class="btn btn-secondary">
                View My Work
              </a>
            </div>
            <div class="hero-stats">
              <!-- <div class="stat">
                <span class="stat-number">2+</span>
                <span class="stat-label">Years Experience</span>
              </div> -->
              <div class="stat">
                <span class="stat-number">3+</span>
                <span class="stat-label">Projects Completed</span>
              </div>
              <div class="stat">
                <span class="stat-number">5+</span>
                <span class="stat-label">Technologies</span>
              </div>
            </div>
          </div>
          
          <div class="hero-image animate-fade-in-right">
            <div class="image-container">
              <img src="https://i.pinimg.com/originals/b5/a8/2b/b5a82be892eec3342d40401565e5bd07.jpg" alt="Profile Image" class="profile-image">
              <div class="image-overlay"></div>
            </div>
            <div class="floating-elements">
              <div class="floating-element" style="--delay: 0s">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5"></polygon>
                  <line x1="12" y1="8" x2="12" y2="16"></line>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
              </div>
              <div class="floating-element" style="--delay: 1s">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 19c-5 0-8-3-8-8s3-8 8-8 8 3 8 8-3 8-8 8z"></path>
                  <path d="M15 9l6-6"></path>
                  <path d="M21 3h-6v6"></path>
                </svg>
              </div>
              <div class="floating-element" style="--delay: 2s">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        <div class="scroll-indicator">
          <div class="scroll-mouse">
            <div class="scroll-wheel"></div>
          </div>
          <span class="scroll-text">Scroll to explore</span>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      position: relative;
      padding-top: 80px;
      overflow: hidden;
    }
    
    .hero-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--spacing-3xl);
      align-items: center;
      width: 100%;
    }
    
    .hero-title {
      font-size: clamp(2.5rem, 5vw, 4rem);
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: var(--spacing-md);
    }
    
    .hero-subtitle {
      font-size: clamp(1.25rem, 3vw, 1.75rem);
      color: var(--text-secondary);
      font-weight: 500;
      margin-bottom: var(--spacing-lg);
    }
    
    .hero-description {
      font-size: 1.125rem;
      color: var(--text-secondary);
      line-height: 1.7;
      margin-bottom: var(--spacing-2xl);
      max-width: 500px;
    }
    
    .hero-actions {
      display: flex;
      gap: var(--spacing-lg);
      margin-bottom: var(--spacing-3xl);
      flex-wrap: wrap;
    }
    
    .btn svg {
      margin-left: var(--spacing-sm);
      transition: transform var(--transition-normal);
    }
    
    .btn:hover svg {
      transform: translate(2px, -2px);
    }
    
    .hero-stats {
      display: flex;
      gap: var(--spacing-2xl);
      flex-wrap: wrap;
    }
    
    .stat {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    
    .stat-number {
      font-size: 2rem;
      font-weight: 700;
      color: var(--primary-color);
      line-height: 1;
    }
    
    .stat-label {
      font-size: 0.875rem;
      color: var(--text-muted);
      margin-top: var(--spacing-xs);
    }
    
    .hero-image {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .image-container {
      position: relative;
      width: 350px;
      height: 350px;
      border-radius: 50%;
      overflow: hidden;
      border: 4px solid var(--primary-color);
      box-shadow: 0 20px 40px rgba(0, 212, 255, 0.3);
    }
    
    .profile-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform var(--transition-slow);
    }
    
    .image-container:hover .profile-image {
      transform: scale(1.1);
    }
    
    .image-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(255, 107, 107, 0.1));
      opacity: 0;
      transition: opacity var(--transition-normal);
    }
    
    .image-container:hover .image-overlay {
      opacity: 1;
    }
    
    .floating-elements {
      position: absolute;
      inset: 0;
      pointer-events: none;
    }
    
    .floating-element {
      position: absolute;
      width: 60px;
      height: 60px;
      background: var(--bg-card);
      border: 2px solid var(--primary-color);
      border-radius: var(--border-radius-lg);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--primary-color);
      animation: float 3s ease-in-out infinite;
      animation-delay: var(--delay);
    }
    
    .floating-element:nth-child(1) {
      top: 10%;
      right: 10%;
    }
    
    .floating-element:nth-child(2) {
      bottom: 20%;
      left: 10%;
    }
    
    .floating-element:nth-child(3) {
      top: 50%;
      right: -10%;
    }
    
    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-20px);
      }
    }
    
    .scroll-indicator {
      position: absolute;
      bottom: var(--spacing-2xl);
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--spacing-sm);
      color: var(--text-muted);
      animation: bounce 2s infinite;
    }
    
    .scroll-mouse {
      width: 24px;
      height: 40px;
      border: 2px solid var(--text-muted);
      border-radius: 12px;
      position: relative;
    }
    
    .scroll-wheel {
      width: 4px;
      height: 8px;
      background: var(--text-muted);
      border-radius: 2px;
      position: absolute;
      top: 6px;
      left: 50%;
      transform: translateX(-50%);
      animation: scroll 2s infinite;
    }
    
    @keyframes scroll {
      0% {
        transform: translateX(-50%) translateY(0);
        opacity: 1;
      }
      100% {
        transform: translateX(-50%) translateY(16px);
        opacity: 0;
      }
    }
    
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateX(-50%) translateY(0);
      }
      40% {
        transform: translateX(-50%) translateY(-10px);
      }
      60% {
        transform: translateX(-50%) translateY(-5px);
      }
    }
    
    .scroll-text {
      font-size: 0.875rem;
      font-weight: 500;
    }
    
    @media (max-width: 768px) {
      .hero-content {
        grid-template-columns: 1fr;
        gap: var(--spacing-2xl);
        text-align: center;
      }
      
      .hero-text {
        order: 2;
      }
      
      .hero-image {
        order: 1;
      }
      
      .image-container {
        width: 250px;
        height: 250px;
      }
      
      .hero-actions {
        justify-content: center;
      }
      
      .hero-stats {
        justify-content: center;
      }
      
      .floating-element {
        display: none;
      }
      .scroll-text{
        display: none;
      }
      .scroll-indicator {
        display: none;
    }
  }
    
    @media (max-width: 480px) {
      .hero-actions {
        flex-direction: column;
        align-items: center;
      }
      .scroll-text{
        display: none;
      }
      .scroll-indicator {
        display: none;
      }
      
      .btn {
        width: 100%;
        max-width: 250px;
      }
      
      .hero-stats {
        gap: var(--spacing-lg);
      }
      
      .stat {
        align-items: center;
      }
    }
  `]
})
export class HeroComponent implements OnInit {

  ngOnInit(): void {
    // Any initialization logic can go here
  }
}
