# Provider

Provider is the root component that wraps around the rest of the components and is used to set the default color & colorMode of the all the components.

## Usage

```jsx
import { Provider } from '@davidscicluna/component-library';

export default function Component() {
	return (
		<Provider color='blue' colorMode='light'>
			Rest of the app
		</Provider>
	);
}
```

### Props

| Name        | Type           | Default | Description |
| ----------- | -------------- | ------- | ----------- |
| `color`     | `AppColor`     |         |             |
| `colorMode` | `AppColorMode` |         |             |
