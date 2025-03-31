# Worky App

Worky is a team productivity tool designed to help organizations manage tasks, track metrics, create standardized processes, and organize team structures efficiently.

## Features

- **Execution Module**: Task management, project tracking, and timelines
- **Scorecards Module**: Track metrics and KPIs with CSV import
- **Playbooks Module**: Create standardized processes and checklists
- **People Module**: Manage team structure and members

## Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS, shadcn/UI
- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Authentication**: JWT, Google OAuth
- **Payment Processing**: Stripe

## Getting Started

### Prerequisites

- Node.js v20.2.1 or higher
- MongoDB (local or Atlas)

### Installation

1. Clone the repository
```
git clone https://github.com/yourusername/worky-app.git
cd worky-app
```

2. Install frontend dependencies and run the development server
```
npm install
npm run dev
```

3. Install backend dependencies and run the API server
```
cd backend
npm install
npm run dev
```

4. Create a `.env.local` file in the root directory with the following environment variables:
```
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
GA_TRACKING_ID=your_google_analytics_tracking_id
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

## Project Structure

```
worky-app/
├── public/               # Static assets
├── src/
│   ├── app/              # Next.js app router pages
│   │   ├── modules/      # Feature modules (execution, scorecards, etc.)
│   │   └── auth/         # Authentication pages
│   ├── components/       # Reusable React components
│   ├── lib/              # Utility functions and helpers
│   └── styles/           # Global styles and Tailwind config
├── backend/
│   ├── models/           # Mongoose schemas and models
│   ├── routes/           # Express route handlers
│   ├── controllers/      # Business logic
│   ├── middleware/       # Express middleware
│   └── config/           # Configuration files
└── .env.local            # Environment variables
```

## License

MIT 