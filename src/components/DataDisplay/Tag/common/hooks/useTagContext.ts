import { useContext } from 'react';

import { NoUndefinedField } from '../../../../../common/types';
import { TagContext } from '../..';
import { TagContext as TagContextType } from '../../types';
import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isDisabled as defaultIsDisabled,
	size as defaultSize,
	variant as defaultVariant
} from '../data/defaultPropValues';

const useTagContext = (): NoUndefinedField<TagContextType> => {
	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		isDisabled = defaultIsDisabled,
		size = defaultSize,
		variant = defaultVariant
	} = useContext<TagContextType>(TagContext);

	return { color, colorMode, isDisabled, size, variant };
};

export default useTagContext;
