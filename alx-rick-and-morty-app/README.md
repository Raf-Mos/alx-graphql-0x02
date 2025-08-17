# Rick and Morty Episodes App

A Next.js application that queries the Rick and Morty GraphQL API to display episodes with pagination.

## 🚀 Features

- **Episode Gallery**: Browse through all Rick and Morty episodes
- **Real-time Data**: Fetches data from the official Rick and Morty GraphQL API
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Pagination**: Navigate through episodes with Previous/Next controls
- **TypeScript**: Full type safety throughout the application
- **Modern UI**: Clean design with Tailwind CSS and hover effects

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **GraphQL Client**: Apollo Client
- **Styling**: Tailwind CSS
- **API**: Rick and Morty GraphQL API

## 📁 Project Structure

```
alx-rick-and-morty-app/
├── components/
│   └── common/
│       └── EpisodeCard.tsx      # Individual episode card component
├── graphql/
│   └── queries.ts               # GraphQL queries
├── interfaces/
│   └── index.ts                 # TypeScript type definitions
├── pages/
│   ├── _app.tsx                 # Apollo Client setup
│   └── index.tsx                # Main page component
├── styles/
│   └── globals.css              # Global styles with Tailwind
├── package.json                 # Dependencies and scripts
├── tsconfig.json                # TypeScript configuration
├── next.config.js               # Next.js configuration
├── tailwind.config.js           # Tailwind CSS configuration
└── postcss.config.js            # PostCSS configuration
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation & Setup

1. **Navigate to the project directory**:
   ```bash
   cd alx-rick-and-morty-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📋 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🔍 GraphQL Query

The app uses this GraphQL query to fetch episode data:

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

## 🧩 Components

### EpisodeCard
- **Purpose**: Displays individual episode information
- **Props**: `id`, `name`, `air_date`, `episode`
- **Features**: Hover effects, responsive design, episode number badge

### Home Page
- **Features**: 
  - Episode grid layout
  - Loading and error states
  - Pagination controls
  - Responsive header and footer

## 📝 TypeScript Interfaces

```typescript
interface InfoProps {
  pages: number
  next: number
  prev: number
  count: number
}

interface EpisodeProps {
  id: number
  name: string
  air_date: string
  episode: string
  info: InfoProps
}

type EpisodeCardProps = Pick<EpisodeProps, 'id' | 'name' | 'air_date' | 'episode'>
```

## 🎨 Styling

- **Framework**: Tailwind CSS
- **Design System**: 
  - Primary colors: Blue-green gradient (`#A3D5E0` to `#F4F4F4`)
  - Accent colors: `#4CA1AF`, `#45B69C`
  - Cards: White background with shadow effects
  - Responsive grid system (1-4 columns based on screen size)

## 🔗 API Integration

- **Endpoint**: `https://rickandmortyapi.com/graphql`
- **Client**: Apollo Client with InMemoryCache
- **Features**: Automatic caching, loading states, error handling

## 🌟 Key Features Explained

### Pagination
- Uses React state to track current page
- Fetches new data when page changes
- Buttons disabled at boundaries (first/last page)

### Responsive Design
- Grid adapts from 1 column (mobile) to 4 columns (desktop)
- Cards scale and have hover effects
- Typography adjusts for different screen sizes

### Type Safety
- All data structures defined with TypeScript interfaces
- Props validation for components
- GraphQL response typing

## 🚦 Development Workflow

1. **Start development server**: `npm run dev`
2. **Make changes** to components or pages
3. **Hot reload** automatically updates the browser
4. **Build for production**: `npm run build`
5. **Test production build**: `npm run start`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is for educational purposes as part of the ALX GraphQL curriculum.

## 🙏 Acknowledgments

- Rick and Morty API team for the excellent GraphQL endpoint
- Next.js team for the amazing framework
- Tailwind CSS for the utility-first approach
