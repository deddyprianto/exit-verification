# Proseller Exit Verification

This repository hosts a Next.js application that primarily focuses on client-side rendering techniques. Dive in to experience the sleek performance and versatile capabilities of Next.js.

## Prerequisites

- Node.js v16 or higher. If you don't have Node.js installed, grab the latest version from [Node.js official website](https://nodejs.org/).

## Getting Started

Follow these steps to get the project up and running on your local machine:

### 1. Clone the Repository

Using SSH:

```bash
git clone git@github.com:edgeworks-solutions/proseller-exit-verification.git
```

Or using HTTPS:

```bash
git clone https://github.com/edgeworks-solutions/proseller-exit-verification.git
```

### 2\. Navigate to Project Directory

```bash
cd proseller-exit-verification
```

### 3\. Install Dependencies

Run the following command to install the necessary dependencies:

```bash
yarn
```

### 4\. Run the Development Server

To start the development server:

```bash
yarn dev
```

Now, open [http://localhost:3000](http://localhost:3000) in your browser to see the application in action.

## Features

- Client-side rendering for optimal performance.

## Libraries and Dependencies

### Runtime Dependencies

These are the libraries that enhance the application's core functionality:

- **@headlessui/react**: Unstyled and accessible UI components, mainly used alongside Tailwind CSS.
- **@reduxjs/toolkit**: Simplifies the setup and usage of Redux for state management.
- **axios**: HTTP client for making network requests.
- **react-hot-toast**: Provides toast notifications for user feedback.
- **react-redux**: Bridges Redux with React, aiding in state management.
- **swr**: Data-fetching library using React Hooks.
- **tailwindcss**: Utility-first CSS framework for rapid UI development.

### Development Dependencies

These libraries are used to improve the development process but are not included in the production build:

- **eslint-config-next**: ESLint configurations tailored for Next.js projects.
- **autoprefixer**: Parses CSS and adds vendor prefixes for better cross-browser compatibility during build.
- **postcss**: Processes CSS with JavaScript during the build process.

### Adding New Libraries

When considering adding a new library to the project:

1. Check if the desired functionality isn't already covered by existing libraries.
2. Discuss with the team to evaluate the necessity and potential alternatives.
3. Once added, please document the library's purpose and usage in the appropriate section (Runtime or Development) for clarity.