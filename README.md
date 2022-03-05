# react-resizable-layout
[![npm version](https://badge.fury.io/js/react-resizable-layout.svg)](http://badge.fury.io/js/react-resizable-layout)
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)

Headless React component and hook for resizable layout.

## Features

- 📦Lightweight
- 🕳Headless 
- 🤏Drag and Drop
 
## Installation
Install from npm:
```
# Using npm
npm install react-resizable-layout

# Using Yarn
yarn add react-resizable-layout
```

## Usage
### `Resizable` component
```tsx
<Resizable  axis={'x'}>
    {({ position, dragBarProps }) => (
      <div>
        <div style={{width: position}} />
        <DragBar {...dragBarProps} />
        <div />
      </div>
    )}
</Resizable>
```

### `useResizable` hook
```tsx
const Component = () => {
  const {position, dragBarProps} = useResizable({
    axis: 'x',
  })
  
  return (
    <div>
      <div style={{width: position}} />
      <DragBar {...dragBarProps} />
      <div />
    </div>
  )
}
```

## Configuration
### Props
| Name          | Type       | Default  | Required   | Description              |
|---------------|------------|----------|------------|--------------------------|
| axis          | 'x' or 'y' | -        | ◯          | resize direction         |
| initial       | number     | 0        | -          | initial size             |
| min           | number     | 0        | -          | minimum size             |
| max           | number     | Infinity | -          | maximum size             |
| reverse       | boolean    | false    | -          | reverse direction        |
| onResizeStart | function   | -        | -          | callback on resize start |
| onResizeEnd   | function   | -        | -          | callback on resize end   |


## Contribution
Please feel free to open an issue or make a pull request.

## License
Distributed under the MIT License. See [LICENSE](./LICENSE) for more information.
