import { createContext, useContext } from 'react';

import { DEFAULT_APP_COLOR, DEFAULT_APP_COLORMODE } from '@common/constants';
import { getColorMode } from '@common/utils';

import { Provider as DSCLProvider } from '@components/Provider';

const StorybookContext = createContext({ color: DEFAULT_APP_COLOR, colorMode: DEFAULT_APP_COLORMODE });

export const useStorybookContext = () => {
	const { color, colorMode } = useContext(StorybookContext);
	return { color, colorMode };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StorybookProvider = (Story: any, context: any) => {
	const color = context?.globals?.color;
	const colorMode = context?.globals?.backgrounds?.value
		? context?.globals?.backgrounds?.value === '#f8fafc'
			? 'light'
			: 'dark'
		: getColorMode();

	return (
		<StorybookContext.Provider value={{ color, colorMode }}>
			<DSCLProvider color={color} colorMode={colorMode}>
				<Story />
			</DSCLProvider>
		</StorybookContext.Provider>
	);
};

export default StorybookProvider;
