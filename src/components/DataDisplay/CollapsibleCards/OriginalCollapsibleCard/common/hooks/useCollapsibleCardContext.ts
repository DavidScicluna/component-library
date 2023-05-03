import { useContext } from 'react';

import { color as defaultColor, colorMode as defaultColorMode } from '../../../../../../common/default/props';
import { NoUndefinedField } from '../../../../../../common/types';
import {
	isDivisible as defaultIsDivisible,
	spacing as defaultSpacing,
	variant as defaultVariant
} from '../../../common/default/props';
import { CollapsibleCardContext } from '../..';
import { CollapsibleCardContext as CollapsibleCardContextType } from '../types';

const useCollapsibleCardContext = (): NoUndefinedField<CollapsibleCardContextType> => {
	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		isDivisible = defaultIsDivisible,
		spacing = defaultSpacing,
		variant = defaultVariant,
		...rest
	} = useContext<CollapsibleCardContextType>(CollapsibleCardContext);

	return { color, colorMode, isDivisible, spacing, variant, ...rest };
};

export default useCollapsibleCardContext;
