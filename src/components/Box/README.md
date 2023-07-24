# Box

Box is the most abstract component on top of which all other components are built. It a Polymorphic component which means it has a special prop `as` that lets you change the root element. By default, it renders a `div` element

## Usage

```jsx
import { Box } from '@davidscicluna/component-library';

export default function RockOnButton() {
	return (
		<Box as='button' sx={{ color: 'red' }}>
			I am a button!
		</Box>
	);
}
```

### Props

| Name | Type                       | Default | Description                                                                                                            |
| ---- | -------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------- |
| `as` | `React - ElementType`      | `div`   | The component used for the root node. Either a string to use an HTML element or a component.                           |
| `sx` | `Emotion SerializedStyles` | `{}`    | The system prop that allows [emotion css](https://emotion.sh/docs/introduction) objects to be passed down to as styles |

## Related components

This component is based on the following components from other UI libraries

-   MUI - Box component | [Link](https://mui.com/material-ui/react-box/)
-   Mantine - Box component | [Link](https://mantine.dev/core/box/)
-   Chakra UI - Box component | [Link](https://chakra-ui.com/docs/components/box/usage)
