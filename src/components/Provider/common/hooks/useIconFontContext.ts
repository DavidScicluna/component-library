import { useContext } from 'react';

import type { DeepRequired } from 'utility-types';

import {
	DEFAULT_HAS_FILLEDICON_LOADED,
	DEFAULT_HAS_OUTLINEDICON_LOADED,
	DEFAULT_HAS_TWOTONEICON_LOADED
} from '@common/constants';

import { IconFontContext } from '@components/Provider/Provider';

import type { IconFontContext as IconFontContextType } from '../types';

const useIconFontContext = (): DeepRequired<IconFontContextType> => {
	const {
		filled = DEFAULT_HAS_FILLEDICON_LOADED,
		outlined = DEFAULT_HAS_OUTLINEDICON_LOADED,
		twoTone = DEFAULT_HAS_TWOTONEICON_LOADED
	} = useContext<IconFontContextType>(IconFontContext);

	return { filled, outlined, twoTone };
};

export default useIconFontContext;
