import { useMemo } from 'react';

import { getFontSizeHeight } from '@common/utils';

import { DEFAULT_ICON_BUTTON_LINE_HEIGHT_SIZE, DEFAULT_ICON_BUTTON_SIZE } from '../constants';
import type { IconButtonUniqueProps } from '../types';

import useIconButtonResponsiveValues from './useIconButtonResponsiveValues';

type UseIconButtonFontSizeProps = Pick<IconButtonUniqueProps, 'size'>;

const useIconButtonFontSize = (props: UseIconButtonFontSizeProps): number => {
	const { size: sizeProp = DEFAULT_ICON_BUTTON_SIZE } = props;

	const { size } = useIconButtonResponsiveValues({ size: sizeProp });

	const fontSize = useMemo<number>(() => {
		return getFontSizeHeight(size, DEFAULT_ICON_BUTTON_LINE_HEIGHT_SIZE);
	}, [size]);

	return fontSize;
};

export default useIconButtonFontSize;
