# React SSR Project

**Version:** 1.0.1

This project is a test application demonstrating server-side rendering (SSR) using React, Express, and Webpack. In version 1.0.1, we've enhanced the development experience by adding automatic rebuilding of client assets and live reload functionality. These improvements ensure that changes to your code are immediately reflected in the browser without manual refresh.

---

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Building the Project](#building-the-project)
- [Running the Project](#running-the-project)
- [Development](#development)
- [License](#license)
- [Author](#author)

---

## Overview

This project renders a basic React application on the server using Express. The client-side code is bundled with Webpack, and SSR is implemented using ReactDOMServer. In addition to improved SEO and fast initial page loads, version 1.0.2 now includes features for automatic asset rebuilding and live reload during development.

---

## Project Structure

```
React-SSR-Project/
├── node_modules/               # Installed packages
├── src/
│   ├── client/                 # Client-side code
│   │   ├── screens/            # Screen components
│   │   │   ├── About.jsx
│   │   │   ├── Home.jsx
│   │   │   └── NavBar.jsx
│   │   ├── App.jsx             # Main App component
│   │   ├── index.html          # HTML template
│   │   ├── index.jsx           # Client entry point
│   │   └── index.css           # Tailwind CSS file
│   └── server/                 # Server-side code
│       └── server.jsx          # Express server code
├── public/                     # Static assets (e.g., favicon)
│   └── favicon.ico
├── .env                        # Environment variables
├── .gitignore                  # Ignored files for Git
├── package.json                # Project metadata and scripts
├── package-lock.json           # Exact dependency versions
├── README.md                   # This file
└── webpack.config.cjs          # Webpack configuration for client and server
```

---

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/coderooz/react-ssr-project.git
   cd react-ssr-project
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

---

## Building the Project

For production, build the client and server bundles with:

```bash
npm run build
```

This command cleans previous builds, bundles JavaScript with Webpack, and processes Tailwind CSS—generating production files in the `dist` folder.

---

## Running the Project

After building, start the server with:

```bash
npm start
```

Your application will be available at [http://localhost:3000](http://localhost:3000).

---

## Development

Version 1.0.2 includes a streamlined development workflow with automatic rebuilding and live reload capabilities.

### Features

- **Webpack Watch Mode:** Automatically rebuilds client and server bundles when code changes.
- **Tailwind CSS Watch Mode:** Rebuilds the CSS file on changes.
- **Nodemon:** Restarts the server when server-side files change.
- **Live Reload:** Automatically refreshes the browser when assets in the `dist` folder change (configured via `livereload` and `connect-livereload`).

### Running in Development Mode

To launch the development environment, run:

```bash
npm run dev
```

This command uses `concurrently` to run:
- `webpack:watch` – Watches and rebuilds JavaScript bundles.
- `tailwind:watch` – Watches and rebuilds the Tailwind CSS file.
- `server:dev` – Uses nodemon to restart the server on file changes.

### Under the Hood

- **Webpack Watch:** Monitors source files and updates the bundles automatically.
- **Tailwind Watch:** Runs `npx tailwindcss -i ./src/client/index.css -o ./dist/output.css --watch` to update CSS.
- **Nodemon:** Configured (with custom restart commands and file extensions) to watch the `src` directory.
- **Live Reload:** The Express server uses `livereload` and `connect-livereload` to inject a script into your HTML that triggers a browser refresh when files in `dist` change.

---

## License

This project is licensed under the **AGPL-version-3.0** license.

---

## Author

**Ranit Saha (Coderooz)**  
Email: [coderooz.dev@gmail.com](mailto:coderooz.dev@gmail.com)  
Website: [https://www.coderooz.xyz](https://www.coderooz.xyz)
