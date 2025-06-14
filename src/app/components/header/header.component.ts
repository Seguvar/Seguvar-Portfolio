import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="header" [class.scrolled]="isScrolled">
      <div class="container">
        <div class="nav-content">
          <div class="logo">
            <a href="#home" class="logo-link">
              <span class="logo-text">Sequvar</span>
              <span class="logo-accent">.</span>
            </a>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
          </div>
          
          <nav class="nav" [class.nav-open]="isMenuOpen">
            <ul class="nav-list">
              <li><a href="#home" class="nav-link" (click)="closeMenu()">Home</a></li>
              <li><a href="#about" class="nav-link" (click)="closeMenu()">About</a></li>
              <li><a href="#skills" class="nav-link" (click)="closeMenu()">Skills</a></li>
              <li><a href="#projects" class="nav-link" (click)="closeMenu()">Projects</a></li>
              <li><a href="#experience" class="nav-link" (click)="closeMenu()">Experience</a></li>
              <li><a href="#contact" class="nav-link" (click)="closeMenu()">Contact</a></li>
            </ul>
          </nav>
          
          <div class="nav-actions">
            <button class="theme-toggle" (click)="toggleTheme()" title="Resume Download">
              <i class="fa-regular fa-file" style="font-size: 20px;"></i>
            </button>
            
            <button class="menu-toggle" (click)="toggleMenu()" [class.active]="isMenuOpen">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      background: rgba(10, 10, 10, 0.8);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid transparent;
      transition: all var(--transition-normal);
    }
    
    .header.scrolled {
      background: rgba(10, 10, 10, 0.95);
      border-bottom-color: var(--border-color);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    }
    
    .nav-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: var(--spacing-md) 0;
    }
    
    .logo-link {
      text-decoration: none;
      display: flex;
      align-items: center;
      font-size: 1.5rem;
      font-weight: 700;
    }
    
    .logo-text {
      color: var(--text-primary);
    }
    
    .logo-accent {
      color: var(--primary-color);
      margin-left: 2px;
    }
    
    .nav {
      display: flex;
      align-items: center;
    }
    
    .nav-list {
      display: flex;
      list-style: none;
      gap: var(--spacing-xl);
      margin: 0;
      padding: 0;
    }
    
    .nav-link {
      color: var(--text-secondary);
      text-decoration: none;
      font-weight: 500;
      transition: all var(--transition-normal);
      position: relative;
    }
    
    .nav-link:hover {
      color: var(--primary-color);
    }
    
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--primary-color);
      transition: width var(--transition-normal);
    }
    
    .nav-link:hover::after {
      width: 100%;
    }
    
    .nav-actions {
      display: flex;
      align-items: center;
      gap: var(--spacing-md);
    }
    
    .theme-toggle {
      background: none;
      border: none;
      color: var(--text-secondary);
      cursor: pointer;
      padding: var(--spacing-sm);
      border-radius: var(--border-radius-md);
      transition: all var(--transition-normal);
    }
    
    .theme-toggle:hover {
      color: var(--primary-color);
      background: var(--bg-secondary);
    }
    
    .menu-toggle {
      display: none;
      flex-direction: column;
      background: none;
      border: none;
      cursor: pointer;
      padding: var(--spacing-sm);
      gap: 4px;
    }
    
    .menu-toggle span {
      width: 24px;
      height: 2px;
      background: var(--text-primary);
      transition: all var(--transition-normal);
    }
    
    .menu-toggle.active span:nth-child(1) {
      transform: rotate(45deg) translate(6px, 6px);
    }
    
    .menu-toggle.active span:nth-child(2) {
      opacity: 0;
    }
    
    .menu-toggle.active span:nth-child(3) {
      transform: rotate(-45deg) translate(6px, -6px);
    }
    
    @media (max-width: 768px) {
      .nav {
        position: fixed;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--bg-primary);
        border-top: 1px solid var(--border-color);
        transform: translateY(-100%);
        opacity: 0;
        visibility: hidden;
        transition: all var(--transition-normal);
      }
      
      .nav.nav-open {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
      }
      
      .nav-list {
        flex-direction: column;
        padding: var(--spacing-xl);
        gap: var(--spacing-lg);
      }
      
      .menu-toggle {
        display: flex;
      }
    }
  `]
})
export class HeaderComponent implements OnInit {
  isScrolled = false;
  isMenuOpen = false;

  ngOnInit() {
    this.checkScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
  }

  private checkScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  toggleTheme() {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1TUBUmdXnTVZe-6No3x87Kx-z5d3y4Bsc/view?usp=drive_link';
    link.download = 'Sangara Sequvar M resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}