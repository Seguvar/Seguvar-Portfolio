import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="about section">
      <div class="container">
        <div class="section-header text-center">
          <h2 class="section-title">About Me</h2>
          <p class="section-subtitle">Get to know more about my journey and passion</p>
        </div>
        
        <div class="about-content">
          <div class="about-text">
            <div class="text-block animate-fade-in-left">
              <h3>My Journey</h3>
              <p>
                I'm a passionate Java developer who enjoys turning ideas into reliable backend systems. 
                Currently pursuing my Bachelor's in Computer Science and Engineering at JP College of Engineering, 
                I've been honing my skills in Java, Spring Boot, and modern web technologies.
              </p>
            </div>
            
            <div class="text-block animate-fade-in-left">
              <h3>What Drives Me</h3>
              <p>
                With hands-on experience in Java and Spring Boot, I focus on writing clean, efficient code 
                that solves real problems. I'm excited about the opportunity to grow, collaborate, and make 
                a meaningful impact through technology.
              </p>
            </div>
            
            <div class="text-block animate-fade-in-left">
              <h3>Beyond Coding</h3>
              <p>
                When I'm not coding, you'll find me playing badminton, leading as an NCC member, or 
                working on 3D projects with Unity and Blender. I believe in continuous learning and 
                pushing the boundaries of what's possible.
              </p>
            </div>
          </div>
          
          <div class="about-highlights">
            <div class="highlight-card animate-fade-in-right">
              <div class="highlight-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h4>Problem Solver</h4>
              <p>I love tackling complex challenges and finding elegant solutions through code.</p>
            </div>
            
            <div class="highlight-card animate-fade-in-right">
              <div class="highlight-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h4>Team Player</h4>
              <p>Strong leadership skills with experience as class representative and NCC leader.</p>
            </div>
            
            <div class="highlight-card animate-fade-in-right">
              <div class="highlight-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </div>
              <h4>Achiever</h4>
              <p>Third place winner in paper presentation on ISTE Event and multiple certifications in development.</p>
            </div>
            
            <div class="highlight-card animate-fade-in-right">
              <div class="highlight-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                </svg>
              </div>
              <h4>Fast Learner</h4>
              <p>Quickly adapting to new technologies and frameworks to stay current with industry trends.</p>
            </div>
          </div>
        </div>
        
        <div class="education-section">
          <h3 class="education-title">Education</h3>
          <div class="education-timeline">
            <div class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h4>Bachelor of Computer Science and Engineering</h4>
                <p class="institution">JP College of Engineering, Tenkasi</p>
                <p class="duration">Jul 2021 - Jul 2025</p>
                <p class="grade">CGPA: 7.21</p>
              </div>
            </div>
            
            <div class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h4>Higher Secondary Certificate (HSC)</h4>
                <p class="institution">Baren Bruck Higher Secondary School, Bangalow Surandai</p>
                <p class="duration">2019 - 2021</p>
                <p class="grade">Score: 75%</p>
                <p class="subjects">Subjects: Tamil, English, Mathematics, Physics, Chemistry, Computer Science</p>
              </div>
            </div>
            
            <div class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h4>Secondary School Leaving Certificate (SSLC)</h4>
                <p class="institution">Baren Bruck Higher Secondary School, Bangalow Surandai</p>
                <p class="duration">2016 - 2019</p>
                <p class="grade">Score: 71%</p>
                <p class="subjects">Subjects: Tamil, English, Mathematics, Science, Social Science</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about {
      background: var(--bg-secondary);
    }
    
    .section-header {
      margin-bottom: var(--spacing-3xl);
    }
    
    .section-title {
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 700;
      margin-bottom: var(--spacing-md);
      background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .section-subtitle {
      font-size: 1.125rem;
      color: var(--text-secondary);
      max-width: 600px;
      margin: 0 auto;
    }
    
    .about-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--spacing-3xl);
      margin-bottom: var(--spacing-3xl);
    }
    
    .text-block {
      margin-bottom: var(--spacing-2xl);
    }
    
    .text-block h3 {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: var(--spacing-md);
    }
    
    .text-block p {
      color: var(--text-secondary);
      line-height: 1.7;
      font-size: 1.1rem;
    }
    
    .about-highlights {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--spacing-lg);
    }
    
    .highlight-card {
      background: var(--bg-card);
      padding: var(--spacing-xl);
      border-radius: var(--border-radius-lg);
      border: 1px solid var(--border-color);
      transition: all var(--transition-normal);
      text-align: center;
    }
    
    .highlight-card:hover {
      transform: translateY(-4px);
      border-color: var(--primary-color);
      box-shadow: 0 20px 40px rgba(0, 212, 255, 0.1);
    }
    
    .highlight-icon {
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto var(--spacing-md);
      color: white;
    }
    
    .highlight-card h4 {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: var(--spacing-sm);
    }
    
    .highlight-card p {
      color: var(--text-secondary);
      line-height: 1.6;
    }
    
    .education-section {
      background: var(--bg-card);
      padding: var(--spacing-3xl);
      border-radius: var(--border-radius-xl);
      border: 1px solid var(--border-color);
    }
    
    .education-title {
      font-size: 2rem;
      font-weight: 700;
      color: var(--text-primary);
      margin-bottom: var(--spacing-2xl);
      text-align: center;
    }
    
    .education-timeline {
      position: relative;
      max-width: 800px;
      margin: 0 auto;
    }
    
    .education-timeline::before {
      content: '';
      position: absolute;
      left: 30px;
      top: 0;
      bottom: 0;
      width: 2px;
      background: var(--primary-color);
    }
    
    .timeline-item {
      position: relative;
      padding-left: 80px;
      margin-bottom: var(--spacing-2xl);
    }
    
    .timeline-item:last-child {
      margin-bottom: 0;
    }
    
    .timeline-marker {
      position: absolute;
      left: 20px;
      top: 0;
      width: 20px;
      height: 20px;
      background: var(--primary-color);
      border-radius: 50%;
      border: 4px solid var(--bg-card);
    }
    
    .timeline-content {
      background: var(--bg-secondary);
      padding: var(--spacing-xl);
      border-radius: var(--border-radius-lg);
      border: 1px solid var(--border-color);
    }
    
    .timeline-content h4 {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: var(--spacing-sm);
    }
    
    .institution {
      font-weight: 500;
      color: var(--primary-color);
      margin-bottom: var(--spacing-xs);
    }
    
    .duration {
      color: var(--text-secondary);
      font-size: 0.9rem;
      margin-bottom: var(--spacing-xs);
    }
    
    .grade {
      color: var(--accent-color);
      font-weight: 500;
      margin-bottom: var(--spacing-sm);
    }
    
    .subjects {
      color: var(--text-muted);
      font-size: 0.9rem;
      font-style: italic;
    }
    
    @media (max-width: 768px) {
      .about-content {
        grid-template-columns: 1fr;
        gap: var(--spacing-2xl);
      }
      
      .about-highlights {
        grid-template-columns: 1fr;
      }
      
      .education-section {
        padding: var(--spacing-xl);
      }
      
      .education-timeline::before {
        left: 15px;
      }
      
      .timeline-item {
        padding-left: 50px;
      }
      
      .timeline-marker {
        left: 5px;
        width: 20px;
        height: 20px;
      }
    }
  `]
})
export class AboutComponent {}