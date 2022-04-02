# react-resizable-layout

[![npm version](https://badge.fury.io/js/react-resizable-layout.svg)](http://badge.fury.io/js/react-resizable-layout)
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

Headless React component and hook for resizable layout.

![Hero Image](./hero.gif)

[![Edit react-resizable-layout](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-resizable-layout-jy3vhk?fontsize=14&hidenavigation=1&theme=dark)

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

First, import the component:

```ts
import Resizable from 'react-resizable-layout';
// or
import { useResizable } from 'react-resizable-layout';
```

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

| Name          | Type       | Default  | Required   | Description                                    |
|---------------|------------|----------|------------|------------------------------------------------|
| axis          | 'x' or 'y' | -        | ◯          | Resize direction                               |
| initial       | number     | 0        | -          | Initial size                                   |
| min           | number     | 0        | -          | Minimum size                                   |
| max           | number     | Infinity | -          | Maximum size                                   |
| reverse       | boolean    | false    | -          | If true, returns position of the opposite side |
| onResizeStart | function   | -        | -          | Callback on resize start                       |
| onResizeEnd   | function   | -        | -          | Callback on resize end                         |

### `Resizable` component children args

`useResizable` hook returns same.

| Name          | Type    | Description                                                   |
|---------------|---------|---------------------------------------------------------------|
| position      | number  | Splitter's position (Width for 'x' axis, height for 'y' axis) |
| isDragging    | boolean | If dragging then true                                         |
| splitterProps | object  | Splitter's props like onMouseDown                             |

## Contribution

Please feel free to open an issue or make a pull request.

## License

Distributed under the MIT License. See [LICENSE](./LICENSE) for more information.
