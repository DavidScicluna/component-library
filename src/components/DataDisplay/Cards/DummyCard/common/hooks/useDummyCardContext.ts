import { useContext } from 'react';

import { NoUndefinedField } from '../../../../../../common/types';
import {
	color as defaultColor,
	colorMode as defaultColorMode,
	spacing as defaultSpacing,
	variant as defaultVariant
} from '../../../common/default/props';
import { DummyCardContext } from '../..';
import { DummyCardContext as DummyCardContextType } from '../types';

const useDummyCardContext = (): NoUndefinedField<DummyCardContextType> => {
	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		spacing = defaultSpacing,
		variant = defaultVariant
	} = useContext<DummyCardContextType>(DummyCardContext);

	return { color, colorMode, spacing, variant };
};

export default useDummyCardContext;
