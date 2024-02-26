import { useMemo } from 'react';

import { getFontSizeHeight } from '@common/utils';

import { DEFAULT_ICON_BUTTON_LINE_HEIGHT_SIZE, DEFAULT_ICON_BUTTON_SIZE } from '../constants';
import type { IconButtonElement, IconButtonProps } from '../types';

import useIconButtonResponsiveValues from './useIconButtonResponsiveValues';

type UseIconButtonFontSizeProps<Element extends IconButtonElement> = Pick<IconButtonProps<Element>, 'size'>;

const useIconButtonFontSize = <Element extends IconButtonElement>(
	props: UseIconButtonFontSizeProps<Element>
): number => {
	const { size: sizeProp = DEFAULT_ICON_BUTTON_SIZE } = props;

	const { size } = useIconButtonResponsiveValues<Element>({ size: sizeProp });

	const fontSize = useMemo<number>(() => {
		return getFontSizeHeight(size, DEFAULT_ICON_BUTTON_LINE_HEIGHT_SIZE);
	}, [size]);

	return fontSize;
};

export default useIconButtonFontSize;
