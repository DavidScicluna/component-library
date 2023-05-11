import { merge } from 'lodash-es';
import memoize from 'micro-memoize';

import { colorMode as defaultColorMode } from '../../../../../common/default/props';
import { size as defaultSize } from '../../../FormControl/common/default/props';

import dark from './dark';
import formDescription from './formDescription';
import light from './light';
import { FormDescriptionStyleProps, FormDescriptionStyleReturn } from './types';

export default memoize((props: FormDescriptionStyleProps): FormDescriptionStyleReturn => {
	const { theme, colorMode = defaultColorMode, size = defaultSize } = props;

	const scheme = colorMode === 'light' ? light : dark;

	return {
		formDescription: merge(formDescription({ theme, size }), scheme({ theme }))
	};
});
