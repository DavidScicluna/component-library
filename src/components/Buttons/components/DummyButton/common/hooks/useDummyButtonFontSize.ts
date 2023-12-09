import { useMemo } from 'react';

import { getFontSizeHeight } from '@common/utils';

import { __DEFAULT_DUMMY_BUTTON_LINE_HEIGHT_SIZE__, __DEFAULT_DUMMY_BUTTON_SIZE__ } from '../constants';
import type { DummyButtonProps } from '../types';

import useDummyButtonResponsiveValues from './useDummyButtonResponsiveValues';

type UseDummyButtonFontSizeProps = Pick<DummyButtonProps, 'size'>;

const useDummyButtonFontSize = (props: UseDummyButtonFontSizeProps): number => {
	const { size: sizeProp = __DEFAULT_DUMMY_BUTTON_SIZE__ } = props;

	const { size } = useDummyButtonResponsiveValues({ size: sizeProp });

	const fontSize = useMemo<number>(() => {
		return getFontSizeHeight(size, __DEFAULT_DUMMY_BUTTON_LINE_HEIGHT_SIZE__);
	}, [size]);

	return fontSize;
};

export default useDummyButtonFontSize;
