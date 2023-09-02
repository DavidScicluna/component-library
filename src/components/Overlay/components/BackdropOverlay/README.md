# BackdropOverlay

BackdropOverlay is a component that adds a background

## Usage

```jsx
import { BackdropOverlay } from '@davidscicluna/component-library';

export default function Component() {
	return <BackdropOverlay />;
}
```

### Props

| Name       | Type                                                                                                          | Default    | Description                                                                              |
| ---------- | ------------------------------------------------------------------------------------------------------------- | ---------- | ---------------------------------------------------------------------------------------- |
| `amount`   | `number`                                                                                                      | `0.5`      | The amount to increase the transparency by, given as a decimal between 0 and 1           |
| `blur`     | `BackdropBlur` ("none", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "8xl", "9xl") | `md`       | The amount of the blur effect to be applied.                                             |
| `blurType` | `BackdropOverlayBlurType` ("backdrop", "blur")                                                                | `backdrop` | The type of blur to show either a backdrop filter blur or else it will be a normal blur. |
