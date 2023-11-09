# LoadingOverlay

LoadingOverlay is a component that renders a spinner if `isLoaded` prop is `true` on top of the child element

## Usage

```jsx
import { LoadingOverlay } from '@davidscicluna/component-library';

export default function Component() {
	return <LoadingOverlay>Hello</LoadingOverlay>;
}
```

### Props

| Name             | Type                                                                                                          | Default    | Description                                                                                |
| ---------------- | ------------------------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------ |
| `blur`           | `BackdropBlur` ("none", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "8xl", "9xl") | `md`       | The amount of the blur effect to be applied.                                               |
| `blurType`       | `GlassOverlayBlurType` ("backdrop", "blur")                                                                   | `backdrop` | The type of blur to show either a backdrop filter blur or else it will be a normal blur.   |
| `backdropAmount` | `number`                                                                                                      | `0.5`      | The amount to increase the transparency by, given as a decimal between 0 and 1.            |
| `radius`         | `ThemeRadius`                                                                                                 | `none`     | The border radius of the glass overlay container.                                          |
| `isLoading`      | `boolean`                                                                                                     | `false`    | If `true` it will fade in the spinner element else it will fade out the spinner.           |
| `hasGlass`       | `boolean`                                                                                                     | `true`     | If `true` it will trigger the glass effect on the background.                              |
| `hasBackground`  | `boolean`                                                                                                     | `true`     | If `true` a background depending on color & colorMode will be triggered on the background. |
