# Skeleton

Skeleton is a component that is used to display the loading state of some component.

## Usage

```jsx
import { Skeleton } from '@davidscicluna/component-library';

export default function Component() {
	return <Skeleton isLoaded={false}>Dummy Content</Skeleton>;
}
```

### Props

| Name         | Type      | Default | Description                                                                      |
| ------------ | --------- | ------- | -------------------------------------------------------------------------------- |
| `isAnimated` | `boolean` | `true`  | If `true` the skeleton will not have the pulse animation                         |
| `isLoaded`   | `boolean` | `false` | If `true` the skeleton will be animated out and the children will be animated in |

## Related components

This component is based on the following components from other UI libraries

-   Mantine - Skeleton component | [Link](https://mantine.dev/core/skeleton/)
-   Chakra UI - Skeleton component | [Link](https://chakra-ui.com/docs/components/skeleton/usage)
