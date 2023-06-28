import { useContext } from 'react';

import { color as defaultColor, colorMode as defaultColorMode } from '../../../../../../common/default/props';
import { NoUndefinedField } from '../../../../../../common/types';
import {
	isDivisible as defaultIsDivisible,
	spacing as defaultSpacing,
	variant as defaultVariant
} from '../../../common/default/props';
import { DummyCardContext } from '../..';
import { DummyCardContext as DummyCardContextType } from '../types';

const useDummyCardContext = (): NoUndefinedField<DummyCardContextType> => {
	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		isDivisible = defaultIsDivisible,
		spacing = defaultSpacing,
		variant = defaultVariant
	} = useContext<DummyCardContextType>(DummyCardContext);

	return {
		color,
		colorMode,
		isDivisible,
		spacing,
		variant
	};
};

export default useDummyCardContext;
