# Portfolio Website

## Overview

This is a full-stack portfolio website built with React and Express, featuring a modern single-page application with a contact form. The application showcases personal information, projects, and allows visitors to send messages through a contact form.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Replit PostgreSQL (managed database)
- **Session Management**: PostgreSQL-backed sessions
- **Data Storage**: DatabaseStorage class with full PostgreSQL integration

### Development Setup
- **Monorepo Structure**: Shared code between client and server
- **Hot Reload**: Vite dev server with Express middleware in development
- **Type Safety**: Full TypeScript coverage across the stack

## Key Components

### Frontend Components
- **Hero Section**: Main landing area with personal introduction
- **About Section**: Skills and background information
- **Projects Section**: Showcase of relevant work
- **Contact Form**: Interactive form for visitor messages
- **Navigation**: Smooth scrolling navigation with mobile support

### Backend Components
- **API Routes**: RESTful endpoints for contact form submission
- **Database Models**: User and contact message schemas
- **Storage Layer**: DatabaseStorage class with PostgreSQL integration
- **Database Connection**: Neon serverless PostgreSQL driver
- **Error Handling**: Comprehensive error handling and logging

### UI Components
- **shadcn/ui Integration**: Professional component library
- **Responsive Design**: Mobile-first approach with Tailwind
- **Dark Theme**: Consistent dark color scheme
- **Toast Notifications**: User feedback for form submissions

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form (name, email, message)
   - Client-side validation using Zod schemas
   - Form data sent to `/api/contact` endpoint
   - Server validates and stores message in database
   - Success/error feedback displayed via toast notifications

2. **Page Navigation**:
   - Single-page application with smooth scrolling
   - Client-side routing for 404 handling
   - Responsive navigation with mobile menu

3. **Data Validation**:
   - Shared Zod schemas between client and server
   - Type-safe data handling throughout the stack
   - Email format validation and message length requirements

## External Dependencies

### Database
- **Replit PostgreSQL**: Managed PostgreSQL database
- **Drizzle ORM**: Type-safe database operations with Neon serverless driver
- **Connection**: Environment-based DATABASE_URL configuration
- **Tables**: Users and contact_messages tables with proper relationships

### UI Libraries
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library for consistent iconography

### Development Tools
- **Vite**: Fast build tool with hot module replacement
- **ESBuild**: Fast JavaScript bundler for production
- **TypeScript**: Static type checking
- **Replit Integration**: Runtime error handling and development tools

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: ESBuild bundles server code to `dist/index.js`
3. **Database Setup**: Drizzle migrations applied via `db:push`

### Environment Configuration
- **Development**: Local development with Vite dev server
- **Production**: Bundled Express server serving static assets
- **Database**: Environment-based connection string

### File Structure
```
├── client/          # React frontend
├── server/          # Express backend
├── shared/          # Shared schemas and types
├── dist/            # Built assets
└── migrations/      # Database migrations
```

### Production Considerations
- Static asset serving through Express in production
- Environment-based configuration
- Database connection pooling through Neon
- Error handling and logging for production debugging