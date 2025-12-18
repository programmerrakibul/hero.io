# HERO.IO - App Discovery Platform

A modern, responsive web application for discovering and exploring mobile
applications. Built with React and Vite, HERO.IO provides an intuitive interface
to browse, search, and learn about various mobile apps across different
categories.

## 🚀 Features

- **App Discovery**: Browse through a curated collection of 20+ mobile
  applications
- **Detailed App Information**: View comprehensive details including ratings,
  reviews, downloads, and descriptions
- **Interactive Rating Charts**: Visualize user ratings with dynamic charts
  powered by Recharts
- **Responsive Design**: Fully responsive UI built with Tailwind CSS and DaisyUI
- **Fast Performance**: Lightning-fast development and build times with Vite
- **Smooth Navigation**: Client-side routing with React Router v7
- **Loading States**: Elegant loading indicators and spinners for better UX
- **Error Handling**: Custom error pages and graceful error handling

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4 + DaisyUI 5
- **Routing**: React Router 7
- **Charts**: Recharts 3
- **Icons**: Lucide React
- **HTTP Client**: Axios
- **Notifications**: React Toastify
- **Linting**: ESLint 9

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/programmerrakibul/hero.io.git
cd hero.io
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
hero-io/
├── public/
│   ├── appsData.json       # App data source
│   ├── favicon.png         # Site favicon
│   └── _redirects          # Netlify redirects
├── src/
│   ├── assets/             # Images and static assets
│   ├── components/         # React components
│   │   ├── AppCard/        # App card component
│   │   ├── Banner/         # Hero banner
│   │   ├── Footer/         # Footer component
│   │   ├── Navbar/         # Navigation bar
│   │   ├── RatingChart/    # Rating visualization
│   │   ├── Stats/          # Statistics display
│   │   ├── TrendingApps/   # Trending apps section
│   │   └── pages/          # Page components
│   │       ├── HomePage/
│   │       ├── AllApps/
│   │       ├── AppDetails/
│   │       ├── Installation/
│   │       └── Error/
│   ├── Contexts/           # React Context API
│   ├── Hooks/              # Custom React hooks
│   ├── Routes/             # Route configuration
│   ├── utilities/          # Helper functions
│   ├── App.jsx             # Root component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── index.html              # HTML template
├── vite.config.js          # Vite configuration
├── eslint.config.js        # ESLint configuration
└── package.json            # Dependencies and scripts

```

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Key Components

### Pages

- **HomePage**: Landing page with hero banner and trending apps
- **AllApps**: Browse all available applications
- **AppDetails**: Detailed view of individual apps with ratings and statistics
- **Installation**: Installation guide and instructions
- **Error**: Custom 404 and error handling page

### Reusable Components

- **AppCard**: Display app information in card format
- **RatingChart**: Visualize rating distribution
- **Stats**: Show app statistics (downloads, reviews, ratings)
- **Navbar**: Navigation header
- **Footer**: Site footer
- **Banner**: Hero section with call-to-action

## 🔧 Configuration

### Tailwind CSS

The project uses Tailwind CSS v4 with DaisyUI for component styling.
Configuration is handled through the Vite plugin.

### React Router

Routes are configured in `src/Routes/router.jsx` with the following structure:

- `/` - Home page
- `/apps` - All apps listing
- `/app-details/:id` - Individual app details
- `/installation` - Installation guide

## 🌐 Deployment

The project includes a `_redirects` file for Netlify deployment. To deploy:

1. Build the project:

```bash
npm run build
```

2. Deploy the `dist` folder to your hosting platform

## 📱 App Data Structure

Apps are stored in `public/appsData.json` with the following structure:

```json
{
  "id": 101,
  "title": "App Name",
  "companyName": "Company Name",
  "image": "image-url",
  "description": "App description",
  "size": 24.5,
  "reviews": 42,
  "ratingAvg": 4.6,
  "downloads": 12,
  "ratings": [
    { "name": "1 star", "count": 45 },
    { "name": "2 star", "count": 62 },
    ...
  ]
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Built with ❤️ using React and Vite

---

**Note**: This is a demo project showcasing modern React development practices
and UI/UX design patterns.
