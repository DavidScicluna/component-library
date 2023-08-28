import { useContext } from 'react';

import type { DeepRequired } from 'utility-types';

import {
	__DEFAULT_HAS_FILLEDICON_LOADED__,
	__DEFAULT_HAS_OUTLINEDICON_LOADED__,
	__DEFAULT_HAS_TWOTONEICON_LOADED__
} from '@common/constants';

import { IconFontContext } from '@components/Provider/Provider';

import type { IconFontContext as IconFontContextType } from '../types';

const useIconFontContext = (): DeepRequired<IconFontContextType> => {
	const {
		filled = __DEFAULT_HAS_FILLEDICON_LOADED__,
		outlined = __DEFAULT_HAS_OUTLINEDICON_LOADED__,
		twoTone = __DEFAULT_HAS_TWOTONEICON_LOADED__
	} = useContext<IconFontContextType>(IconFontContext);

	return { filled, outlined, twoTone };
};

export default useIconFontContext;
