# Container

Container is a component is used to constrain a content's width to the current breakpoint, while keeping it fluid.

## Usage

```jsx
import { Container } from '@davidscicluna/component-library';

export default function Component() {
	return <Container>Content</Container>;
}
```

### Props

| Name                | Type                  | Default | Description                                                                                            |
| ------------------- | --------------------- | ------- | ------------------------------------------------------------------------------------------------------ |
| `breakpoint`        | `ContainerBreakpoint` | `2xl`   | Predefined container max-width values                                                                  |
| `isContentCentered` | `boolean`             | `true`  | If true, container will center its children regardless of their width.                                 |
| `isFluid`           | `boolean`             | `false` | If true, the `breakpoint` prop is ignored and the container will take the full width of the container. |

## Related components

This component is based on the following components from other UI libraries

-   Mantine - Container component | [Link](https://mantine.dev/core/container/)
-   Chakra UI - Container component | [Link](https://chakra-ui.com/docs/components/container/usage)
