# Steps Play School

## Overview

Steps Play School is a nursery/preschool website for a childcare center located in Maadi, Egypt. The application serves as a marketing website with an inquiry form that allows parents to submit contact requests and schedule tours. The site showcases the school's programs (Infant Care, Toddler, Preschool), provides information about the facility, and captures parent inquiries through a PostgreSQL-backed contact form.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **UI Components**: shadcn/ui component library (Radix UI primitives)
- **Animations**: Framer Motion for page transitions and scroll animations
- **Forms**: React Hook Form with Zod validation via @hookform/resolvers
- **Build Tool**: Vite

### Backend Architecture
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript (ES modules)
- **API Pattern**: REST endpoints defined in shared route contracts
- **Build**: esbuild for production bundling with selective dependency bundling

### Data Storage
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM with drizzle-zod for schema validation
- **Migrations**: Drizzle Kit for schema management (`npm run db:push`)
- **Connection**: node-postgres (pg) connection pool

### Shared Code Architecture
- **Location**: `/shared` directory contains code used by both client and server
- **Schema**: Database schemas and Zod validation schemas in `shared/schema.ts`
- **Routes**: API route definitions with type-safe request/response contracts in `shared/routes.ts`

### Project Structure
```
client/           # React frontend application
  src/
    components/   # Reusable UI components
    pages/        # Page-level components (Home, About, Programs, Contact)
    hooks/        # Custom React hooks
    lib/          # Utilities and query client setup
server/           # Express backend
  index.ts        # Server entry point
  routes.ts       # API route handlers
  storage.ts      # Database access layer
  db.ts           # Database connection
shared/           # Shared types and schemas
  schema.ts       # Drizzle database schemas
  routes.ts       # API route contracts
```

### Design System
- **Typography**: Fredoka (display) and Nunito Sans (body) fonts
- **Colors**: Deep blue primary (#3F51B5), pink/red accent (#E91E63), derived from school logo
- **Style**: Playful, child-friendly with rounded corners and bubbly aesthetics

## External Dependencies

### Database
- **PostgreSQL**: Primary data store, connection via `DATABASE_URL` environment variable
- **connect-pg-simple**: Session storage (available but not currently implemented)

### Third-Party Services
The build configuration includes support for these integrations (may not all be active):
- **Stripe**: Payment processing
- **OpenAI / Google Generative AI**: AI capabilities
- **Nodemailer**: Email sending
- **Passport**: Authentication framework

### Required Environment Variables
- `DATABASE_URL`: PostgreSQL connection string (required)

### Development Tools
- **Replit Plugins**: Dev banner, cartographer, runtime error overlay for development experience