import Provider from '../src/components/Provider';

export const decorators = [
	(Story) => (
		<Provider>
			<Story />
		</Provider>
	)
];
