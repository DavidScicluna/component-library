import { useMemo } from 'react';

import { getFontSizeHeight } from '@common/utils';

import { __DEFAULT_DUMMY_ICON_BUTTON_LINE_HEIGHT_SIZE__, __DEFAULT_DUMMY_ICON_BUTTON_SIZE__ } from '../constants';
import type { DummyIconButtonElement, DummyIconButtonProps } from '../types';

import useDummyIconButtonResponsiveValues from './useDummyIconButtonResponsiveValues';

type UseDummyIconButtonFontSizeProps<Element extends DummyIconButtonElement> = Pick<
	DummyIconButtonProps<Element>,
	'size'
>;

const useDummyIconButtonFontSize = <Element extends DummyIconButtonElement>(
	props: UseDummyIconButtonFontSizeProps<Element>
): number => {
	const { size: sizeProp = __DEFAULT_DUMMY_ICON_BUTTON_SIZE__ } = props;

	const { size } = useDummyIconButtonResponsiveValues<Element>({ size: sizeProp });

	const fontSize = useMemo<number>(() => {
		return getFontSizeHeight(size, __DEFAULT_DUMMY_ICON_BUTTON_LINE_HEIGHT_SIZE__);
	}, [size]);

	return fontSize;
};

export default useDummyIconButtonFontSize;
