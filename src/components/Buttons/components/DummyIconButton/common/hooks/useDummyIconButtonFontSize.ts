import { useMemo } from 'react';

import { getFontSizeHeight } from '@common/utils';

import { __DEFAULT_DUMMY_ICON_BUTTON_LINE_HEIGHT_SIZE__, __DEFAULT_DUMMY_ICON_BUTTON_SIZE__ } from '../constants';
import type { DummyIconButtonProps } from '../types';

import useDummyIconButtonResponsiveValues from './useDummyIconButtonResponsiveValues';

type UseDummyIconButtonFontSizeProps = Pick<DummyIconButtonProps, 'size'>;

const useDummyIconButtonFontSize = (props: UseDummyIconButtonFontSizeProps): number => {
	const { size: sizeProp = __DEFAULT_DUMMY_ICON_BUTTON_SIZE__ } = props;

	const { size } = useDummyIconButtonResponsiveValues({ size: sizeProp });

	const fontSize = useMemo<number>(() => {
		return getFontSizeHeight(size, __DEFAULT_DUMMY_ICON_BUTTON_LINE_HEIGHT_SIZE__);
	}, [size]);

	return fontSize;
};

export default useDummyIconButtonFontSize;
