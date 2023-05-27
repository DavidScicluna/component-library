import { mode, StyleFunctionProps, Styles } from '@chakra-ui/theme-tools';
import { Dict } from '@chakra-ui/utils';

import colors from './foundations/colors';

const styles: Styles = {
	global: (props: StyleFunctionProps | Dict<unknown>) => ({
		'html': {
			scrollBehavior: 'smooth'
		},
		'body': {
			color: mode(colors.gray[900], colors.gray[50])(props),
			background: mode(colors.gray[50], colors.gray[900])(props),
			backgroundColor: mode(colors.gray[50], colors.gray[900])(props),

			transition: 'none',
			transitionProperty: 'none',
			transitionDuration: 'none',
			transitionTimingFunction: 'none'
			// transition: 'none',
			// transitionProperty: [
			// 	'background-color',
			// 	'background-image',
			// 	'background-position',
			// 	'border-color',
			// 	'color',
			// 	'fill',
			// 	'stroke',
			// 	'box-shadow'
			// ].join(', '),
			// transitionDuration: transition.duration.normal,
			// transitionTimingFunction: transition.easing['ease-in-out']
		},
		'*, *::before, *::after': {
			fontFamily: 'body',

			boxShadow: 'none',
			outline: `0px ${colors.transparent}`,

			transition: 'none',
			transitionProperty: 'none',
			transitionDuration: 'none',
			transitionTimingFunction: 'none'
			// transition: 'none',
			// transitionProperty: [
			// 	'background-color',
			// 	'background-image',
			// 	'background-position',
			// 	'border-color',
			// 	'color',
			// 	'fill',
			// 	'stroke',
			// 	'box-shadow'
			// ].join(', '),
			// transitionDuration: transition.duration.normal,
			// transitionTimingFunction: transition.easing['ease-in-out']
		}
	})
};

export default styles;
