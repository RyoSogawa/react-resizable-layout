# CI/CD Configuration

## GitHub Actions Workflow

### Test Workflow (`.github/workflows/test.yml`)
- **Trigger**: On push and pull requests
- **Environment**: Ubuntu latest
- **Node Version**: 18.x
- **Steps**:
  1. Checkout code
  2. Setup pnpm (version 7)
  3. Setup Node.js
  4. Install dependencies (`pnpm install --frozen-lockfile`)
  5. Run tests (`pnpm test`)

The `pnpm test` command runs:
- TypeScript type checking (`tsc --noEmit`)
- ESLint linting

## Local Git Hooks (Husky)
- **Pre-commit**: Runs lint-staged
  - Applies ESLint with --fix to staged `.{js,ts,jsx,tsx}` files
  - Applies Prettier formatting to staged files
  
## Version Management
- **preversion**: Runs linting
- **version**: Formats code and stages all changes in src/
- **postversion**: Pushes commits and tags to remote

## Publishing
- **prepublishOnly**: Runs full test suite and builds the library
- Files published to npm: Only the `lib/` directory (built files)