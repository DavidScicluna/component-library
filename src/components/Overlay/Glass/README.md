# Glass

Glass is a component that adds the [Glassmorphism](https://www.freecodecamp.org/news/glassmorphism-how-to-create-a-glass-card-in-figma/#:~:text=Glassmorphism%20is%20a%20style%20which,and%20feel%20to%20its%20elements.) effect as an overlay on top of another component

## Usage

```jsx
import { Glass } from '@davidscicluna/component-library';

export default function Component() {
	return <Glass>Hello you cannot see me!</Glass>;
}
```

### Props

| Name            | Type                                                                 | Default | Description                                                                                   |
| --------------- | -------------------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------- |
| `blur`          | `BackdropBlur ("base", "none", "sm", "lg", "xl", "md", "2xl", "3xl") | `base`  | The amount of the blur effect to be applied                                                   |
| `hasBackground` | `boolean`                                                            | `true`  | If `true` a background depending on color & colorMode will be shown alongside the blur effect |
