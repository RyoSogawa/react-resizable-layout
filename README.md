# react-resizable-layout

[![npm version](https://badge.fury.io/js/react-resizable-layout.svg)](http://badge.fury.io/js/react-resizable-layout)
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)
[![minziggped size](https://badgen.net/bundlephobia/minzip/react-resizable-layout)](https://bundlephobia.com/package/react-resizable-layout)
[![dependencies count](https://badgen.net/bundlephobia/dependency-count/react-resizable-layout)](https://bundlephobia.com/package/react-resizable-layout)
[![tree shaking](https://badgen.net/bundlephobia/tree-shaking/react-resizable-layout)](https://bundlephobia.com/package/react-resizable-layout)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

Headless React component and hook for resizable layout.

![Hero Image](./hero.gif)

[![Edit react-resizable-layout](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-resizable-layout-jy3vhk?fontsize=14&hidenavigation=1&theme=dark)

[Storybook Demo](https://ryosogawa.github.io/react-resizable-layout/)

## Features

- 📦 Lightweight
- 🕳 Headless
- 🤏 Drag and Drop Support
- ⌨️ Keyboard Support
- 🫙 Zero Dependencies

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
import Resizable from 'react-resizable-layout';

<Resizable axis={'x'}>
  {({ position, splitterProps }) => (
    <div className="wrapper">
      <div className="left-block" style={{ width: position }} />
      <YourSplitterComponent {...splitterProps} />
      <div className="right-block" />
    </div>
  )}
</Resizable>
```

### `useResizable` hook

```tsx
import { useResizable } from 'react-resizable-layout';

const Component = () => {
  const { position, splitterProps } = useResizable({
    axis: 'x',
  })

  return (
    <div className="wrapper">
      <div className="left-block" style={{ width: position }} />
      <YourSplitterComponent {...splitterProps} />
      <div className="right-block" />
    </div>
  )
}
```

## Configuration

### Common Props

| Name          | Type       | Default  | Required | Description                                                               |
|---------------|------------|----------|----------|---------------------------------------------------------------------------|
| axis          | 'x' or 'y' | -        | ◯        | Resize direction                                                          |
| initial       | number     | 0        | -        | Initial size                                                              |
| min           | number     | 0        | -        | Minimum size                                                              |
| max           | number     | Infinity | -        | Maximum size                                                              |
| reverse       | boolean    | false    | -        | If true, returns position of the opposite side                            |
| step          | number     | 10       | -        | Pixel steps when operating with keyboard                                  |
| shiftStep     | number     | 50       | -        | Pixel steps when operating with keyboard while holding down the shift key |
| onResizeStart | function   | -        | -        | Callback on resize start                                                  |
| onResizeEnd   | function   | -        | -        | Callback on resize end                                                    |

### `Resizable` component children args

`useResizable` hook returns same.

| Name          | Type    | Description                                                   |
|---------------|---------|---------------------------------------------------------------|
| position      | number  | Splitter's position (Width for 'x' axis, height for 'y' axis) |
| isDragging    | boolean | If dragging then true                                         |
| splitterProps | object  | Splitter's props like onMouseDown                             |

## About keyboard support
The following keyboard operations are supported.

| Key                               | Operation                                  |
|-----------------------------------|--------------------------------------------|
| Arrow (`↑`,`→`,`↓`,`←`)           | Move the splitter by 10px (default)        |
| `Shift` + Arrow (`↑`,`→`,`↓`,`←`) | Move the splitter by 50px (default)        |
| `Enter`                           | Reset the splitter to the initial position |


## Contribution

Please feel free to open an issue or make a pull request.

## License

Distributed under the MIT License. See [LICENSE](./LICENSE) for more information.
