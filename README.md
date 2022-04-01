# react-resizable-layout

[![npm version](https://badge.fury.io/js/react-resizable-layout.svg)](http://badge.fury.io/js/react-resizable-layout)
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)

Headless React component and hook for resizable layout.

Warning! 
This is a very early release.
NOT WELL TESTED.

[Storybook Demo](https://ryosogawa.github.io/react-resizable-layout/)

## Features

- 📦 Lightweight
- 🕳 Headless
- 🤏 Drag and Drop Support

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
<Resizable axis={'x'}>
  {({ position, splitterProps }) => (
    <div>
      <div style={{ width: position }}/>
      <YourSplitterComponent {...splitterProps} />
      <div/>
    </div>
  )}
</Resizable>
```

### `useResizable` hook

```tsx
const Component = () => {
  const { position, splitterProps } = useResizable({
    axis: 'x',
  })

  return (
    <div>
      <div style={{ width: position }}/>
      <YourSplitterComponent {...splitterProps} />
      <div/>
    </div>
  )
}
```

## Configuration

### Common Props

| Name          | Type       | Default  | Required   | Description                                       |
|---------------|------------|----------|------------|---------------------------------------------------|
| axis          | 'x' or 'y' | -        | ◯          | Resize direction                                  |
| initial       | number     | 0        | -          | Initial size                                      |
| min           | number     | 0        | -          | Minimum size                                      |
| max           | number     | Infinity | -          | Maximum size                                      |
| reverse       | boolean    | false    | -          | If true, calculates the size of the opposite side |
| onResizeStart | function   | -        | -          | Callback on resize start                          |
| onResizeEnd   | function   | -        | -          | Callback on resize end                            |

### `Resizable` component children args

`useResizable` hook returns same.

| Name          | Type    | Description                       |
|---------------|---------|-----------------------------------|
| position      | number  | Splitter's position               |
| isDragging    | boolean | If dragging then true             |
| splitterProps | object  | Splitter's props like onMouseDown |

## Contribution

Please feel free to open an issue or make a pull request.

## License

Distributed under the MIT License. See [LICENSE](./LICENSE) for more information.
