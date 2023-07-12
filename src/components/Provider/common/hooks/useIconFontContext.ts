import { useContext } from 'react';

import {
	__DEFAULT_HAS_FILLEDICON_LOADED__,
	__DEFAULT_HAS_OUTLINEDICON_LOADED__,
	__DEFAULT_HAS_TWOTONEICON_LOADED__
} from '../../../../common/constants/props';
import type { NoUndefinedField } from '../../../../common/types';
import { IconFontContext } from '../..';
import { IconFontContext as IconFontContextType } from '../types';

const useIconFontContext = (): NoUndefinedField<IconFontContextType> => {
	const {
		filled = __DEFAULT_HAS_FILLEDICON_LOADED__,
		outlined = __DEFAULT_HAS_OUTLINEDICON_LOADED__,
		twoTone = __DEFAULT_HAS_TWOTONEICON_LOADED__
	} = useContext<IconFontContextType>(IconFontContext);

	return { filled, outlined, twoTone };
};

export default useIconFontContext;
