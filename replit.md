# replit.md

## Overview

This is a full-stack web application called "Friendly AI Coach" - a service offering personalized AI coaching for older adults. The application is built with a React frontend and Express backend, using PostgreSQL for data storage and Drizzle ORM for database operations. The frontend uses shadcn/ui components with Tailwind CSS for styling.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library based on Radix UI
- **State Management**: TanStack Query (React Query) for server state
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Storage**: PostgreSQL sessions with connect-pg-simple
- **API Design**: RESTful API with JSON responses
- **Error Handling**: Centralized error handling middleware

### Development Setup
- **Monorepo Structure**: Client, server, and shared code in single repository
- **Development Server**: Vite dev server with Express API proxy
- **Build Process**: Separate builds for frontend (Vite) and backend (esbuild)
- **Type Safety**: Shared types between frontend and backend via shared folder

## Key Components

### Database Schema
- **Users Table**: Basic user authentication (id, username, password)
- **Contacts Table**: Contact form submissions (id, name, email, phone, message, preferredTime, createdAt)
- **Schema Validation**: Zod schemas for runtime validation matching database schema

### API Endpoints
- `POST /api/contact` - Submit contact form
- `GET /api/contacts` - Retrieve all contacts (admin)

### Frontend Pages
- **Home Page**: Landing page with hero section, features, testimonials, and contact form
- **404 Page**: Not found page with helpful error message

### UI Components
- **ContactForm**: Form component with validation and API integration
- **Logo**: Reusable brand logo component
- **shadcn/ui Components**: Complete set of accessible UI components

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form on homepage
   - Form data validated client-side with Zod
   - Data sent directly to UseBasin.com endpoint
   - UseBasin forwards messages to configured email address
   - Success/error feedback shown via toast notifications

2. **Data Storage**:
   - No user data stored on the website
   - All contact form submissions handled by UseBasin.com
   - Simple, maintenance-free approach

3. **External Services**:
   - UseBasin.com handles form submissions and email forwarding
   - Endpoint: https://usebasin.com/f/056980c59700

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database driver
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **@hookform/resolvers**: Form validation integration
- **zod**: Runtime type validation
- **wouter**: Lightweight routing

### UI Dependencies
- **@radix-ui/***: Headless UI components
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library
- **class-variance-authority**: Type-safe CSS variants
- **clsx**: Conditional class names

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles Express server to `dist/index.js`
3. **Static Assets**: Frontend assets served by Express in production

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment mode (development/production)
- **REPL_ID**: Replit-specific environment detection

### Database Setup
- Database schema defined in `shared/schema.ts`
- Migrations generated and applied via Drizzle Kit
- `npm run db:push` to sync schema changes

### Production Considerations
- Express serves both API and static frontend assets
- PostgreSQL connection pooling for scalability
- Error logging and monitoring
- CORS and security headers (to be added)

The application is designed to be deployed on Replit with automatic database provisioning and environment variable management.