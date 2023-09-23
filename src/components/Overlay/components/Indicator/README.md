# Indicator

Indicator is a component that renders an element at the corner of another element

## Usage

```jsx
import { Indicator } from '@davidscicluna/component-library';

export default function Component() {
	return <Indicator>Hello</Indicator>;
}
```

### Props

| Name              | Type                 | Default                                                                                                                   | Description                                                                 |
| ----------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `renderIndicator` | `function`           |                                                                                                                           | Callback invoked to render the indicator.                                   |
| `isVisible`       | `boolean`            | `false`                                                                                                                   | If `true` it will render the indicator, else if `false` it will render out. |
| `offset`          | `number`             | Indicator offset relative to the target element, usually used for elements with border-radius, equals to size by default. |
| `placement`       | `IndicatorPlacement` | The position of the indicator relative to child element.                                                                  |

## Related components

This component is based on the following components from other UI libraries

-   MUI - Badge component | [Link](https://mui.com/material-ui/react-badge/)
-   Mantine - Indicator component | [Link](https://mantine.dev/core/indicator/)
