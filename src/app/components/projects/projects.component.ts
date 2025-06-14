import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="projects section">
      <div class="container">
        <div class="section-header text-center">
          <h2 class="section-title">Featured Projects</h2>
          <p class="section-subtitle">Some of my recent work and contributions</p>
        </div>
        <br>
        <div class="projects-grid">
          <div class="project-card" *ngFor="let project of projects">
            <div class="project-image">
              <img [src]="project.image" [alt]="project.title" />
              <div class="project-overlay">
                <div class="project-links">
                  <a [href]="project.liveUrl" class="project-link" target="_blank" rel="noopener">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15,3 21,3 21,9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                  </a>
                  <a [href]="project.githubUrl" class="project-link" target="_blank" rel="noopener">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M9 19c-5 0-8-3-8-8 0-5 3-8 8-8s8 3 8 8c0 5-3 8-8 8z"></path>
                      <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12"></path>
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            
            <div class="project-content">
              <div class="project-category">{{ project.category }}</div>
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              
              <div class="project-tech">
                <span class="tech-tag" *ngFor="let tech of project.technologies">{{ tech }}</span>
              </div>
              
              <div class="project-features">
                <h4>Key Features:</h4>
                <ul>
                  <li *ngFor="let feature of project.features">{{ feature }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div class="more-projects">
          <p>Want to see more of my work?</p>
          <a href="https://github.com/Seguvar" class="btn btn-primary" target="_blank" rel="noopener">
            View All Projects on GitHub
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7,7 17,7 17,17"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .projects {
      background: var(--bg-secondary);
    }
    
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: var(--spacing-2xl);
      margin-bottom: var(--spacing-3xl);
    }
    
    .project-card {
      background: var(--bg-card);
      border-radius: var(--border-radius-xl);
      overflow: hidden;
      border: 1px solid var(--border-color);
      transition: all var(--transition-normal);
    }
    
    .project-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 25px 50px rgba(0, 212, 255, 0.15);
      border-color: var(--primary-color);
    }
    
    .project-image {
      position: relative;
      height: 250px;
      overflow: hidden;
    }
    
    .project-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform var(--transition-slow);
    }
    
    .project-card:hover .project-image img {
      transform: scale(1.1);
    }
    
    .project-overlay {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity var(--transition-normal);
    }
    
    .project-card:hover .project-overlay {
      opacity: 1;
    }
    
    .project-links {
      display: flex;
      gap: var(--spacing-md);
    }
    
    .project-link {
      display: flex;
      align-items: center;
      gap: var(--spacing-sm);
      padding: var(--spacing-sm) var(--spacing-md);
      background: var(--primary-color);
      color: white;
      text-decoration: none;
      border-radius: var(--border-radius-md);
      font-weight: 500;
      transition: all var(--transition-normal);
    }
    
    .project-link:hover {
      background: #00b8e6;
      transform: translateY(-2px);
    }
    
    .project-content {
      padding: var(--spacing-xl);
    }
    
    .project-category {
      color: var(--primary-color);
      font-size: 0.875rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: var(--spacing-sm);
    }
    
    .project-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--text-primary);
      margin-bottom: var(--spacing-md);
    }
    
    .project-description {
      color: var(--text-secondary);
      line-height: 1.6;
      margin-bottom: var(--spacing-lg);
    }
    
    .project-tech {
      display: flex;
      flex-wrap: wrap;
      gap: var(--spacing-sm);
      margin-bottom: var(--spacing-lg);
    }
    
    .tech-tag {
      background: var(--bg-secondary);
      color: var(--text-primary);
      padding: var(--spacing-xs) var(--spacing-sm);
      border-radius: var(--border-radius-sm);
      font-size: 0.875rem;
      font-weight: 500;
      border: 1px solid var(--border-color);
    }
    
    .project-features h4 {
      color: var(--text-primary);
      font-weight: 600;
      margin-bottom: var(--spacing-sm);
    }
    
    .project-features ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .project-features li {
      color: var(--text-secondary);
      padding: var(--spacing-xs) 0;
      position: relative;
      padding-left: var(--spacing-md);
    }
    
    .project-features li::before {
      content: '→';
      position: absolute;
      left: 0;
      color: var(--primary-color);
      font-weight: bold;
    }
    
    .more-projects {
      text-align: center;
      padding: var(--spacing-2xl);
      background: var(--bg-card);
      border-radius: var(--border-radius-xl);
      border: 1px solid var(--border-color);
    }
    
    .more-projects p {
      color: var(--text-secondary);
      font-size: 1.125rem;
      margin-bottom: var(--spacing-lg);
    }
    
    @media (max-width: 768px) {
      .projects-grid {
        grid-template-columns: 1fr;
        gap: var(--spacing-xl);
      }
      
      .project-links {
        flex-direction: column;
        align-items: center;
      }
      
      .project-link {
        width: 100%;
        max-width: 200px;
        justify-content: center;
      }
    }
  `]
})
export class ProjectsComponent {
  projects = [
    {
      title: 'AI Based WebRTC Plateform',
      category: 'Final Year Project',
      description: 'Our Final Year Project.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['WebRTC', 'AI', 'TypeScript', 'Angular'],
      features: [
        'Real-time video communication',
        'AI-powered enhancements',
        'Scalable and responsive design'
      ],
      liveUrl: '#',
      githubUrl: 'https://github.com/Seguvar/AI-Based-WebRTC-Plateform'
    },
    {
      title: '3D Wheel Racing Game',
      category: 'Game Development',
      description: 'An exciting 3D racing game developed using Unity engine with custom assets created in Blender. Features realistic physics and engaging gameplay mechanics.',
      image: 'https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Unity', 'C#', 'Blender', '3D Modeling', 'Game Physics'],
      features: [
        'Realistic car physics simulation',
        'Custom 3D models and environments',
        'Multiple racing tracks',
        'Smooth controls and gameplay',
        'Performance optimization'
      ],
      liveUrl: '#',
      githubUrl: 'https://github.com/Seguvar'
    },
    {
      title: 'Portfolio Website',
      category: 'Full Stack Development',
      description: 'A modern, responsive portfolio website built with Angular frontend and Spring Boot backend, featuring 3D animations and email functionality.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Angular', 'Spring Boot', 'Three.js', 'TypeScript', 'Java', 'REST API'],
      features: [
        'Responsive design for all devices',
        'Interactive 3D background animations',
        'Contact form with email integration',
        'Dark theme with modern UI',
        'Smooth animations and transitions'
      ],
      liveUrl: '#',
      githubUrl: 'https://github.com/Seguvar'
    }
  ];
}