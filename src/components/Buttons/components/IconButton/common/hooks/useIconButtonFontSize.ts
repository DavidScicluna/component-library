import { useMemo } from 'react';

import { getFontSizeHeight } from '@common/utils';

import { __DEFAULT_ICON_BUTTON_LINE_HEIGHT_SIZE__, __DEFAULT_ICON_BUTTON_SIZE__ } from '../constants';
import type { IconButtonProps } from '../types';

import useIconButtonResponsiveValues from './useIconButtonResponsiveValues';

type UseIconButtonFontSizeProps = Pick<IconButtonProps, 'size'>;

const useIconButtonFontSize = (props: UseIconButtonFontSizeProps): number => {
	const { size: sizeProp = __DEFAULT_ICON_BUTTON_SIZE__ } = props;

	const { size } = useIconButtonResponsiveValues({ size: sizeProp });

	const fontSize = useMemo<number>(() => {
		return getFontSizeHeight(size, __DEFAULT_ICON_BUTTON_LINE_HEIGHT_SIZE__);
	}, [size]);

	return fontSize;
};

export default useIconButtonFontSize;
