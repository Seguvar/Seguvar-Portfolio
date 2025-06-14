# Sangara Sequvar M - Portfolio Website

A modern, responsive portfolio website built with Angular frontend and Spring Boot backend, featuring 3D animations, dark theme, and email functionality.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark theme
- **3D Animations**: Interactive Three.js background animations
- **Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Contact Form**: Functional contact form with email integration
- **Auto-Reply**: Automatic thank you email to visitors
- **Performance**: Optimized for fast loading and smooth animations
- **SEO Friendly**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

### Frontend
- **Angular 20**: Modern TypeScript framework
- **Three.js**: 3D graphics and animations
- **CSS3**: Custom styling with CSS variables
- **TypeScript**: Type-safe development
- **RxJS**: Reactive programming

### Backend
- **Spring Boot 3.2**: Java backend framework
- **Spring Mail**: Email functionality
- **H2 Database**: In-memory database for development
- **Maven**: Dependency management
- **Java 17**: Latest LTS version

## 📁 Project Structure

```
portfolio/
├── src/                          # Angular frontend
│   ├── app/
│   │   ├── components/          # Angular components
│   │   └── services/            # Angular services
│   ├── assets/                  # Static assets
│   └── global_styles.css        # Global styles
├── backend/                     # Spring Boot backend
│   ├── src/main/java/          # Java source code
│   └── src/main/resources/     # Configuration files
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- Java 17 or higher
- Maven 3.6 or higher

### Frontend Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:4200`

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Run the Spring Boot application:
```bash
mvn spring-boot:run
```

The backend will be available at `http://localhost:8080`

### Email Configuration

To enable email functionality, set up the following environment variables:

```bash
export GMAIL_USERNAME=your-email@gmail.com
export GMAIL_APP_PASSWORD=your-app-password
```

**Note**: Use Gmail App Password, not your regular password. Enable 2FA and generate an app password in your Google Account settings.

## 📧 Email Features

- **Contact Form**: Visitors can send messages through the contact form
- **Email Notification**: You receive an email notification for each contact form submission
- **Auto-Reply**: Visitors automatically receive a thank you email
- **HTML Templates**: Beautiful, responsive email templates

## 🎨 Customization

### Colors
The website uses CSS custom properties for easy theming. Main colors can be changed in `src/global_styles.css`:

```css
:root {
  --primary-color: #00d4ff;
  --secondary-color: #ff6b6b;
  --accent-color: #4ecdc4;
  /* ... */
}
```

### Content
Update personal information in the respective component files:
- Hero section: `src/app/components/hero/hero.component.ts`
- About section: `src/app/components/about/about.component.ts`
- Skills: `src/app/components/skills/skills.component.ts`
- Projects: `src/app/components/projects/projects.component.ts`

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Mobile: < 480px
- Tablet: 481px - 768px
- Desktop: > 768px

## 🔧 Development

### Adding New Components
```bash
ng generate component components/new-component
```

### Building for Production
```bash
npm run build
```

### Backend Testing
```bash
cd backend
mvn test
```

## 🌟 Key Highlights

- **Performance**: Optimized animations and lazy loading
- **Accessibility**: Semantic HTML and proper ARIA labels
- **SEO**: Meta tags and structured data
- **Security**: CORS configuration and input validation
- **Maintainability**: Clean code architecture and documentation

## 📞 Contact

- **Email**: seguvar.m@gmail.com
- **GitHub**: [github.com/Seguvar](https://github.com/Seguvar)
- **Location**: Keela Surandai, Tamil Nadu

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Sangara Sequvar M