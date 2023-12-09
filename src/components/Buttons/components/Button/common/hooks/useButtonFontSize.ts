import { useMemo } from 'react';

import { getFontSizeHeight } from '@common/utils';

import { __DEFAULT_BUTTON_LINE_HEIGHT_SIZE__, __DEFAULT_BUTTON_SIZE__ } from '../constants';
import type { ButtonProps } from '../types';

import useButtonResponsiveValues from './useButtonResponsiveValues';

type UseButtonFontSizeProps = Pick<ButtonProps, 'size'>;

const useButtonFontSize = (props: UseButtonFontSizeProps): number => {
	const { size: sizeProp = __DEFAULT_BUTTON_SIZE__ } = props;

	const { size } = useButtonResponsiveValues({ size: sizeProp });

	const fontSize = useMemo<number>(() => {
		return getFontSizeHeight(size, __DEFAULT_BUTTON_LINE_HEIGHT_SIZE__);
	}, [size]);

	return fontSize;
};

export default useButtonFontSize;
