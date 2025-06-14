import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './app/components/header/header.component';
import { HeroComponent } from './app/components/hero/hero.component';
import { AboutComponent } from './app/components/about/about.component';
import { SkillsComponent } from './app/components/skills/skills.component';
import { ProjectsComponent } from './app/components/projects/projects.component';
import { ExperienceComponent } from './app/components/experience/experience.component';
import { ContactComponent } from './app/components/contact/contact.component';
import { FooterComponent } from './app/components/footer/footer.component';
import { ThreeBackgroundComponent } from './app/components/three-background/three-background.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactComponent,
    FooterComponent,
    ThreeBackgroundComponent
  ],
  template: `
    <div class="app-container">
      <app-three-background></app-three-background>
      <app-header></app-header>
      <main>
        <app-hero></app-hero>
        <app-about></app-about>
        <app-skills></app-skills>
        <app-projects></app-projects>
        <app-experience></app-experience>
        <app-contact></app-contact>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .app-container {
      position: relative;
      min-height: 100vh;
    }
  `]
})
export class App {}

bootstrapApplication(App, {
  providers: [
    provideRouter([]),
    provideHttpClient(),
    importProvidersFrom(BrowserAnimationsModule)
  ]
});