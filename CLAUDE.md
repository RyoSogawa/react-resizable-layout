# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
`react-resizable-layout` is a lightweight, accessible, headless React component and hook library for creating drag-and-drop resizable layouts. It provides both a `Resizable` component and a `useResizable` hook with full keyboard and mouse support, following W3C accessibility standards.

## Common Development Commands

### Build and Testing
```bash
# Install dependencies
pnpm install

# Build the library
pnpm build

# Run type checking and linting
pnpm test

# Run linting only
pnpm lint

# Fix linting issues
pnpm lint:fix

# Format code
pnpm format
```

### Development
```bash
# Run Storybook for development
pnpm storybook

# Build Storybook documentation
pnpm build-storybook
```

### Publishing
```bash
# Prepare for publish (runs tests and build)
pnpm prepublishOnly

# Version bump (runs linting and formatting)
pnpm version
```

## Architecture

### Core Hook Pattern
The library follows a headless component pattern where:
- `useResizable` (src/useResizable.ts) is the core hook containing all resize logic
- `Resizable` (src/Resizable.tsx) is a thin wrapper component that uses the hook
- Both return the same interface (`Resizable` type) with position state and separator props

### Key Implementation Details
- **Pointer Events**: Uses modern pointer events API for unified mouse/touch handling
- **Position Management**: Maintains both `position` (current) and `endPosition` (final after drag) states
- **Ref-based State**: Uses `positionRef` for immediate position updates during drag operations without re-renders
- **Container Support**: Optional `containerRef` for position calculations relative to a container element
- **Accessibility**: Implements ARIA attributes for separator role with keyboard navigation support

### File Structure
```
src/
├── useResizable.ts    # Core hook with all resize logic
├── Resizable.tsx      # Component wrapper around hook
├── types.ts          # TypeScript type definitions
├── constants.ts      # Keyboard constants for navigation
└── index.ts          # Main exports
```

## Testing Approach
- Manual testing through Storybook stories (stories/*.stories.tsx)
- Type checking via TypeScript strict mode
- ESLint with Airbnb configuration for code quality
- No unit tests currently - validation through type checking and linting