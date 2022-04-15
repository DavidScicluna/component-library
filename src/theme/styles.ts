import { Styles, mode } from '@chakra-ui/theme-tools';

import transition from './foundations/transition';

const styles: Styles = {
	global: (props) => ({
		'body': {
			color: mode('gray.900', 'gray.50')(props),
			bg: mode('gray.50', 'gray.900')(props)
		},
		'*, *::before, *::after': {
			fontFamily: 'body',
			lineHeight: 'normal',
			transition: `${transition.duration.normal} ${transition.easing['ease-in-out']}`
		}
	})
};

export default styles;
