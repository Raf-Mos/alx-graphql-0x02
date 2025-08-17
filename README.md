# alx-graphql-0x02

This project demonstrates querying the Rick and Morty GraphQL endpoint to retrieve and display episode data.

## Project Structure

```
alx-rick-and-morty-app/
├── components/
│   └── common/
│       └── EpisodeCard.tsx
├── graphql/
│   └── queries.ts
├── interfaces/
│   └── index.ts
├── pages/
│   ├── _app.tsx
│   └── index.tsx
├── styles/
│   └── globals.css
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Features

- **Episode Listing**: Display Rick and Morty episodes in a responsive grid layout
- **GraphQL Integration**: Query data using Apollo Client and GraphQL
- **Pagination**: Navigate through different pages of episodes
- **TypeScript Support**: Full type safety with custom interfaces
- **Modern Styling**: Beautiful UI with Tailwind CSS
- **Responsive Design**: Works on desktop and mobile devices

## Technologies Used

- **Next.js 14**: React framework for production
- **TypeScript**: Type-safe JavaScript
- **Apollo Client**: GraphQL client for React
- **GraphQL**: Query language for APIs
- **Tailwind CSS**: Utility-first CSS framework
- **Rick and Morty API**: GraphQL endpoint for episode data

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/alx-graphql-0x02.git
   cd alx-graphql-0x02/alx-rick-and-morty-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## GraphQL Query

The application uses the following GraphQL query to fetch episode data:

```graphql
query GetEpisodes($page: Int) {
  episodes(page: $page) {
    info {
      count
      pages
      next
      prev
    }
    results {
      id
      name
      air_date
      episode
    }
  }
}
```

## Components

### EpisodeCard
Displays individual episode information including:
- Episode name
- Air date
- Episode number
- Responsive card design with hover effects

### Home Page
Main page component featuring:
- Episode grid layout
- Pagination controls
- Loading and error states
- Beautiful header and footer

## TypeScript Interfaces

The project includes well-defined TypeScript interfaces:

- `InfoProps`: Pagination information
- `EpisodeProps`: Complete episode data structure
- `EpisodeCardProps`: Props for the EpisodeCard component

## Styling

The application uses Tailwind CSS with a custom color scheme:
- Primary colors: Blue-green gradient
- Card styling: Clean white cards with shadows
- Responsive grid system
- Hover animations and transitions

## API Integration

The application connects to the Rick and Morty GraphQL API:
- Endpoint: `https://rickandmortyapi.com/graphql`
- Uses Apollo Client for state management
- Implements proper loading and error handling

## Learning Objectives

This project demonstrates:
- GraphQL query implementation
- Apollo Client integration
- TypeScript interface design
- Component composition
- Responsive web design
- Modern React patterns

## Repository Information

- **GitHub repository**: alx-graphql-0x02
- **Directory**: alx-rick-and-morty-app
- **Files**: README.md, components/common/EpisodeCard.tsx, interfaces/index.ts, pages/index.tsx
