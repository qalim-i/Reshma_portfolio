# Reshma's Portfolio

A personal portfolio website built with [React](https://react.dev/) and [Vite](https://vitejs.dev/) to showcase professional accomplishments, academic courses, and educational materials.

## 🌟 Features

- **Home**: A welcoming hero section introducing the portfolio.
- **CV**: A detailed Curriculum Vitae section highlighting professional experience and skills.
- **Courses**: A dedicated section to list and describe various courses.
- **Course Materials**: A repository of resources and materials related to the courses.
- **Responsive Layout**: Designed to look great on all devices.
- **Smooth Navigation**: specialized routing using `react-router-dom` for a seamless user experience.

## 🛠️ Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **Routing**: React Router DOM 7
- **Styling**: CSS Modules
- **Icons**: React Icons

## 🚀 Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your system.

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```bash
    cd reshma_portfolio
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```

### Running the Development Server

Start the local development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the URL shown in your terminal).

### building for Production

To create a production-ready build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 📂 Project Structure

```
src/
├── components/
│   ├── layout/       # Shared layout components (Navbar, Footer, etc.)
│   ├── sections/     # Page content (Hero, CV, Courses, CourseMaterials)
│   └── utils/        # Utility components (e.g., ScrollToTop)
├── App.jsx           # Main application component with Routing
└── main.jsx          # Entry point
```
