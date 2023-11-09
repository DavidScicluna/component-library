# GlassOverlay

GlassOverlay is a component that adds the [Glassmorphism](https://www.freecodecamp.org/news/glassmorphism-how-to-create-a-glass-card-in-figma/#:~:text=Glassmorphism%20is%20a%20style%20which,and%20feel%20to%20its%20elements.) effect as an overlay on top of another component

## Usage

```jsx
import { GlassOverlay } from '@davidscicluna/component-library';

export default function Component() {
	return <GlassOverlay>Hello you cannot see me!</GlassOverlay>;
}
```

### Props

| Name             | Type                                                                                                          | Default    | Description                                                                                |
| ---------------- | ------------------------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------ |
| `blur`           | `BackdropBlur` ("none", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "8xl", "9xl") | `md`       | The amount of the blur effect to be applied.                                               |
| `blurType`       | `GlassOverlayBlurType` ("backdrop", "blur")                                                                   | `backdrop` | The type of blur to show either a backdrop filter blur or else it will be a normal blur.   |
| `backdropAmount` | `number`                                                                                                      | `0.5`      | The amount to increase the transparency by, given as a decimal between 0 and 1.            |
| `radius`         | `ThemeRadius`                                                                                                 | `none`     | The border radius of the glass overlay container.                                          |
| `hasBackground`  | `boolean`                                                                                                     | `true`     | If `true` a background depending on color & colorMode will be triggered on the background. |
