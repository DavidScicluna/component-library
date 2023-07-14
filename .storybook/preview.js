import Provider from '../src/components/Provider';
import { getColorHex, getColorMode } from '../src/common/utils/color';

import { __DEFAULT_APP_COLOR__ } from '../src/common/constants';
import colors from '../src/common/data/colors';
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

const DSCLProvider = (Story, context) => {
	console.log(context);
	return (
		<Provider
			color={context?.globals?.color}
			colorMode={context?.globals?.backgrounds?.value === '#f8fafc' ? 'light' : 'dark'}
		>
			<Story />
		</Provider>
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
				items: colors.map((color) => ({
					title: capitalize(color),
					value: color
				})),
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
