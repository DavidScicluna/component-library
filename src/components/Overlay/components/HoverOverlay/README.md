# HoverOverlay

HoverOverlay is a component that will pass down a boolean value if the container is being hovered or not

## Usage

```jsx
import { HoverOverlay, Text } from '@davidscicluna/component-library';

export default function Component() {
	return (
		<HoverOverlay>
			{(isHovering) => (
				<Text align='center' color={text}>
					{isHovering ? 'Hovering' : 'Not Hovering'}
				</Text>
			)}
		</HoverOverlay>
	);
}
```

### Props

| Name       | Type       | Default | Description                                                                                                           |
| ---------- | ---------- | ------- | --------------------------------------------------------------------------------------------------------------------- |
| `children` | `function` |         | This method will return a react component and will pass down a boolean value if the container is being hovered or not |
