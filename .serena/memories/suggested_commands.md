# Suggested Commands

## Development Commands

### Installation
```bash
pnpm install          # Install dependencies
```

### Development
```bash
pnpm storybook        # Run Storybook for development (port 6006)
```

### Build & Testing
```bash
pnpm build           # Build the library (with prebuild clean)
pnpm test            # Run type checking and linting
pnpm lint            # Run ESLint
pnpm lint:fix        # Fix ESLint issues
pnpm format          # Format code with Prettier
```

### Documentation
```bash
pnpm build-storybook # Build Storybook docs to ./docs
```

### Publishing & Versioning
```bash
pnpm prepublishOnly  # Run tests and build before publish
pnpm version         # Version bump (runs linting and formatting)
```

## Git Commands (Darwin/macOS)
```bash
git status           # Check working tree status
git diff             # Show changes
git add -A           # Stage all changes
git commit -m "message"  # Commit changes
git push             # Push to remote
git log --oneline -5     # View recent commits
```

## System Utilities (Darwin/macOS)
```bash
ls -la              # List all files with details
cd <directory>      # Change directory
pwd                 # Print working directory
grep -r "pattern" . # Search recursively
find . -name "*.ts" # Find files by pattern
open .              # Open current directory in Finder
```

## Environment
- Node.js version: 22.18.0 (managed via Volta)
- Package manager: pnpm
- Git hooks: Managed by Husky
  - Pre-commit: Runs lint-staged (ESLint + Prettier on staged files)