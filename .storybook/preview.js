import { createContext, useContext } from 'react';

import Provider from '@components/Provider';
import { getColorHex, getColorMode } from '@common/utils/color';

import { __DEFAULT_APP_COLOR__, __DEFAULT_APP_COLORMODE__ } from '@common/constants';
import { colors } from '@common/data';
import { capitalize } from 'lodash-es';

// Importing Main Fonts (Work Sans & Roboto)
import '@fontsource/work-sans/100.css';
import '@fontsource/work-sans/100-italic.css';
import '@fontsource/work-sans/200.css';
import '@fontsource/work-sans/200-italic.css';
import '@fontsource/work-sans/300.css';
import '@fontsource/work-sans/300-italic.css';
import '@fontsource/work-sans/400.css';
import '@fontsource/work-sans/400-italic.css';
import '@fontsource/work-sans/500.css';
import '@fontsource/work-sans/500-italic.css';
import '@fontsource/work-sans/600.css';
import '@fontsource/work-sans/600-italic.css';
import '@fontsource/work-sans/700.css';
import '@fontsource/work-sans/700-italic.css';
import '@fontsource/work-sans/800.css';
import '@fontsource/work-sans/800-italic.css';
import '@fontsource/work-sans/900.css';
import '@fontsource/work-sans/900-italic.css';
// Importing Main Fonts (Roboto Slab)
import '@fontsource/roboto-slab/100.css';
import '@fontsource/roboto-slab/200.css';
import '@fontsource/roboto-slab/300.css';
import '@fontsource/roboto-slab/400.css';
import '@fontsource/roboto-slab/500.css';
import '@fontsource/roboto-slab/600.css';
import '@fontsource/roboto-slab/700.css';
import '@fontsource/roboto-slab/800.css';
import '@fontsource/roboto-slab/900.css';
// Importing Main Fonts (Roboto Mono)
import '@fontsource/roboto-mono/100.css';
import '@fontsource/roboto-mono/100-italic.css';
import '@fontsource/roboto-mono/200.css';
import '@fontsource/roboto-mono/200-italic.css';
import '@fontsource/roboto-mono/300.css';
import '@fontsource/roboto-mono/300-italic.css';
import '@fontsource/roboto-mono/400.css';
import '@fontsource/roboto-mono/400-italic.css';
import '@fontsource/roboto-mono/500.css';
import '@fontsource/roboto-mono/500-italic.css';
import '@fontsource/roboto-mono/600.css';
import '@fontsource/roboto-mono/600-italic.css';
import '@fontsource/roboto-mono/700.css';
import '@fontsource/roboto-mono/700-italic.css';

// Importing Material UI Icons
import '@fontsource/material-icons';
import '@fontsource/material-icons-outlined';
import '@fontsource/material-icons-two-tone';

const StorybookContext = createContext({ color: __DEFAULT_APP_COLOR__, colorMode: __DEFAULT_APP_COLORMODE__ });

export const useStorybookContext = () => {
	const { color, colorMode } = useContext(StorybookContext);
	return { color, colorMode };
};

const DSCLProvider = (Story, context) => {
	const color = context?.globals?.color;
	const colorMode = context?.globals?.backgrounds?.value === '#f8fafc' ? 'light' : 'dark';

	return (
		<StorybookContext.Provider value={{ color, colorMode }}>
			<Provider color={color} colorMode={colorMode}>
				<Story />
			</Provider>
		</StorybookContext.Provider>
	);
};

const preview = {
	globalTypes: {
		color: {
			description: 'Select the app color',
			defaultValue: __DEFAULT_APP_COLOR__,
			toolbar: {
				title: 'Color',
				icon: 'circle',
				items: [
					...colors.map((color) => ({
						title: capitalize(color),
						value: color
					})),
					{
						title: 'Gray',
						value: undefined
					}
				],
				dynamicTitle: true
			}
		}
	},
	parameters: {
		backgrounds: {
			default: getColorMode(),
			values: [
				{ name: 'light', value: getColorHex({ color: 'gray', colorMode: 'light', hueType: 'background' }) },
				{ name: 'dark', value: getColorHex({ color: 'gray', colorMode: 'dark', hueType: 'background' }) }
			]
		}
	},
	decorators: [DSCLProvider]
};

export default preview;
