import { useMemo } from 'react';

import { getFontSizeHeight } from '@common/utils';

import { DEFAULT_BUTTON_LINE_HEIGHT_SIZE, DEFAULT_BUTTON_SIZE } from '../constants';
import type { ButtonElement, ButtonProps } from '../types';

import useButtonResponsiveValues from './useButtonResponsiveValues';

type UseButtonFontSizeProps<Element extends ButtonElement> = Pick<ButtonProps<Element>, 'size'>;

const useButtonFontSize = <Element extends ButtonElement>(props: UseButtonFontSizeProps<Element>): number => {
	const { size: sizeProp = DEFAULT_BUTTON_SIZE } = props;

	const { size } = useButtonResponsiveValues<Element>({ size: sizeProp });

	const fontSize = useMemo<number>(() => {
		return getFontSizeHeight(size, DEFAULT_BUTTON_LINE_HEIGHT_SIZE);
	}, [size]);

	return fontSize;
};

export default useButtonFontSize;
