import { memoize, merge } from 'lodash';

import { colorMode as defaultColorMode, size as defaultSize } from '../data/defaultPropValues';

import dark from './dark';
import disabled from './disabled';
import formlabel from './formLabel';
import light from './light';
import { FormLabelStyleProps, FormLabelStyleReturn } from './types';

export default memoize((props: FormLabelStyleProps): FormLabelStyleReturn => {
	const { theme, colorMode = defaultColorMode, size = defaultSize } = props;

	const scheme = colorMode === 'light' ? light : dark;

	return {
		formLabel: merge(formlabel({ theme, size }), scheme({ theme })),
		disabled: disabled()
	};
});
