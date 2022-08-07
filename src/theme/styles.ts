import { Styles, mode } from '@chakra-ui/theme-tools';

import transition from './foundations/transition';

const styles: Styles = {
	global: (props: Styles['global']) => ({
		'html': {
			scrollBehavior: 'smooth'
		},
		'body': {
			color: mode('gray.900', 'gray.50')(props),
			background: mode('gray.50', 'gray.900')(props),
			backgroundColor: mode('gray.50', 'gray.900')(props),

			transition: 'none',
			transitionProperty: [
				'background-color',
				'background-image',
				'background-position',
				'border-color',
				'color',
				'fill',
				'stroke',
				'box-shadow'
			],
			transitionDuration: transition.duration.normal,
			transitionTimingFunction: transition.easing['ease-in-out']
		},
		'*, *::before, *::after': {
			fontFamily: 'body',

			boxShadow: 'none',
			outline: '0px transparent',

			transition: 'none',
			transitionProperty: [
				'background-color',
				'background-image',
				'background-position',
				'border-color',
				'color',
				'fill',
				'stroke',
				'box-shadow'
			],
			transitionDuration: transition.duration.normal,
			transitionTimingFunction: transition.easing['ease-in-out']
		}
	})
};

export default styles;
