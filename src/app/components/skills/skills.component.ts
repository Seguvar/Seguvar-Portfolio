import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="skills section">
      <div class="container">
        <div class="section-header text-center">
          <h2 class="section-title">Technical Skills</h2>
          <p class="section-subtitle">Technologies and tools I work with</p>
        </div>
        <br>
        <div class="skills-grid">
          <div class="skill-category" *ngFor="let category of skillCategories">
            <div class="category-header">
              <div class="category-icon" [innerHTML]="category.icon"></div>
              <h3 class="category-title">{{ category.title }}</h3>
            </div>
            <div class="skills-list">
              <div class="skill-item" *ngFor="let skill of category.skills">
                <div class="skill-info">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-level">{{ skill.level }}%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" [style.width.%]="skill.level"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="certifications-section">
          <h3 class="certifications-title">Certifications & Achievements</h3>
          <div class="certifications-grid">
            <div class="certification-card" *ngFor="let cert of certifications">
              <div class="cert-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </div>
              <h4>{{ cert.title }}</h4>
              <p>{{ cert.description }}</p>
              <span class="cert-date">{{ cert.date }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skills {
      background: var(--bg-primary);
    }
    
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: var(--spacing-2xl);
      margin-bottom: var(--spacing-3xl);
    }
    
    .skill-category {
      background: var(--bg-card);
      padding: var(--spacing-2xl);
      border-radius: var(--border-radius-xl);
      border: 1px solid var(--border-color);
      transition: all var(--transition-normal);
    }
    
    .skill-category:hover {
      transform: translateY(-4px);
      box-shadow: 0 20px 40px rgba(0, 212, 255, 0.1);
      border-color: var(--primary-color);
    }
    
    .category-header {
      display: flex;
      align-items: center;
      margin-bottom: var(--spacing-xl);
    }
    
    .category-icon {
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
      border-radius: var(--border-radius-lg);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: var(--spacing-md);
      color: white;
    }
    
    .category-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--text-primary);
    }
    
    .skills-list {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-lg);
    }
    
    .skill-item {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-sm);
    }
    
    .skill-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .skill-name {
      font-weight: 500;
      color: var(--text-primary);
    }
    
    .skill-level {
      font-size: 0.9rem;
      color: var(--primary-color);
      font-weight: 600;
    }
    
    .skill-bar {
      height: 8px;
      background: var(--bg-secondary);
      border-radius: 4px;
      overflow: hidden;
    }
    
    .skill-progress {
      height: 100%;
      background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
      border-radius: 4px;
      transition: width 1s ease-out;
      position: relative;
    }
    
    .skill-progress::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
      animation: shimmer 2s infinite;
    }
    
    @keyframes shimmer {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(100%);
      }
    }
    
    .certifications-section {
      background: var(--bg-secondary);
      padding: var(--spacing-3xl);
      border-radius: var(--border-radius-xl);
      border: 1px solid var(--border-color);
    }
    
    .certifications-title {
      font-size: 2rem;
      font-weight: 700;
      color: var(--text-primary);
      margin-bottom: var(--spacing-2xl);
      text-align: center;
    }
    
    .certifications-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: var(--spacing-xl);
    }
    
    .certification-card {
      background: var(--bg-card);
      padding: var(--spacing-xl);
      border-radius: var(--border-radius-lg);
      border: 1px solid var(--border-color);
      text-align: center;
      transition: all var(--transition-normal);
    }
    
    .certification-card:hover {
      transform: translateY(-4px);
      border-color: var(--primary-color);
      box-shadow: 0 15px 30px rgba(0, 212, 255, 0.1);
    }
    
    .cert-icon {
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto var(--spacing-md);
      color: white;
    }
    
    .certification-card h4 {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: var(--spacing-sm);
    }
    
    .certification-card p {
      color: var(--text-secondary);
      line-height: 1.6;
      margin-bottom: var(--spacing-md);
    }
    
    .cert-date {
      color: var(--primary-color);
      font-weight: 500;
      font-size: 0.9rem;
    }
    
    @media (max-width: 768px) {
      .skills-grid {
        grid-template-columns: 1fr;
        gap: var(--spacing-xl);
      }
      
      .certifications-section {
        padding: var(--spacing-xl);
      }
      
      .certifications-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class SkillsComponent {
  skillCategories = [
    {
      title: 'Programming Languages',
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16,18 22,12 16,6"></polyline><polyline points="8,6 2,12 8,18"></polyline></svg>',
      skills: [
        { name: 'Java', level: 85 },
        { name: 'Python', level: 65 },
        { name: 'TypeScript', level: 75 }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>',
      skills: [
        { name: 'Spring Boot', level: 80 },
        { name: 'Angular', level: 75 },
        { name: 'Express.js', level: 70 }
      ]
    },
    {
      title: 'Web Technologies',
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>',
      skills: [
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 85 },
        { name: 'Bootstrap', level: 60 }
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>',
      skills: [
        { name: 'Git & GitHub', level: 80 },
        { name: 'VS Code', level: 90 },
        { name: 'Spring Tool Suite 4', level: 75 }
      ]
    }
  ];

  certifications = [
    {
      title: 'Java Course Certification',
      description: 'Completed comprehensive Java programming course from Campus Connection',
      date: '2023'
    },
    {
      title: 'Microsoft Workshop',
      description: 'Placement training workshop in MIT conducted by Microsoft',
      date: '2023'
    },
    {
      title: 'Paper Presentation Award',
      description: 'Won third place in paper presentation at ISTE Program, PSR College',
      date: '2023'
    },
    {
      title: 'Python Full Stack Internship',
      description: 'Completed 15-day intensive Python Full Stack Development internship',
      date: '2023'
    },
    {
      title: 'Java Full Stack Internship',
      description: 'Successfully completed 3-month Java Full Stack Development internship',
      date: '2024'
    }
  ];
}