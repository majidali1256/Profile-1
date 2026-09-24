# Profile-1 (Majid Portfolio)

A personal portfolio web app built with React, TypeScript, Vite, GSAP animations, and Three.js via React Three Fiber. It renders a multi-section portfolio experience with animated transitions, custom cursor behavior, and interactive 3D content.

## Features

- Multi-section single-page portfolio layout (Landing, About, What I Do, Career, Work, Tech Stack, Contact)
- GSAP-driven motion and scroll effects (including `ScrollTrigger`, `ScrollSmoother`, and `SplitText` usage in source)
- Interactive 3D scenes using Three.js + React Three Fiber ecosystem
- Lazy-loaded major UI/3D sections for improved initial loading
- Responsive behavior that adapts 3D/section rendering by viewport

## Technology Stack

- **Core**: React 18, React DOM, TypeScript, Vite
- **3D/Graphics**: Three.js, `@react-three/fiber`, `@react-three/drei`, `@react-three/rapier`, `@react-three/postprocessing`, `three-stdlib`
- **Animation**: GSAP, `@gsap/react`
- **UI Utilities**: `react-icons`, `react-fast-marquee`
- **Tooling**: ESLint 9, typescript-eslint

## Setup

### Prerequisites

- Node.js 18+ (recommended)
- npm

### Install dependencies

```bash
npm install
```

## Run locally

```bash
npm run dev
```

The Vite dev server is configured with `--host`, so it is available on your local network as well.

## Build and preview

```bash
npm run build
npm run preview
```

## Linting

```bash
npm run lint
```

## Testing

This repository currently does not define a test script in `package.json`. No automated test runner is configured in the current implementation.

## Configuration / Environment Variables

No environment variables are required by the current source (`src`) at this time.

## Usage Examples

- Start development and open the local Vite URL:
  ```bash
  npm run dev
  ```
- Validate code style before committing:
  ```bash
  npm run lint
  ```
- Produce a production build:
  ```bash
  npm run build
  ```

## Project Structure

```text
Profile-1/
├── public/                  # Static assets
├── src/
│   ├── components/          # UI sections, 3D wrapper components, utilities/styles
│   ├── context/             # React context providers
│   ├── data/                # Data/config consumed by components
│   ├── App.tsx              # App composition with lazy-loaded sections
│   └── main.tsx             # React entry point
├── index.html               # Vite HTML template
├── package.json             # Scripts and dependencies
├── tsconfig*.json           # TypeScript configuration
└── vite.config.ts           # Vite configuration
```

## Deployment Notes

This is a Vite static web app. After `npm run build`, deploy the generated `dist/` directory to any static hosting provider.

## Project-specific Notes

- The codebase imports GSAP plugins such as `SplitText` and `ScrollSmoother`; make sure your GSAP setup/license is appropriate for your deployment use case.
- The repository is shared for learning. See `LICENSE` for usage terms.

