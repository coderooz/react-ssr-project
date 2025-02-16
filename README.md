# React SSR Project

**Version:** 1.0.0

This project is a simple test application demonstrating server-side rendering (SSR) using React, Express, and Webpack.

---

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Building the Project](#building-the-project)
- [Running the Project](#running-the-project)
- [License](#license)
- [Author](#author)

---

## Overview

This project is set up to render a basic React application on the server using Express. The client-side code is bundled with Webpack, and server-side rendering is implemented using ReactDOMServer. The project serves pre-rendered HTML for routes, ensuring fast initial load times and improved SEO.

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
│   │   └── index.jsx           # Client entry point
│   └── server/                 # Server-side code
│       └── server.jsx          # Express server code
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

Before running the application, build the client and server bundles with:

```bash
npm run build
```

This command cleans the previous build (if any) and then runs Webpack to generate the production files in the `dist` folder.

---

## Running the Project

After building, start the server with:

```bash
npm start
```

Your application will be available at [http://localhost:3000](http://localhost:3000).

---

## License

This project is licensed under the **AGPL-version-3.0** license.

---

## Author

**Ranit Saha (Coderooz)**  
Email: [coderooz.dev@gmail.com](mailto:coderooz.dev@gmail.com)  
Website: [https://www.coderooz.xyz](https://www.coderooz.xyz)

