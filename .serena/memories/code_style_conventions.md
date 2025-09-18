# Code Style and Conventions

## TypeScript Configuration
- **Target**: ES5
- **Module**: ESNext
- **Strict Mode**: Enabled
- **JSX**: React.createElement
- **Module Resolution**: Node

## ESLint Configuration
- **Base**: Airbnb + Airbnb TypeScript
- **Key Rules**:
  - No console.log (only warn/error allowed)
  - Consistent type imports enforced
  - JSX props sorted (shorthand last, callbacks last)
  - Import order enforced (grouped and alphabetized)
  - Object shorthand for properties
  - No React prop-types (using TypeScript)
  - React not required in scope (React 17+)

## Prettier Configuration
- **Print Width**: 100
- **Tab Width**: 2 spaces
- **Semicolons**: Always
- **Quotes**: Single quotes for JS/TS, double quotes for JSX
- **Trailing Comma**: All
- **Arrow Parens**: Always
- **End of Line**: LF

## Naming Conventions
- **Components**: PascalCase (e.g., `Resizable`)
- **Hooks**: camelCase with `use` prefix (e.g., `useResizable`)
- **Types/Interfaces**: PascalCase (e.g., `ResizableProps`)
- **Constants**: UPPER_SNAKE_CASE for keyboard keys
- **Files**: Component files use `.tsx`, logic/hooks use `.ts`

## Code Organization
- Export default for main component
- Named exports for hooks and types
- Type imports separated from value imports
- Props interfaces defined in `types.ts`
- Constants in dedicated `constants.ts` file

## Comments Policy
- Minimal comments - code should be self-documenting
- Comments only when:
  - Code is complex or long and processing is unclear
  - Intent differs from what the code literally does
- No excessive or redundant comments