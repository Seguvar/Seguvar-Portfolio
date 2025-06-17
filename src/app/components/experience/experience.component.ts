import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience" class="experience section">
      <div class="container">
        <div class="section-header text-center">
          <h2 class="section-title">Experience & Leadership</h2>
          <p class="section-subtitle">My journey in development and leadership roles</p>
        </div>
        <br>
        <div class="experience-content">
          <div class="timeline">
            <div class="timeline-item" *ngFor="let item of experiences; let i = index" [class.reverse]="i % 2 === 1">
              <div class="timeline-marker">
                <div class="marker-icon" [innerHTML]="item.icon"></div>
              </div>
              <div class="timeline-content">
                <div class="timeline-card">
                  <div class="card-header">
                    <h3 class="position">{{ item.position }}</h3>
                    <span class="company">{{ item.company }}</span>
                    <span class="duration">{{ item.duration }}</span>
                  </div>
                  <div class="card-body">
                    <p class="description">{{ item.description }}</p>
                    <div class="achievements" *ngIf="item.achievements">
                      <h4>Key Achievements:</h4>
                      <ul>
                        <li *ngFor="let achievement of item.achievements">{{ achievement }}</li>
                      </ul>
                    </div>
                    <div class="skills-used" *ngIf="item.skills">
                      <h4>Skills Used:</h4>
                      <div class="skill-tags">
                        <span class="skill-tag" *ngFor="let skill of item.skills">{{ skill }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="extra-curricular">
          <h3 class="section-subtitle">Extra-Curricular Activities</h3>
          <div class="activities-grid">
            <div class="activity-card" *ngFor="let activity of activities">
              <!-- <div class="activity-icon" [innerHTML]="activity.icon"></div> -->
              <h4>{{ activity.title }}</h4>
              <p class="activity-duration">{{ activity.duration }}</p>
              <p class="activity-description">{{ activity.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .experience {
      background: var(--bg-primary);
    }
    
    .timeline {
      position: relative;
      max-width: 1000px;
      margin: 0 auto;
      padding: var(--spacing-2xl) 0;
    }
    
    .timeline::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 0;
      bottom: 0;
      width: 2px;
      background: linear-gradient(to bottom, var(--primary-color), var(--accent-color));
      transform: translateX(-50%);
    }
    
    .timeline-item {
      position: relative;
      margin-bottom: var(--spacing-3xl);
      display: flex;
      align-items: center;
    }
    
    .timeline-item:last-child {
      margin-bottom: 0;
    }
    
    .timeline-marker {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 60px;
      background: var(--bg-card);
      border: 4px solid var(--primary-color);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2;
    }
    
    .marker-icon {
      color: var(--primary-color);
    }
    
    .timeline-content {
      width: calc(50% - 40px);
    }
    
    .timeline-item:not(.reverse) .timeline-content {
      margin-right: auto;
    }
    
    .timeline-item.reverse .timeline-content {
      margin-left: auto;
    }
    
    .timeline-card {
      background: var(--bg-card);
      border-radius: var(--border-radius-xl);
      padding: var(--spacing-2xl);
      border: 1px solid var(--border-color);
      transition: all var(--transition-normal);
      position: relative;
    }
    
    .timeline-card::before {
      content: '';
      position: absolute;
      top: 30px;
      width: 0;
      height: 0;
      border: 15px solid transparent;
    }
    
    .timeline-item:not(.reverse) .timeline-card::before {
      right: -30px;
      border-left-color: var(--bg-card);
    }
    
    .timeline-item.reverse .timeline-card::before {
      left: -30px;
      border-right-color: var(--bg-card);
    }
    
    .timeline-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 20px 40px rgba(0, 212, 255, 0.1);
      border-color: var(--primary-color);
    }
    
    .card-header {
      margin-bottom: var(--spacing-lg);
    }
    
    .position {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--text-primary);
      margin-bottom: var(--spacing-sm);
    }
    
    .company {
      display: block;
      color: var(--primary-color);
      font-weight: 600;
      font-size: 1.125rem;
      margin-bottom: var(--spacing-xs);
    }
    
    .duration {
      color: var(--text-secondary);
      font-size: 0.9rem;
      font-weight: 500;
    }
    
    .description {
      color: var(--text-secondary);
      line-height: 1.7;
      margin-bottom: var(--spacing-lg);
    }
    
    .achievements,
    .skills-used {
      margin-bottom: var(--spacing-lg);
    }
    
    .achievements:last-child,
    .skills-used:last-child {
      margin-bottom: 0;
    }
    
    .achievements h4,
    .skills-used h4 {
      color: var(--text-primary);
      font-weight: 600;
      margin-bottom: var(--spacing-sm);
      font-size: 1rem;
    }
    
    .achievements ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .achievements li {
      color: var(--text-secondary);
      padding: var(--spacing-xs) 0;
      position: relative;
      padding-left: var(--spacing-md);
    }
    
    .achievements li::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: var(--success-color);
      font-weight: bold;
    }
    
    .skill-tags {
      display: flex;
      flex-wrap: wrap;
      gap: var(--spacing-sm);
    }
    
    .skill-tag {
      background: var(--bg-secondary);
      color: var(--text-primary);
      padding: var(--spacing-xs) var(--spacing-sm);
      border-radius: var(--border-radius-sm);
      font-size: 0.875rem;
      font-weight: 500;
      border: 1px solid var(--border-color);
    }
    
    .extra-curricular {
      margin-top: var(--spacing-3xl);
      padding-top: var(--spacing-3xl);
      border-top: 1px solid var(--border-color);
    }
    
    .activities-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: var(--spacing-xl);
      margin-top: var(--spacing-2xl);
    }
    
    .activity-card {
      background: var(--bg-card);
      padding: var(--spacing-xl);
      border-radius: var(--border-radius-lg);
      border: 1px solid var(--border-color);
      text-align: center;
      transition: all var(--transition-normal);
    }
    
    .activity-card:hover {
      transform: translateY(-4px);
      border-color: var(--primary-color);
      box-shadow: 0 15px 30px rgba(0, 212, 255, 0.1);
    }
    
    .activity-icon {
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
    
    .activity-card h4 {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: var(--spacing-sm);
    }
    
    .activity-duration {
      color: var(--primary-color);
      font-weight: 500;
      margin-bottom: var(--spacing-sm);
    }
    
    .activity-description {
      color: var(--text-secondary);
      line-height: 1.6;
    }
    
    @media (max-width: 768px) {
      .timeline::before {
        left: 30px;
      }
      
      .timeline-item {
        flex-direction: column;
        align-items: flex-start;
      }
      
      .timeline-marker {
        left: 30px;
        transform: translateX(-50%);
      }
      
      .timeline-content {
        width: calc(100% - 80px);
        margin-left: 80px !important;
        margin-right: 0 !important;
      }
      
      .timeline-card::before {
        left: -30px !important;
        right: auto !important;
        border-right-color: var(--bg-card) !important;
        border-left-color: transparent !important;
      }
      
      .activities-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ExperienceComponent {
  experiences = [
    {
      position: 'Java Full Stack Developer Intern',
      company: 'TNS India Foundations',
      duration: 'Jul 2023 - May 2024',
      description: 'Completed a comprehensive 3-month internship focusing on Java Full Stack Development, working on real-world projects and gaining hands-on experience with enterprise-level applications.',
      achievements: [
        'Developed and deployed multiple web applications using Spring Boot',
        'Collaborated with senior developers on production-level projects',
        'Implemented RESTful APIs and database integration',
        'Gained experience with Agile development methodologies'
      ],
      skills: ['Java', 'Spring Boot', 'MySQL', 'REST APIs'],
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>'
    },
    {
      position: 'Python Full Stack Developer Intern',
      company: 'Vetri Technologies Pvt Ltd',
      duration: '2023',
      description: 'Intensive one month internship program focused on Python Full Stack Development, learning modern web development practices and frameworks.',
      achievements: [
        'Built dynamic web applications using Python and Django',
        'Learned frontend technologies including HTML, CSS, and JavaScript',
        'Implemented database operations and user authentication',
        'Completed multiple mini-projects demonstrating full-stack capabilities'
      ],
      skills: ['Python', 'HTML', 'CSS', 'SQL'],
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>'
    },
    {
      position: 'Class Representative',
      company: 'JP College of Engineering',
      duration: 'Jul 2023 - May 2024',
      description: 'Served as the elected class representative, facilitating communication between students and faculty while organizing various academic and extracurricular activities.',
      achievements: [
        'Successfully mediated between students and faculty on academic matters',
        'Organized study groups and peer learning sessions',
        'Coordinated class events and technical workshops',
        'Maintained excellent academic performance while serving in leadership role'
      ],
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>'
    }
  ];

  activities = [
    {
      title: 'Badminton Player',
      duration: '2018 - 2019',
      description: 'Active badminton player, participating in inter-school competitions and maintaining physical fitness through regular practice.',
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>'
    },
    {
      title: 'NCC Leader',
      duration: '2016 - 2018',
      description: 'Served as a leader in the National Cadet Corps, developing discipline, leadership skills, and contributing to community service activities.',
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>'
    },
    {
      title: 'Technical Workshop Participant in Microsoft',
      duration: '2024',
      description: 'Participated in Microsoft workshop for career guidence and development of technical skills.',
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>'
    }
  ];
}