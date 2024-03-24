import { useMemo } from 'react';

import { getFontSizeHeight } from '@common/utils';

import { DEFAULT_BUTTON_LINE_HEIGHT_SIZE, DEFAULT_BUTTON_SIZE } from '../constants';
import type { ButtonUniqueProps } from '../types';

import useButtonResponsiveValues from './useButtonResponsiveValues';

type UseButtonFontSizeProps = Pick<ButtonUniqueProps, 'size'>;

const useButtonFontSize = (props: UseButtonFontSizeProps): number => {
	const { size: sizeProp = DEFAULT_BUTTON_SIZE } = props;

	const { size } = useButtonResponsiveValues({ size: sizeProp });

	const fontSize = useMemo<number>(() => {
		return getFontSizeHeight(size, DEFAULT_BUTTON_LINE_HEIGHT_SIZE);
	}, [size]);

	return fontSize;
};

export default useButtonFontSize;
