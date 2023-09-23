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

| Name             | Type                       | Default         | Description                                                                                |
| ---------------- | -------------------------- | --------------- | ------------------------------------------------------------------------------------------ |
| `renderOverlay`  | `function`                 |                 | Callback invoked to render the overlay.                                                    |
| `blur`           | `BackdropBlur`             | `md`            | The amount of the blur effect to be applied.                                               |
| `blurType`       | `GlassOverlayBlurType`     | `backdrop`      | The type of blur to show either a backdrop filter blur or else it will be a normal blur.   |
| `backdropAmount` | `number`                   | `0.5`           | The amount to increase the transparency by, given as a decimal between 0 and 1.            |
| `placement`      | `PositionOverlayPlacement` | `middle-center` | The position of the overlay item relative to child element.                                |
| `radius`         | `ThemeRadius`              | `none`          | The border radius of the glass overlay container.                                          |
| `isVisible`      | `boolean`                  | `false`         | If `true` it will render the overlay, else if `false` it will render out.                  |
| `hasGlass`       | `boolean`                  | `true`          | If `true` it will trigger the glass effect on the background.                              |
| `hasBackground`  | `boolean`                  | `true`          | If `true` a background depending on color & colorMode will be triggered on the background. |
