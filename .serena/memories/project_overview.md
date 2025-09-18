# React Resizable Layout - Project Overview

## Purpose
`react-resizable-layout` is a lightweight, accessible, headless React component and hook library for creating drag-and-drop resizable layouts. It provides both a `Resizable` component and a `useResizable` hook with full keyboard and mouse support, following W3C accessibility standards.

## Tech Stack
- **Language**: TypeScript (strict mode)
- **Framework**: React (>=17.0.0)
- **Build Tool**: Microbundle
- **Development**: Storybook for component development and testing
- **Package Manager**: pnpm (with Volta for Node.js version management - Node 22.18.0)
- **Testing**: Type checking via TypeScript, no unit tests
- **Linting**: ESLint with Airbnb configuration
- **Formatting**: Prettier
- **Version Control**: Git with Husky hooks

## Project Structure
```
src/
├── useResizable.ts    # Core hook with all resize logic
├── Resizable.tsx      # Component wrapper around hook
├── types.ts          # TypeScript type definitions
├── constants.ts      # Keyboard constants for navigation
└── index.ts          # Main exports
```

## Key Features
- 📦 Lightweight (minified + gzipped)
- 🕳 Headless architecture
- 🫶🏽 Accessible with ARIA support
- 🤏 Drag and Drop Support
- ⌨️ Keyboard navigation
- 🫙 Zero dependencies

## Architecture Pattern
The library follows a headless component pattern where:
- `useResizable` is the core hook containing all resize logic
- `Resizable` is a thin wrapper component that uses the hook
- Both return the same interface (`Resizable` type) with position state and separator props
- Uses modern pointer events API for unified mouse/touch handling
- Maintains both `position` (current) and `endPosition` (final after drag) states
- Uses `positionRef` for immediate position updates during drag operations without re-renders
- Optional `containerRef` for position calculations relative to a container element