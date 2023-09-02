# PositionOverlay

PositionOverlay is a component that renders an element depending on an overlay placed depending on the `position` prop

## Usage

```jsx
import { PositionOverlay } from '@davidscicluna/component-library';

export default function Component() {
	return <PositionOverlay>Hello</PositionOverlay>;
}
```

### Props

| Name               | Type                                                                                                                                                            | Default         | Description                                                                                |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ------------------------------------------------------------------------------------------ |
| `renderOverlay`    | `function`                                                                                                                                                      |                 | A function that will return the item to render in the overlay.                             |
| `blur`             | `BackdropBlur` ("none", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "8xl", "9xl")                                                   | `md`            | The amount of the blur effect to be applied.                                               |
| `blurType`         | `GlassOverlayBlurType` ("backdrop", "blur")                                                                                                                     | `backdrop`      | The type of blur to show either a backdrop filter blur or else it will be a normal blur.   |
| `backdropAmount`   | `number`                                                                                                                                                        | `0.5`           | The amount to increase the transparency by, given as a decimal between 0 and 1.            |
| `placement`        | `PositionOverlayPlacement ("bottom-center", "bottom-end", "bottom-start", "top-end", "top-start", "top-center", "middle-center", "middle-end", "middle-start")` | `middle-center` | The position of the overlay item relative to child element.                                |
| `radius`           | `ThemeRadius`                                                                                                                                                   | `none`          | The border radius of the glass overlay container.                                          |
| `isOverlayVisible` | `boolean`                                                                                                                                                       | `false`         | If `true` it will render the overlay, else if `false` it will render out.                  |
| `hasGlass`         | `boolean`                                                                                                                                                       | `true`          | If `true` it will trigger the glass effect on the background.                              |
| `hasBackground`    | `boolean`                                                                                                                                                       | `true`          | If `true` a background depending on color & colorMode will be triggered on the background. |
